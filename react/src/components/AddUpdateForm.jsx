import React, { useEffect, useState } from "react";
import { useCustomer } from "./hooks/CustomerContext";
import AddUpdateFormTitle from './AddUpdateFormTitle';
import './styles/AddUpdateForm.css';
import { useNavigate } from "react-router";
import { useCustomerData } from "./hooks/DataProviderContext";
import { isValidText, isValidEmail } from "../utils/Validator";

const AddUpdateForm = () => {

  const { customer, emptyCustomer, setCustomer } = useCustomer();
  const [customerData, setCustomerData] = useState(customer);
  const { deleteCustomer, addCustomer, updateCustomer } = useCustomerData();
  const navigate = useNavigate();

  const onType = (field, event) => {
    setCustomerData(
      {
        ...customerData,
        [field]: event.target.value
      }
    )
  }

  const isFormValid = () => {
    return isValidText(customerData.name)
      && isValidEmail(customerData.email)
      && isValidText(customerData.password);
  }

  const onDelete = () => {
    if (customerData.id !== emptyCustomer.id) {
      deleteCustomer(customerData.id);
      setCustomer(emptyCustomer);
      navigate("/");
    }
  }

  const onSave = async () => {
    if (!isFormValid()) {
      return;
    }

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
      <AddUpdateFormTitle customerId={customerData.id} />
      <div className="form-parent">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={(event) => onType('name', event)}
          placeholder="Customer Name"
          value={customerData.name}></input>
        <div id="name-error">
          {isValidText(customerData.name) ? '' : <div className="error-message">Enter valid name, name cannot be empty</div>}
        </div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email"
          onChange={(event) => onType('email', event)}
          placeholder="name@company.com"
          value={customerData.email}></input>
        <div id="email-error">
          {isValidEmail(customerData.email) ? '' : <div className="error-message">Enter valid email</div>}
        </div>
        <label htmlFor="password">Pass:</label>
        <input type="text" id="password" onChange={(event) => onType('password', event)}
          placeholder="password"
          value={customerData.password}></input>
        <div id="password-error">
          {isValidText(customerData.password) ? '' : <div className="error-message">Enter valid password, password cannot be empty</div>}
        </div>
        <div className="crud-buttons">
          <button className="btn" id="btn-delete" onClick={onDelete}>Delete</button>
          <button className="btn" id="btn-save" onClick={onSave}>Save</button>
          <button className="btn" id="btn-cancel" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div >
  )
}

export default AddUpdateForm; 