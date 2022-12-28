import type { AppRouter } from '#/backend/trpc/router';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `http://localhost:${process.env.TRPC_PORT}/trpc`,
    }),
  ],
});

export function useTrpc() {
  return client;
}
