import React from "react";
import { Link } from "react-router-dom";
import "./styles/Heading.css";
import { useCustomer } from "./hooks/CustomerContext";

const Heading = () => {

  const { customer, emptyCustomer } = useCustomer();

  const formLinkTitle = () =>
    customer.id === emptyCustomer.id ?
      'Add' : 'Update';

  return (
    <div className="header-container">
      <Link reloadDocument className="heading-title" to="/">Customers App</Link>
      <span>
        <Link reloadDocument className="heading-button" to="/">Home</Link>
        <Link className="heading-button" to="/customer-form">{formLinkTitle()}</Link>
        <Link className="heading-button" to="/login">Login</Link>
      </span>
    </div>
  )
}

export default Heading;