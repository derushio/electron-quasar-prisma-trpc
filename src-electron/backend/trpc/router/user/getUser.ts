import { t } from '#/backend/trpc';

export const getUserRouter = t.router({
  getUser: t.procedure.query(() => ({
    name: 'hoge fuga',
  })),
});
