import { rest } from 'msw';
import lectures from './data/lectures.json';

export const handlers = [
  rest.get('/api/lectures', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(lectures)
    );
  }),
];
