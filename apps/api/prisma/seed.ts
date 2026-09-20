import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.SEED_OWNER_EMAIL ?? "bernardo@hipnosave.ao";
  const password = process.env.SEED_OWNER_PASSWORD ?? "troque-esta-senha";

  const passwordHash = await bcrypt.hash(password, 10);

  await prisma.ownerUser.upsert({
    where: { email },
    update: { passwordHash },
    create: {
      email,
      passwordHash,
      name: "Bernardo Cassuende",
    },
  });

  console.log(`Owner criado/actualizado: ${email}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
