import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import RequireAuth from './RequireAuth';
import AddUpdateForm from './AddUpdateForm';
import * as CustomerContext from './hooks/CustomerContext';
import LoginForm from './LoginForm';
import { enableFetchMocks } from 'jest-fetch-mock'

enableFetchMocks();

jest.mock('./hooks/CustomerContext');

const EMPTY_CUSTOMER = {
  id: -1,
  name: "",
  email: "",
  password: ""
};

describe('Require Auth', () => {

  beforeEach(() => {
    fetch.mockImplementation(() => { });
  })

  afterEach(() => {
    CustomerContext.useCustomer.mockReset();
    fetch.mockReset();
  });

  it('Should reroute when user is not logged in', async () => {
    // Given    
    const contextValues = {
      customer: EMPTY_CUSTOMER,
      emptyCustomer: EMPTY_CUSTOMER
    }
    jest.spyOn(CustomerContext, 'useCustomer').mockImplementation(() => contextValues);
    const routes = [
      {
        path: "/customer-form",
        element: (
          <RequireAuth>
            <AddUpdateForm />
          </RequireAuth>
        )
      },
      {
        path: "/login",
        element: (
          <LoginForm />
        )
      }
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/", "/customer-form"],
      initialIndex: 1
    })

    render(
      <RouterProvider router={router} />
    );

    // When
    const loginPageTitle = await screen.findByRole('heading', { name: 'Login' });

    // Then
    expect(loginPageTitle).toBeInTheDocument();
  })
})