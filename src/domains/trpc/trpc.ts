import type { AppRouter } from '#/backend/trpc/router';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';

export const trpc = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: `http://localhost:${process.env.BACKEND_PORT}/trpc`,
    }),
  ],
});
