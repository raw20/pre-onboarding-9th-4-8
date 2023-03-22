import { rest } from 'msw';
import preview from 'jest-preview';
import { server } from '@/mocks/server';

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
  preview.debug();
});
