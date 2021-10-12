import prisma from '../prisma';

const getList = async () => {
  return await prisma.$queryRaw`
    SELECT 
      i.id,
      i.main_image_url,
      i.sub_image_url,
      i.detail_image_url,
      p.english_name,
      p.price
    FROM 
      images i
    LEFT JOIN
      products p
    ON
      i.product_id = p.id
    WHERE
      i.id > 0
    order by p.id asc
    limit 5;
  `;
};

const getProductImages = async (id) => {
  return await prisma.$queryRaw`
  `;
};

export default { getList };
