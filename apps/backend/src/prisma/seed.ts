import { PrismaService } from './prisma.service.js';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module.js';
import { seedUser } from './seed/users.seed.js';
import { seedCategory } from './seed/seedCategories.js';

async function main() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const prisma = app.get(PrismaService);
  console.log('🌱 Seeding database...');

  await seedUser(prisma);
  await seedCategory(prisma);

  await prisma.$disconnect();
  await app.close();
}

main();
