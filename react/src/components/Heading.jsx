import React from "react";
import { Link } from "react-router-dom";
import "./styles/Heading.css";

const Heading = () => {
  return (
    <div>
      <Link className="heading-button" to="/">Home</Link>
      <Link className="heading-button" to="/customer-form">Add/Update</Link>
    </div>
  )
}

export default Heading;