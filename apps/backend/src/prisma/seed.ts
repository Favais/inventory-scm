import * as bcrypt from 'bcrypt';
import { PrismaClient } from '../generated/prisma/client.js';
import { UserRole } from '../generated/prisma/enums.js';
import { PrismaService } from './prisma.service.js';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module.js';

async function main() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const prisma = app.get(PrismaService);
  console.log('🌱 Seeding database...');

  // Create default admin user
  const adminPassword = await bcrypt.hash('Admin123!@#', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@inventory.com' },
    update: {},
    create: {
      email: 'admin@inventory.com',
      passwordHash: adminPassword,
      firstName: 'System',
      lastName: 'Administrator',
      role: UserRole.ADMIN,
      isActive: true,
    },
  });

  console.log('✅ Created admin user:', admin.email);

  // Create a manager for testing
  const managerPassword = await bcrypt.hash('Manager123!', 10);

  const manager = await prisma.user.upsert({
    where: { email: 'manager@inventory.com' },
    update: {},
    create: {
      email: 'manager@inventory.com',
      passwordHash: managerPassword,
      firstName: 'John',
      lastName: 'Manager',
      role: UserRole.MANAGER,
      isActive: true,
    },
  });

  console.log('✅ Created manager user:', manager.email);

  // Create a clerk for testing
  const clerkPassword = await bcrypt.hash('Clerk123!', 10);

  const clerk = await prisma.user.upsert({
    where: { email: 'clerk@inventory.com' },
    update: {},
    create: {
      email: 'clerk@inventory.com',
      passwordHash: clerkPassword,
      firstName: 'Jane',
      lastName: 'Clerk',
      role: UserRole.CLERK,
      isActive: true,
    },
  });

  console.log('✅ Created clerk user:', clerk.email);

  // Create a viewer for testing
  const viewerPassword = await bcrypt.hash('Viewer123!', 10);

  const viewer = await prisma.user.upsert({
    where: { email: 'viewer@inventory.com' },
    update: {},
    create: {
      email: 'viewer@inventory.com',
      passwordHash: viewerPassword,
      firstName: 'Bob',
      lastName: 'Viewer',
      role: UserRole.VIEWER,
      isActive: true,
    },
  });

  console.log('✅ Created viewer user:', viewer.email);

  console.log('\n📧 Test Credentials:');
  console.log('Admin:   admin@inventory.com / Admin123!@#');
  console.log('Manager: manager@inventory.com / Manager123!');
  console.log('Clerk:   clerk@inventory.com / Clerk123!');
  console.log('Viewer:  viewer@inventory.com / Viewer123!');

  console.log('\n🎉 Seeding completed!');
  await prisma.$disconnect();
  await app.close();
}

main();
