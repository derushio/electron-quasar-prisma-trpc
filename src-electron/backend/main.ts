import { createContext } from '#/backend/trpc/context';
import { appRouter } from '#/backend/trpc/router';
import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';

export async function startBackend() {
  const app = express();
  app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    }),
  );
  app.listen(process.env.TRPC_PORT, () => {
    console.log('listening:', process.env.TRPC_PORT);
  });
}
