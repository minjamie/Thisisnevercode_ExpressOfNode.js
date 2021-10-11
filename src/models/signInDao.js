import prisma from '../../prisma';

const getUserInfo = async (email) => {
  return await prisma.$queryRaw`
    SELECT
      u.email, u.password, u.id, u.address
    FROM
      users u
    WHERE
      u.email = ${email}
  ;`;
};

export default { getUserInfo };
