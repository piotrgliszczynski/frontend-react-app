import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import AddUpdateForm from './components/AddUpdateForm'
import CustomerList from './components/CustomerList'
import Heading from './components/Heading';
import { CustomerProvider } from './components/hooks/CustomerContext'
import { DataProvider } from './components/hooks/DataProviderContext';
import LoginForm from './components/LoginForm';
import RequireAuth from './components/RequireAuth';

function App() {

  return (
    <>
      <BrowserRouter>
        <CustomerProvider>
          <DataProvider>
            <Heading />
            <Routes>
              <Route exact path="/" element={<CustomerList />} />
              <Route path="/customer-form" element={
                <RequireAuth>
                  <AddUpdateForm />
                </RequireAuth>
              } />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </DataProvider>
        </CustomerProvider>
      </BrowserRouter>
    </>
  )
}

export default App
