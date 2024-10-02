import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
  });

  it('Should be able to enter values', async () => {
    // Given
    const usernamePlaceholder = 'Enter username';
    const passwordPlaceholder = 'Enter password';
    const username = 'test@test.com';
    const password = '12345';

    render(
      <LoginForm />,
      { wrapper: BrowserRouter }
    );

    const usernameElement = screen.getByPlaceholderText(usernamePlaceholder);
    const passwordElement = screen.getByPlaceholderText(passwordPlaceholder);

    // When
    fireEvent.change(usernameElement, { target: { value: username } });
    fireEvent.change(passwordElement, { target: { value: password } });

    const changedUsername = await screen.findByDisplayValue(username);
    const changedPassword = await screen.findByDisplayValue(password);

    // Then
    expect(changedUsername).toBeInTheDocument();
    expect(changedPassword).toBeInTheDocument();
  })
})