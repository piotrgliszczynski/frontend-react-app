import React from 'react';
import CustomerListTitle from './CustomerListTitle';
import CustomerTable from './CustomerTable';
import './styles/CustomerList.css';

const CustomerList = (props) => {
  return (
    <div className="customer-list">
      <CustomerListTitle />
      <CustomerTable customerData={props.customerData} />
    </div>
  )
};

export default CustomerList;