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
    <div>
      <Link reloadDocument className="heading-button" to="/">Home</Link>
      <Link className="heading-button" to="/customer-form">{formLinkTitle()}</Link>
    </div>
  )
}

export default Heading;