import { getUserRouter } from './user/getUser';

import { t } from '#/backend/trpc';

export const appRouter = t.mergeRouters(getUserRouter);

export type AppRouter = typeof appRouter;
