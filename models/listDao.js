import prisma from '../prisma';

const getList = async () => {
  return await prisma.$queryRaw`
    SELECT 
      c.id, c.category_name
    FROM 
      categories c
  `;
};

export default { getList };
