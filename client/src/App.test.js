import { render, screen } from '@testing-library/react';
import App from './App';

test('Checks if starting text is in the document', () => {
  render(<App />);
  const startingNumber = screen.getByText(/Starting Number/);
  expect(startingNumber).toBeInTheDocument();
});

test('Checks if ending text is in the document', () => {
  render(<App />);
  const endingNumber = screen.getByText(/Ending Number/);
  expect(endingNumber).toBeInTheDocument();
});
