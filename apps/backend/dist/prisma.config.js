"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config_1 = require("prisma/config");
const DATABASE_URL = process.env.DATABASE_URL || "";
if (!DATABASE_URL)
    throw new Error("DATABASE_URL is not defined");
console.log(DATABASE_URL);
exports.default = (0, config_1.defineConfig)({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
        seed: "ts-node ./prisma/seed.ts",
    },
    datasource: {
        url: DATABASE_URL,
    },
});
//# sourceMappingURL=prisma.config.js.map