import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomerTable from './CustomerTable';
import '@testing-library/jest-dom';

describe('Customer Table', () => {
  it('Should contain Name, Email and Pass column row', () => {
    // Given
    const nameColumn = 'Name';
    const emailColumn = 'Email';
    const passwordColumn = 'Pass';
    render(<CustomerTable />);

    // When
    const nameElement = screen.getByRole('columnheader', { name: nameColumn });
    const emailElement = screen.getByRole('columnheader', { name: emailColumn });
    const passwordElement = screen.getByRole('columnheader', { name: passwordColumn });

    // Then
    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(passwordElement).toBeInTheDocument();
  })
})