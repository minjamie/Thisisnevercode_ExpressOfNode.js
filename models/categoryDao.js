import prisma from '../prisma';

const mainCategory = async () => {
  const mainCategory = await prisma.$queryRaw`
    SELECT c.id, c.category_name, c.sub_category FROM categories c;
  `;
  return mainCategory;
};

export default { mainCategory };
