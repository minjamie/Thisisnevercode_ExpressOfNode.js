import prisma from '../prisma';

const signUpUser = async () => {
  return await prisma.$queryRaw`
    SELECT 
      c.id, c.category_name
    FROM 
      categories c
  `;
};

export default { signUpUser };
