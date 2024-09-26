import React from 'react';
import CustomerListTitle from './CustomerListTitle';
import CustomerTable from './CustomerTable';

const CustomerList = (props) => {
  return (
    <>
      <CustomerListTitle />
      <CustomerTable customerData={props.customerData} />
    </>
  )
};

export default CustomerList;