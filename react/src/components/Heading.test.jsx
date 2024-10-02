import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Heading from './Heading';
import { BrowserRouter } from 'react-router-dom';
import * as CustomerContext from './hooks/CustomerContext';

jest.mock('./hooks/CustomerContext');

const CUSTOMER = {
  "id": 0,
  "name": "Mary Jackson",
  "email": "maryj@abc.com",
  "password": "maryj"
};

const EMPTY_CUSTOMER = {
  id: -1,
  name: "",
  email: "",
  password: ""
};

describe("Heading", () => {

  afterEach(() => {
    CustomerContext.useCustomer.mockClear();
  });

  it("Should have Home and Add links when customer is not selected", () => {
    // Given
    const homeLink = "Home";
    const formLink = "Add";

    const contextValues = {
      customer: EMPTY_CUSTOMER,
      emptyCustomer: EMPTY_CUSTOMER
    }
    jest.spyOn(CustomerContext, 'useCustomer').mockImplementationOnce(() => contextValues);

    render(
      <Heading />,
      { wrapper: BrowserRouter }
    );

    // When
    const homeLinkElement = screen.getByRole("link", { name: homeLink });
    const formLinkElement = screen.getByRole("link", { name: formLink });

    // Then
    expect(homeLinkElement).toBeInTheDocument();
    expect(formLinkElement).toBeInTheDocument();
  });

  it("Should have Home and Update links when customer is selected", () => {
    // Given
    const homeLink = "Home";
    const formLink = "Update";

    const contextValues = {
      customer: CUSTOMER,
      emptyCustomer: EMPTY_CUSTOMER
    }
    jest.spyOn(CustomerContext, 'useCustomer').mockImplementationOnce(() => contextValues);

    render(
      <Heading />,
      { wrapper: BrowserRouter }
    );

    // When
    const homeLinkElement = screen.getByRole("link", { name: homeLink });
    const formLinkElement = screen.getByRole("link", { name: formLink });

    // Then
    expect(homeLinkElement).toBeInTheDocument();
    expect(formLinkElement).toBeInTheDocument();
  });

  it("Should have Login link when customer is not logged in", () => {
    // Given
    const loginLink = "Login";

    const contextValues = {
      customer: EMPTY_CUSTOMER,
      emptyCustomer: EMPTY_CUSTOMER
    }
    jest.spyOn(CustomerContext, 'useCustomer').mockImplementationOnce(() => contextValues);

    render(
      <Heading />,
      { wrapper: BrowserRouter }
    );

    // When
    const loginLinkElement = screen.getByRole("link", { name: loginLink });

    // Then
    expect(loginLinkElement).toBeInTheDocument();
  });
});