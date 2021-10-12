import prisma from '../prisma';

const getList = async (id) => {
  return await prisma.$queryRaw`
    SELECT 
      i.id,
      i.main_image_url as image,
      i.sub_image_url as subImage,
      i.detail_image_url as detailImage,
      p.english_name as name,
      p.price
    FROM 
      images i
    LEFT JOIN
      products p
    ON
      i.product_id = p.id
    WHERE
      i.id > 0
    ORDER BY p.id ASC
    LIMIT 10
    OFFSET ${id};
  `;
};

export default { getList };
