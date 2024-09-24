import React from 'react';
import { render, screen } from '@testing-library/react';
import AddUpdateForm from './AddUpdateForm';
import '@testing-library/jest-dom';

describe('Add-Update form', () => {
  it('Should have all components', () => {
    // Given
    const title = 'Add/Update';
    const nameLabel = 'Name:';
    const namePlaceholder = 'Customer Name';

    const emailLabel = 'Email:';
    const emailPlaceholder = 'name@company.com';

    const passwordLabel = 'Pass:';
    const passwordPlaceholder = 'password';

    const deleteName = 'Delete';
    const saveName = 'Save';
    const cancelName = 'Cancel';

    render(<AddUpdateForm />);

    // When
    const titleElement = screen.getByRole('heading', { name: title });
    const nameLabelElement = screen.getByText(nameLabel);
    const nameInputElement = screen.getByPlaceholderText(namePlaceholder);
    const emailLabelElement = screen.getByText(emailLabel);
    const emailPlaceholderElement = screen.getByPlaceholderText(emailPlaceholder);
    const passwordLabelElement = screen.getByText(passwordLabel);
    const passwordPlaceholderElement = screen.getByPlaceholderText(passwordPlaceholder);
    const deleteButton = screen.getByRole('button', { name: deleteName })
    const saveButton = screen.getByRole('button', { name: saveName })
    const cancelButton = screen.getByRole('button', { name: cancelName })

    // Then
    expect(titleElement).toBeInTheDocument();
    expect(nameLabelElement).toBeInTheDocument();
    expect(nameInputElement).toBeInTheDocument();
    expect(emailLabelElement).toBeInTheDocument();
    expect(emailPlaceholderElement).toBeInTheDocument();
    expect(passwordLabelElement).toBeInTheDocument();
    expect(passwordPlaceholderElement).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  })
});