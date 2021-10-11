import prisma from '../../prisma';

const getProduct = async () => {
  return await prisma.$queryRaw`
    SELECT 
      c.id, c.category_name
    FROM 
      categories c
  `;
};

export default { getProduct };
