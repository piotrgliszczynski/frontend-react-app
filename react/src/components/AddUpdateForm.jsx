import React from "react";
import { useCustomer } from "./hooks/CustomerContext";

const AddUpdateForm = () => {

  const { customer, emptyCustomer } = useCustomer();

  const setTitle = () => {
    return customer.id !== emptyCustomer.id ? 'Update' : 'Add'
  }

  return (
    <>
      <h2 id="add-update-form-title">{setTitle()}</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Customer Name" value={customer.name}></input>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="name@company.com" value={customer.email}></input>
      </div>
      <div>
        <label htmlFor="password">Pass:</label>
        <input type="text" id="password" placeholder="password" value={customer.password}></input>
      </div>
      <div>
        <button id="btn-delete">Delete</button>
        <button id="btn-save">Save</button>
        <button id="btn-cancel">Cancel</button>
      </div>
    </>
  )
}

export default AddUpdateForm; 