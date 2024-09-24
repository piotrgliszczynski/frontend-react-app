import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomerList from './CustomerList';
import '@testing-library/jest-dom';
import * as restdb from '../rest/restdb';

const returnData = [
  {
    "id": 0,
    "name": "Mary Jackson",
    "email": "maryj@abc.com",
    "password": "maryj"
  }];

describe("Customer List", () => {

  beforeEach(() => {
    jest.spyOn(restdb, 'getAll').mockResolvedValueOnce(returnData);
  })

  afterEach(() => {
    restdb.getAll.mockClear();
  })

  it("Customer List title should be visible", async () => {
    // Given
    const HEADING_TITLE = 'Customer List';
    render(<CustomerList />);

    // When
    const headingElement = await screen.findByRole('heading', { name: new RegExp(HEADING_TITLE) });

    // Then
    expect(headingElement).toBeInTheDocument();
  })

  it('Should contain Name, Email and Pass column row', async () => {
    // Given
    const nameColumn = 'Name';
    const emailColumn = 'Email';
    const passwordColumn = 'Pass';
    const { findByRole } = render(<CustomerList />);

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
    const { findByRole } = render(<CustomerList />);

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
})