import React, { useEffect, useState } from "react";
import { useCustomer } from "./hooks/CustomerContext";

const AddUpdateForm = (props) => {

  const { customer, emptyCustomer } = useCustomer();
  const [customerData, setCustomerData] = useState(customer);

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
      props.deleteCustomer(customerData.id);
    }
  }

  useEffect(() => {
    setCustomerData(customer)
  }, [customer]);

  return (
    <>
      <h2 id="add-update-form-title">{setTitle()}</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={(event) => onType('name', event)}
          placeholder="Customer Name"
          value={customerData.name}></input>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" onChange={(event) => onType('email', event)}
          placeholder="name@company.com"
          value={customerData.email}></input>
      </div>
      <div>
        <label htmlFor="password">Pass:</label>
        <input type="text" id="password" onChange={(event) => onType('password', event)}
          placeholder="password"
          value={customerData.password}></input>
      </div>
      <div>
        <button id="btn-delete" onClick={onDelete}>Delete</button>
        <button id="btn-save">Save</button>
        <button id="btn-cancel">Cancel</button>
      </div>
    </>
  )
}

export default AddUpdateForm; 