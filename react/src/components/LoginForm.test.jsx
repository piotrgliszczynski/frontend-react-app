import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './LoginForm';

describe('Login form', () => {
  it('Should have title, username, password and Login button elements', () => {
    // Given
    const title = 'Login';
    const usernameLabel = 'Username:';
    const usernamePlaceholder = 'Enter username';
    const passwordLabel = 'Password:';
    const passwordPlaceholder = 'Enter password';
    const buttonText = 'Login';

    render(
      <LoginForm />,
      { wrapper: BrowserRouter }
    );

    // When
    const titleElement = screen.getByRole('heading', { name: title });
    const usernameLabelElement = screen.getByText(usernameLabel);
    const usernameElement = screen.getAllByPlaceholderText(usernamePlaceholder);
    const passwordLabelElement = screen.getByText(passwordLabel);
    const passwordElement = screen.getByPlaceholderText(passwordPlaceholder);
    const buttonElement = screen.getByRole('button', { name: buttonText });

    // Then
    expect(titleElement).toBeInTheDocument;
    expect(usernameLabelElement).toBeInTheDocument;
    expect(usernameElement).toBeInTheDocument;
    expect(passwordLabelElement).toBeInTheDocument;
    expect(passwordElement).toBeInTheDocument;
    expect(buttonElement).toBeInTheDocument;
  })
})