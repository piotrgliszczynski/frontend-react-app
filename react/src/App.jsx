import React, { useState, useEffect } from 'react';
import './App.css'
import { getAll, deleteById, post } from './rest/restdb';
import AddUpdateForm from './components/AddUpdateForm'
import CustomerList from './components/CustomerList'
import { CustomerProvider } from './components/hooks/CustomerContext'

function App() {

  const [customerData, setCustomerData] = useState([]);

  const deleteCustomer = (id) => {
    deleteById(id).then(() => alert(`Customer with id ${id} was deleted`));
    setCustomerData(
      customerData.filter(customer => customer.id !== id)
    );
  }

  const addCustomer = async (newCustomer) => {
    const customerResponse = await post(newCustomer);
    console.log(customerResponse);
    setCustomerData(
      [...customerData, customerResponse]
    );
  }

  useEffect(() => {
    getAll().then(response => setCustomerData(response));
  }, []);

  return (
    <>
      <CustomerProvider>
        <CustomerList customerData={customerData} />
        <AddUpdateForm crudOperations={{ deleteCustomer, addCustomer }} />
      </CustomerProvider>
    </>
  )
}

export default App
