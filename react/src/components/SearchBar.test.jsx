import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar';
import { BrowserRouter } from 'react-router-dom';

describe("Search Bar", () => {
  it("Should contain search bar and search button", () => {
    // Given
    const placeholderSearch = 'Search for customer name';
    const buttonText = 'Search';

    render(
      <SearchBar />,
      { wrapper: BrowserRouter }
    );

    // When
    const inputElement = screen.getByPlaceholderText(placeholderSearch);
    const buttonElement = screen.getByRole('button', { target: { name: buttonText } });

    // Then
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("Should be able to enter and search", () => {
    // Given
    const placeholderSearch = 'Search for customer name';
    const buttonText = 'Search';

    const mockSearch = jest.fn();

    render(
      <SearchBar doSearch={mockSearch} />,
      { wrapper: BrowserRouter }
    );
    const inputElement = screen.getByPlaceholderText(placeholderSearch);
    const buttonElement = screen.getByRole('button', { target: { name: buttonText } });

    // When
    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.click(buttonElement);

    // Then
    expect(mockSearch).toHaveBeenCalledTimes(1);
    expect(mockSearch).toHaveBeenCalledWith('test');
  })
})