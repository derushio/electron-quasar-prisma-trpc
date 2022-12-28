import { appRouter } from '#/backend/trpc/router';
import { createHTTPHandler } from '@trpc/server/adapters/standalone';
import express from 'express';

export async function startBackend() {
  const app = express();
  const trpcHandler = createHTTPHandler({
    router: appRouter,
    createContext: () => ({}),
  });

  app.use('/trpc', (req, res) => {
    // enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.setHeader('Access-Control-Allow-Headers', '*');

    // accepts OPTIONS
    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      return res.end();
    }

    return trpcHandler(req, res);
  });

  app.listen(process.env.TRPC_PORT, () => {
    console.log('listening:', process.env.TRPC_PORT);
  });
}
