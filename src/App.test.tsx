import { render, screen } from '@testing-library/react';
import { rest } from 'msw';

import App from './App';
import { server } from './mocks/server';

test('App render', async () => {
  const { loading } = setup();

  expect(loading).toBeInTheDocument();
});

test('order Data delay test', async () => {
  server.use(
    rest.get('/mock/order', (req, res, ctx) => {
      return res(
        ctx.delay(5000),
        ctx.status(200),
        ctx.json([{ transaction_time: '2023-03-07 17:39:50' }]),
      );
    }),
  );

  render(<App />);

  const { loading } = setup();

  expect(loading).toBeInTheDocument();
});

function setup() {
  render(<App />);

  const loading = screen.getByText(/Loading.../i);

  return { loading };
}
