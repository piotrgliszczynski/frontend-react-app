import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { getAll, deleteById, post, put } from './rest/restdb';
import AddUpdateForm from './components/AddUpdateForm'
import CustomerList from './components/CustomerList'
import Heading from './components/Heading';
import { CustomerProvider } from './components/hooks/CustomerContext'

function App() {

  const [customerData, setCustomerData] = useState([]);

  const fetchCustomers = () => {
    getAll().then(response => setCustomerData(response));
  }

  const deleteCustomer = (id) => {
    deleteById(id).then(() => alert(`Customer with id ${id} was deleted`));
    setCustomerData(
      customerData.filter(customer => customer.id !== id)
    );
  }

  const addCustomer = async (newCustomer) => {
    const customerResponse = await post(newCustomer);
    setCustomerData(
      [...customerData, customerResponse]
    );
  }

  const updateCustomer = async (changedCustomer) => {
    const customerResponse = await put(changedCustomer);

    setCustomerData(customerData.map(
      currCustomer =>
        currCustomer.id === customerResponse.id ? customerResponse : currCustomer
    ));
  }

  const searchCustomer = async (searchTerm) => {
    if (searchTerm) {
      setCustomerData(
        customerData.filter(customer => customer.name.includes(searchTerm))
      );
      return;
    }
    fetchCustomers();
  }

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <>
      <BrowserRouter>
        <CustomerProvider>
          <Heading />
          <Routes>
            <Route exact path="/" element={
              <CustomerList customerData={customerData} doSearch={searchCustomer} />}
            />
            <Route path="/customer-form" element={
              <AddUpdateForm crudOperations={{ fetchCustomers, deleteCustomer, addCustomer, updateCustomer }} />}
            />
          </Routes>
        </CustomerProvider>
      </BrowserRouter>
    </>
  )
}

export default App
