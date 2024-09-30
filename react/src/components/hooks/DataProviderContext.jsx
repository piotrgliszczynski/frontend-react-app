import React, { createContext, useContext, useState } from 'react';
import { getAll, post, put, deleteById } from '../../rest/restdb';
import doSearch from '../../utils/ClientSideSearch';

const DataContext = createContext([]);

export const DataProvider = ({ children }) => {
  const [customerData, setCustomerData] = useState([]);
  const search = doSearch;

  const fetchCustomers = () => {
    getAll().then(response => setCustomerData(response));
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

  const searchCustomer = async (searchTerm) => {
    if (searchTerm) {
      let searchResult = search(customerData, customer => customer.name.includes(searchTerm));
      setCustomerData(searchResult);
      return;
    }
    fetchCustomers();
  }

  return (
    <DataContext.Provider value={
      { customerData, fetchCustomers, deleteCustomer, addCustomer, updateCustomer, searchCustomer }
    }>
      {children}
    </DataContext.Provider>
  )
}

export const useCustomerData = () => useContext(DataContext);