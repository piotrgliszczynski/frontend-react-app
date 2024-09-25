import React from "react";

const AddUpdateForm = () => {
  return (
    <>
      <h2 id="add-update-form-title">Add/Update</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Customer Name"></input>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="name@company.com"></input>
      </div>
      <div>
        <label htmlFor="password">Pass:</label>
        <input type="text" id="password" placeholder="password"></input>
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