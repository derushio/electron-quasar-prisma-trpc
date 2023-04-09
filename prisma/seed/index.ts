import { pc } from '#/backend/domains/prisma';

async function main() {
  // TODO:
}

main()
  .then(async () => {
    await pc.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await pc.$disconnect();
    process.exit(1);
  });
