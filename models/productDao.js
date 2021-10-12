import prisma from '../prisma';

const getProductById = async (id) => {
  const [product] = await prisma.$queryRaw`
    SELECT 
      p.id,
      p.english_name as name,
      p.price,
      p.description,
      p.textile_information as textileInfo,
      i.detail_image_url as subImg,
      i.sub_image_url as detailImg
    FROM 
      products p
    LEFT JOIN 
      images i
    ON 
      i.product_id = p.id
    WHERE
      p.id = ${id}
  `;
  return product;
};

export default { getProductById };
