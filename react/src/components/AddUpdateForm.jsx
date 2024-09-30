import React, { useEffect, useState } from "react";
import { useCustomer } from "./hooks/CustomerContext";
import { isValidText, isValidEmail } from "../utils/Validator";
import AddUpdateFormTitle from './AddUpdateFormTitle';
import FormButtons from './FormButtons';
import './styles/AddUpdateForm.css';

const AddUpdateForm = () => {

  const { customer } = useCustomer();
  const [customerData, setCustomerData] = useState(customer);

  const onType = (field, event) => {
    setCustomerData(
      {
        ...customerData,
        [field]: event.target.value
      }
    )
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
        <FormButtons customerData={customerData} setCustomerData={setCustomerData} />
      </div>
    </div >
  )
}

export default AddUpdateForm; 