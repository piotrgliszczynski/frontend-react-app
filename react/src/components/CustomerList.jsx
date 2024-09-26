import React from 'react';
import CustomerListTitle from './CustomerListTitle';
import CustomerTable from './CustomerTable';
import SearchBar from './SearchBar';
import './styles/CustomerList.css';

const CustomerList = (props) => {
  return (
    <div className="customer-list">
      <CustomerListTitle />
      <SearchBar />
      <CustomerTable customerData={props.customerData} />
    </div>
  )
};

export default CustomerList;