import { createContext } from '#/backend/trpc/context';
import { appRouter } from '#/backend/trpc/router';
import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';

const PORT = 8070;

export async function startBackend() {
  const app = express();
  app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    }),
  );
  app.listen(PORT, () => {
    console.log('listening:', PORT);
  });
}
