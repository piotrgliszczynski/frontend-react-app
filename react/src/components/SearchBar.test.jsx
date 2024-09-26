import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar';

describe("Search Bar", () => {
  it("Should contain search bar and search button", () => {
    // Given
    const placeholderSearch = 'Search for customer name';
    const buttonText = 'Search';

    render(
      <SearchBar />
    );

    // When
    const inputElement = screen.getByPlaceholderText(placeholderSearch);
    const buttonElement = screen.getByRole('button', { target: { name: buttonText } });

    // Then
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
})