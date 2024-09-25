import React from "react";

const AddUpdateForm = () => {
  return (
    <>
      <h2>Add/Update</h2>
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
        <button>Delete</button>
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </>
  )
}

export default AddUpdateForm;