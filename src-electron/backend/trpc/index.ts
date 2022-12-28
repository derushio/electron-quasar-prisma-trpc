import { Context } from '#/backend/trpc/context';
import { initTRPC } from '@trpc/server';

export const t = initTRPC.create<Context>();
