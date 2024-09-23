import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomerListTitle from './CustomerListTitle';
import '@testing-library/jest-dom';

describe('Customer List Title Component Tests', () => {
  it('Should display correct heading', () => {
    // Given
    const HEADING_TITLE = 'Customer List';
    render(<CustomerListTitle />);

    // When
    const headingElement = screen.getByRole('heading', { name: new RegExp(HEADING_TITLE) });

    // Then
    expect(headingElement).toBeInTheDocument();
  })
})
