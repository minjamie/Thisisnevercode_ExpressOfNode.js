import prisma from '../prisma';

const mainCategory = async () => {
  const mainCategory = await prisma.$queryRaw`   
  SELECT 
  c.id, 
  c.category_name
  FROM categories c 
  `;

  const subCategory = await prisma.$queryRaw`   
  SELECT 
  s.id, 
  s.sub_category_name
  FROM sub_categories s 
  `;

  for (let i = 0; i < mainCategory.length; i++) {
    mainCategory[i].sub_category_name = null;
  }
  mainCategory[mainCategory.length - 1].sub_category_name = subCategory;

  return { mainCategory };
};

export default { mainCategory };
