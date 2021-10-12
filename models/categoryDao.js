import prisma from '../prisma';

const mainCategory = async () => {
  const mainCategory = await prisma.$queryRaw`   
  SELECT 
  c.id, 
  c.category_name
  FROM categories c
  UNION ALL
  SELECT
  s.sub_category_name=14
  FROM sub_categories s
  `;
  return mainCategory;
};

export default { mainCategory };
