import { render, screen } from '@testing-library/react';
import preview from 'jest-preview';
import App from './App';
import '@testing-library/jest-dom';

test('App render', async () => {
  const { loading } = setup();

  preview.debug();

  expect(loading).toBeInTheDocument();
});

function setup() {
  render(<App />);
  const loading = screen.getByText('Loading...');

  return { loading };
}
