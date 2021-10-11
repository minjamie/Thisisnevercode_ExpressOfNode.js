import prisma from '../prisma';

const getProductById = async (id) => {
  const [product] = await prisma.$queryRaw`
    SELECT 
      p.id,
      p.english_name,
      p.price,
      p.description,
      p.textile_information,
      i.detail_image_url,
      i.sub_image_url
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
