"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../lib/prisma");
async function main() {
    await prisma_1.prisma.user.create({
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
    await prisma_1.prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map