import prisma from '../prisma';

const getList = async (id) => {
  return await prisma.$queryRaw`
    SELECT 
      p.id,
      p.price,
      p.main_image_url,
      di.key_number,
      di.detail_image_url,
      si.key_number,
      si.sub_image_url
    FROM 
      products p
    LEFT JOIN
    detail_images di,
    sub_images si
    ON
      i.product_id = p.id
    WHERE
      i.id > 0
    ORDER BY p.id ASC
    LIMIT 10
    OFFSET ${id}
  `;
};

export default { getList };
