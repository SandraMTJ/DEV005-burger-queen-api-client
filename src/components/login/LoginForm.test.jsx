import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import { vi  } from 'vitest'
// import userEvent from '@testing-library/user-event';


// Mockear useNavigate
vi.mock('react-router-dom', () => {
    return {
      useNavigate: vi.fn()
    };
  });

render(<LoginForm />);
const emailInput = screen.getByPlaceholderText('Email');
const passwordInput = screen.getByPlaceholderText('Password');
const submitButton = screen.getByText('Submit');

describe('LoginForm', () => {
  it('should render the form', () => {
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});

import {  fireEvent } from '@testing-library/react';


describe('LoginForm', () => {

  it('should handle API request failure', async () => {
    // Mock the fetch function
    window.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue({
        message: 'Invalid credentials',
      }),
      status: 400,
    });

    render(<LoginForm />);

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testPassword' } });
    fireEvent.click(submitButton);

    // Wait for the error message to appear
    await screen.findByText('Invalid credentials');

    // Assert the error message is displayed
    expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
  });

  // Add more test cases as needed
});
