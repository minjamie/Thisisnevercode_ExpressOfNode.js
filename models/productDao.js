import prisma from '../prisma';

const getProductById = async (id) => {
  const detailImages = await prisma.$queryRaw`
    SELECT
      key_number as keyNumber,
      di.detail_image_url as detailImg
    FROM
      products P
    LEFT JOIN
      detail_images di
    ON
      di.product_id = p.id
    WHERE
      p.id = ${id}
  `;

  const subImages = await prisma.$queryRaw`
    SELECT
      key_number as keyNumber,
      si.sub_image_url as subImg
    FROM
      products P
    LEFT JOIN
      sub_images si
    ON
      si.product_id = p.id
    WHERE
      p.id = ${id}
  `;

  const [product] = await prisma.$queryRaw`
    SELECT 
      p.id,
      p.name,
      p.price,
      p.description,
      p.textile_information as textileInfo,
      p.main_image_url as mainImg
    FROM 
      products p
    WHERE
      p.id = ${id}
  `;

  product.detailImg = detailImages;
  product.subImg = subImages;

  return product;
};

export default { getProductById };
