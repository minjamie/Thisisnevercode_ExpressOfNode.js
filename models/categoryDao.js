import prisma from '../prisma';

const mainCategory = async () => {
  const mainCategory = await prisma.$queryRaw`   
  SELECT 
  c.id, 
  c.category_name, 
  FROM categories c
  UNION
  SELECT
  sc.id,
  sc.category_name
  FROM sub_categories sc
  `;
  return mainCategory;
};

export default { mainCategory };
