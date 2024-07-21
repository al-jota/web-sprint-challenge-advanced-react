// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import AppFunctional from './AppFunctional';

Write your tests here
test('sanity', () => {
  expect(true).toBe(false)
})
// test('renders heading texts', () => {
//   render(<AppFunctional />);
//   const coordinatesHeading = screen.getByText(/Coordinates/i);
//   const stepsHeading = screen.getByText(/You moved/i);
//   expect(coordinatesHeading).toBeInTheDocument();
//   expect(stepsHeading).toBeInTheDocument();
// });

// test('renders button texts', () => {
//   render(<AppFunctional />);
//   const leftButton = screen.getByText(/left/i);
//   const upButton = screen.getByText(/up/i);
//   const rightButton = screen.getByText(/right/i);
//   const downButton = screen.getByText(/down/i);
//   const resetButton = screen.getByText(/reset/i);
//   expect(leftButton).toBeInTheDocument();
//   expect(upButton).toBeInTheDocument();
//   expect(rightButton).toBeInTheDocument();
//   expect(downButton).toBeInTheDocument();
//   expect(resetButton).toBeInTheDocument();
// });

// test('renders input placeholder text', () => {
//   render(<AppFunctional />);
//   const emailInput = screen.getByPlaceholderText(/type email/i);
//   expect(emailInput).toBeInTheDocument();
// });

// test('input value changes when typing', () => {
//   render(<AppFunctional />);
//   const emailInput = screen.getByPlaceholderText(/type email/i);
//   fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
//   expect(emailInput.value).toBe('test@example.com');
// });

// test('renders initial grid', () => {
//   render(<AppFunctional />);
//   const grid = screen.getByRole('grid');
//   const activeSquare = grid.querySelector('.active');
//   expect(grid).toBeInTheDocument();
//   expect(activeSquare).toHaveTextContent('B');
// });
