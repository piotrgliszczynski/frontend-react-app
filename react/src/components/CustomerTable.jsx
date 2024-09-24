import React, { useEffect, useState } from 'react';
import { getAll } from '../rest/restdb';
import './styles/CustomerTable.css';

const EMPTY_CUSTOMER = {
  id: -1,
  name: "",
  email: "",
  password: ""
};

const CustomerTable = () => {

  const [customerData, setCustomerData] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(EMPTY_CUSTOMER);

  useEffect(() => {
    getAll().then(response => setCustomerData(response));
  }, []);

  const onRowClick = (customer) => {
    if (selectedCustomer.id === customer.id) {
      setSelectedCustomer(EMPTY_CUSTOMER);
      return;
    }
    setSelectedCustomer(customer);
  }

  const selectedClass = (customerId) => {
    if (selectedCustomer.id !== customerId) {
      return undefined;
    }
    return "selected"
  }

  return (
    <table id='customer-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Pass</th>
        </tr>
      </thead>
      <tbody>
        {customerData.map(customer => (
          <tr onClick={() => onRowClick(customer)} className={selectedClass(customer.id)} key={customer.id}>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.password}</td>
          </tr>
        ))}
      </tbody>
    </table >
  )
}

export default CustomerTable;