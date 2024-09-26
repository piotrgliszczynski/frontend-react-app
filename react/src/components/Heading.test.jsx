import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Heading from './Heading';
import { BrowserRouter } from 'react-router-dom';

describe("Heading", () => {
  it("Should have Home and Add/Update links", () => {
    // Given
    const homeLink = "Home";
    const formLink = "Add/Update";

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
  })
});