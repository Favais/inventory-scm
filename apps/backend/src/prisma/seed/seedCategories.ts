import { PrismaService } from 'prisma/prisma.service.js';

export const seedCategory = async (prisma: PrismaService) => {
  const categories = [
    { name: 'Fiction', description: 'Novels, stories, and literary works' },
    {
      name: 'Non-Fiction',
      description: 'General factual and informational books',
    },
    {
      name: 'Academic & Textbooks',
      description: 'School and university learning materials',
    },
    {
      name: 'History',
      description: 'Historical events, civilizations, and biographies',
    },
    {
      name: 'Politics & Government',
      description: 'Political science, governance, and public affairs',
    },
    {
      name: 'Religion & Spirituality',
      description: 'Religious teachings and spiritual growth books',
    },
    {
      name: 'Business & Finance',
      description: 'Entrepreneurship, economics, and finance books',
    },
    {
      name: 'Science & Technology',
      description: 'Science, engineering, and programming books',
    },
    {
      name: 'Self-Help & Personal Development',
      description: 'Motivation and personal growth books',
    },
    {
      name: 'Children & Kids',
      description: 'Books for children and young readers',
    },
    {
      name: 'Comics & Graphic Novels',
      description: 'Comics, manga, and illustrated stories',
    },
    {
      name: 'Stationery',
      description: 'Notebooks, journals, and writing materials',
    },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { name: category.name },
      update: {},
      create: category,
    });
  }

  console.log('✅ Categories seeded');
};
