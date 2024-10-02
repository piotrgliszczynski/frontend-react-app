import React, { createContext, useContext, useState } from 'react';
import { getAll, post, put, deleteById } from '../../rest/restdb';

const DataContext = createContext([]);

export const DataProvider = ({ children }) => {
  const [customerData, setCustomerData] = useState([]);

  const fetchCustomers = (searchTerm) => {
    getAll(searchTerm).then(response => setCustomerData(response));
  }

  const deleteCustomer = async (id) => {
    await deleteById(id);
    alert(`Customer with id ${id} was deleted`);
    fetchCustomers();
  }

  const addCustomer = async (newCustomer) => {
    const customerResponse = await post(newCustomer);
    alert(`New customer with id ${customerResponse.id} was created`);
    fetchCustomers();
  }

  const updateCustomer = async (changedCustomer) => {
    const customerResponse = await put(changedCustomer);
    alert(`Customer with id ${customerResponse.id} was updated`);
    fetchCustomers();
  }

  return (
    <DataContext.Provider value={
      { customerData, fetchCustomers, deleteCustomer, addCustomer, updateCustomer }
    }>
      {children}
    </DataContext.Provider>
  )
}

export const useCustomerData = () => useContext(DataContext);