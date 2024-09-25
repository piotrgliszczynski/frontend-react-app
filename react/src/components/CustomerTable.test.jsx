import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CustomerTable from './CustomerTable';
import '@testing-library/jest-dom';
import * as restdb from '../rest/restdb';
import { CustomerProvider, useCustomer } from './hooks/CustomerContext';

const returnData = [
  {
    "id": 0,
    "name": "Mary Jackson",
    "email": "maryj@abc.com",
    "password": "maryj"
  }];

const EMPTY_CUSTOMER = {
  id: -1,
  name: "",
  email: "",
  password: ""
};

describe('Customer Table', () => {

  beforeEach(() => {
    jest.spyOn(restdb, 'getAll').mockResolvedValueOnce(returnData);
  })

  afterEach(() => {
    restdb.getAll.mockClear();
  })

  it('Should contain Name, Email and Pass column row', async () => {
    // Given
    const nameColumn = 'Name';
    const emailColumn = 'Email';
    const passwordColumn = 'Pass';
    const { findByRole } = render(
      <CustomerProvider>
        <CustomerTable />
      </CustomerProvider>
    );

    // When
    const nameElement = await findByRole('columnheader', { name: nameColumn });
    const emailElement = await findByRole('columnheader', { name: emailColumn });
    const passwordElement = await findByRole('columnheader', { name: passwordColumn });

    // Then
    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(passwordElement).toBeInTheDocument();
  })

  it('Should contain returned data', async () => {
    // Given
    const { findByRole } = render(
      <CustomerProvider>
        <CustomerTable />
      </CustomerProvider>
    );

    // When
    const name = await findByRole('cell', { name: returnData[0].name });
    const email = await findByRole('cell', { name: returnData[0].email });
    const password = await findByRole('cell', { name: returnData[0].password });

    // Then
    expect(restdb.getAll).toHaveBeenCalledTimes(1);
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  })

  it('Should fire event and select when clicking on table', async () => {
    // Given
    const { findByRole } = render(
      <CustomerProvider>
        <CustomerTable />
      </CustomerProvider>
    );
    const name = await findByRole('cell', { name: returnData[0].name });
    const customerRow = name.closest('tr');

    // When
    fireEvent.click(customerRow);
    const nameBold = await findByRole('cell', { name: returnData[0].name });
    const customerRowBold = nameBold.closest('tr');

    // Then
    expect(customerRowBold).toHaveClass('selected');
  });

  it('Should deselect a customer when clicked twice', async () => {
    // Given
    const { findByRole } = render(
      <CustomerProvider>
        <CustomerTable />
      </CustomerProvider>
    );
    const name = await findByRole('cell', { name: returnData[0].name });
    const customerRow = name.closest('tr');

    // When
    fireEvent.click(customerRow);
    const nameBold = await findByRole('cell', { name: returnData[0].name });
    const customerRowBold = nameBold.closest('tr');
    expect(customerRowBold).toHaveClass('selected');

    fireEvent.click(customerRow);
    const nameNormal = await findByRole('cell', { name: returnData[0].name });
    const customerNormal = nameNormal.closest('tr');

    // Then
    expect(customerNormal).not.toHaveClass('selected');
  })


})