import React, { createContext, useContext } from 'react';
import { render, screen } from '@testing-library/react';
import AddUpdateForm from './AddUpdateForm';
import '@testing-library/jest-dom';
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


describe('Add-Update form', () => {

  afterEach(() => {
    CustomerContext.useCustomer.mockClear();
  })

  it('Should have all components and in state Add', () => {
    // Given
    const title = 'Add';
    const nameLabel = 'Name:';
    const namePlaceholder = 'Customer Name';

    const emailLabel = 'Email:';
    const emailPlaceholder = 'name@company.com';

    const passwordLabel = 'Pass:';
    const passwordPlaceholder = 'password';

    const deleteName = 'Delete';
    const saveName = 'Save';
    const cancelName = 'Cancel';

    const contextValues = {
      customer: EMPTY_CUSTOMER,
      emptyCustomer: EMPTY_CUSTOMER
    }

    jest.spyOn(CustomerContext, 'useCustomer').mockImplementationOnce(() => contextValues);

    render(
      <AddUpdateForm />
    );

    // When
    const titleElement = screen.getByRole('heading', { name: title });
    const nameLabelElement = screen.getByText(nameLabel);
    const nameInputElement = screen.getByPlaceholderText(namePlaceholder);
    const emailLabelElement = screen.getByText(emailLabel);
    const emailPlaceholderElement = screen.getByPlaceholderText(emailPlaceholder);
    const passwordLabelElement = screen.getByText(passwordLabel);
    const passwordPlaceholderElement = screen.getByPlaceholderText(passwordPlaceholder);
    const deleteButton = screen.getByRole('button', { name: deleteName })
    const saveButton = screen.getByRole('button', { name: saveName })
    const cancelButton = screen.getByRole('button', { name: cancelName })

    // Then
    expect(titleElement).toBeInTheDocument();
    expect(nameLabelElement).toBeInTheDocument();
    expect(nameInputElement).toBeInTheDocument();
    expect(emailLabelElement).toBeInTheDocument();
    expect(emailPlaceholderElement).toBeInTheDocument();
    expect(passwordLabelElement).toBeInTheDocument();
    expect(passwordPlaceholderElement).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it("Should fill form when in Update state", async () => {
    // Given
    const title = 'Update';
    const nameValue = CUSTOMER.name;
    const emailValue = CUSTOMER.email;
    const passwordValue = CUSTOMER.password;
    const contextValues = {
      customer: CUSTOMER,
      emptyCustomer: EMPTY_CUSTOMER
    }

    jest.spyOn(CustomerContext, 'useCustomer').mockImplementationOnce(() => contextValues);

    render(
      <AddUpdateForm />
    );

    // When
    const titleElement = await screen.findByRole('heading', { name: title });
    const nameInput = await screen.findByDisplayValue(nameValue);
    const emailInput = await screen.findByDisplayValue(emailValue);
    const passwordInput = await screen.findByDisplayValue(passwordValue);

    // Then
    expect(titleElement).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  })
});