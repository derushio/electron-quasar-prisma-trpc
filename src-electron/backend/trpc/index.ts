import { Context } from '#/backend/trpc/context';
import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

export const t = initTRPC.create<Context>({
  transformer: superjson,
});
