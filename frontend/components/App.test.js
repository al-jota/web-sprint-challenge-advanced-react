import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import AppFunctional from './AppFunctional';
import axios from 'axios';

jest.mock('axios');

test('renders headings, buttons, and input fields', () => {
  render(<AppFunctional />);
  expect(screen.getByText(/Coordinates/i)).toBeInTheDocument();
  expect(screen.getByText(/You moved/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /LEFT/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /UP/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /RIGHT/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /DOWN/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/type email/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
});

test('typing on the input changes its value', () => {
  render(<AppFunctional />);
  const input = screen.getByPlaceholderText(/type email/i);
  fireEvent.change(input, { target: { value: 'test@example.com' } });
  expect(input.value).toBe('test@example.com');
});

test('form submission displays a success message', async () => {
  axios.post.mockResolvedValueOnce({ data: { message: 'Submission successful!' } });

  render(<AppFunctional />);
  const input = screen.getByPlaceholderText(/type email/i);
  fireEvent.change(input, { target: { value: 'test@example.com' } });

  const submitButton = screen.getByRole('button', { name: /Submit/i });
  fireEvent.click(submitButton);

  const message = await screen.findByText(/Submission successful!/);
  expect(message).toBeInTheDocument();
});

test('form submission displays an error message', async () => {
  axios.post.mockRejectedValueOnce({ response: { data: { message: 'Something went wrong!' } } });

  render(<AppFunctional />);
  const input = screen.getByPlaceholderText(/type email/i);
  fireEvent.change(input, { target: { value: 'test@example.com' } });

  const submitButton = screen.getByRole('button', { name: /Submit/i });
  fireEvent.click(submitButton);

  const message = await screen.findByText(/Something went wrong!/);
  expect(message).toBeInTheDocument();
});

test('reset button clears the input and message', () => {
  render(<AppFunctional />);
  
  // Simulate user typing into the input field
  const input = screen.getByPlaceholderText(/type email/i);
  fireEvent.change(input, { target: { value: 'test@example.com' } });
  
  // Simulate pressing the reset button
  const resetButton = screen.getByRole('button', { name: /reset/i });
  fireEvent.click(resetButton);
  
  // Assert the input field is cleared
  expect(input.value).toBe('');
  
  // Assert the message field is cleared
  const message = screen.getByText(/Coordinates \(2, 2\)/); // The initial message
  expect(message).toBeInTheDocument();
});