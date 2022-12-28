import type { AppRouter } from '#/backend/trpc/router';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';

const client = createTRPCProxyClient<AppRouter>({
  transformer: superjson as never,
  links: [
    httpBatchLink({
      url: `http://localhost:${process.env.TRPC_PORT}/trpc`,
    }),
  ],
});

export function useTrpc() {
  return client;
}
