import React from 'react';
import { fireEvent, render, within } from '@testing-library/react';
import CustomerTable from './CustomerTable';
import '@testing-library/jest-dom';
import * as restdb from '../rest/restdb';

const returnData = [
  {
    "id": 0,
    "name": "Mary Jackson",
    "email": "maryj@abc.com",
    "password": "maryj"
  }];

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
    const { findByRole } = render(<CustomerTable />);

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
    const { findByRole } = render(<CustomerTable />);

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

  it('Should fire event when clicking on table', async () => {
    // Given
    jest.spyOn(console, 'log').mockImplementationOnce(() => { });
    const { findByRole } = render(<CustomerTable />);
    const name = await findByRole('cell', { name: returnData[0].name });
    const customerRow = name.closest('tr');

    // When
    fireEvent.click(customerRow);

    // Then
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log.mock.calls[0][1]).toEqual(returnData[0]);
    console.log.mockRestore();
  });
})