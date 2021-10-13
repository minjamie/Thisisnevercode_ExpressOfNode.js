import prisma from '../prisma';

const getSubImagesUrlByProductId = async (productId) => {
  const subImageUrl = await prisma.$queryRaw`
    SELECT 
      s.key_number AS keyNumber,
      s.sub_image_url AS subImageUrl,
      s.product_id AS productId
    FROM 
      sub_images s
    INNER JOIN 
      products p
    ON p.id = s.product_id
    WHERE 
      p.id = ${productId};
  `;
  return subImageUrl;
};

const getDetailImagesUrlByProductId = async (productId) => {
  const detailImageUrl = await prisma.$queryRaw`
    SELECT 
      d.key_number AS keyNumber,
      d.detail_image_url AS detailImageUrl,
      d.product_id AS productId
    FROM 
      detail_images d
    INNER JOIN 
      products p
    ON
      p.id = d.product_id
    WHERE 
      p.id = ${productId};
  `;
  return detailImageUrl;
};

const getList = async () => {
  const getProductList = await prisma.$queryRaw`
    SELECT 
      p.id,
      p.name,
      p.price,
      p.main_image_url AS mainImageUrl
    FROM
      products p
  `;

  for (let i = 0; i < getProductList.length; i++) {
    getProductList[i].subImage = await getSubImagesUrlByProductId(i + 1);
    getProductList[i].detailImage = await getDetailImagesUrlByProductId(i + 1);
  }

  return getProductList;
};

export default { getList };
