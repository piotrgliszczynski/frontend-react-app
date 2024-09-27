import React, { useEffect, useState } from "react";
import { useCustomer } from "./hooks/CustomerContext";
import './styles/AddUpdateForm.css';
import { useNavigate } from "react-router";
import { useCustomerData } from "./hooks/DataProviderContext";

const AddUpdateForm = () => {

  const { customer, emptyCustomer, setCustomer } = useCustomer();
  const [customerData, setCustomerData] = useState(customer);
  const { deleteCustomer, addCustomer, updateCustomer } = useCustomerData();
  const navigate = useNavigate();

  const setTitle = () => {
    return customerData.id !== emptyCustomer.id ? 'Update' : 'Add'
  }

  const onType = (field, event) => {
    setCustomerData(
      {
        ...customerData,
        [field]: event.target.value
      }
    )
  }

  const onDelete = () => {
    if (customerData.id !== emptyCustomer.id) {
      deleteCustomer(customerData.id);
      setCustomer(emptyCustomer);
      navigate("/");
    }
  }

  const onSave = async () => {
    if (customerData.id === emptyCustomer.id) {
      let newCustomer = customerData;
      delete newCustomer.id;

      addCustomer(newCustomer);
      setCustomerData(emptyCustomer);
      navigate("/");
      return;
    }
    await updateCustomer(customerData);
    setCustomer(emptyCustomer);
    navigate("/");
  }

  const onCancel = () => {
    if (customerData.id !== emptyCustomer.id) {
      setCustomer(emptyCustomer);
    }
    navigate("/");
  }

  useEffect(() => {
    setCustomerData(customer)
  }, [customer]);

  return (
    <div className="add-update-form">
      <h2 id="add-update-form-title">{setTitle()}</h2>
      <div className="form-parent">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={(event) => onType('name', event)}
          placeholder="Customer Name"
          value={customerData.name}></input>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" onChange={(event) => onType('email', event)}
          placeholder="name@company.com"
          value={customerData.email}></input>
        <label htmlFor="password">Pass:</label>
        <input type="text" id="password" onChange={(event) => onType('password', event)}
          placeholder="password"
          value={customerData.password}></input>
        <div className="crud-buttons">
          <button id="btn-delete" onClick={onDelete}>Delete</button>
          <button id="btn-save" onClick={onSave}>Save</button>
          <button id="btn-cancel" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default AddUpdateForm; 