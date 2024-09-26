import React, { useEffect, useState } from 'react';
import { useCustomer } from './hooks/CustomerContext';
import { getAll } from '../rest/restdb';
import './styles/CustomerTable.css';

const CustomerTable = (props) => {

  const customerData = props.customerData;
  const { customer, emptyCustomer, setCustomer } = useCustomer();

  const onRowClick = (selectedCustomer) => {
    if (customer.id === selectedCustomer.id) {
      setCustomer(emptyCustomer);
      return;
    }
    setCustomer(selectedCustomer);
  }

  const selectedClass = (customerId) => {
    if (customer.id !== customerId) {
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