import React, { useEffect, useState } from 'react';
import { getAll } from '../rest/restdb';

const CustomerTable = () => {

  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    getAll().then(response => setCustomerData(response));
  }, []);

  const onRowClick = (customer) => {
    console.log(`Row event`, customer);
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
          <tr onClick={() => onRowClick(customer)} key={customer.id}>
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