import { prisma } from "../lib/prisma";

async function main() {
  await prisma.user.create({
    data: {
      email: "admin@example.com",
      passwordHash: "hashed_password_here",
      firstName: "Admin",
      lastName: "User",
      role: "ADMIN",
    },
  });

  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
