import prisma from '../prisma';

const getSortByPriceHign = async () => {
  return await prisma.$queryRaw`
    SELECT i.id,
           i.sub_image_url,
           i.detail_image_url,
           p.english_name,
           i.main_image_url,
           p.price
FROM images i
LEFT JOIN products p
ON p.id = i.product_id
ORDER BY p.price DESC;
  `;
};

const getSortByPriceLow = async () => {
  return await prisma.$queryRaw`
    SELECT i.id,
           i.sub_image_url,
           i.detail_image_url,
           p.english_name,
           i.main_image_url,
           p.price
FROM images i
LEFT JOIN products p
ON p.id = i.product_id
ORDER BY p.price;
  `;
};

const getSortByRecent = async () => {
  return await prisma.$queryRaw`
    SELECT i.id,
           i.sub_image_url,
           i.detail_image_url,
           p.english_name,
           i.main_image_url,
           p.price,
           p.created_at
FROM images i
LEFT JOIN products p
ON p.id = i.product_id
ORDER BY p.created_at;
  `;
};

const getProductForList = async () => {
  return await prisma.$queryRaw`
  SELECT i.id,
         i.sub_image_url,
         i.detail_image_url,
         p.english_name,
         i.main_image_url,
         p.price
  FROM images i
  LEFT JOIN products p
  ON p.id = i.product_id;
  `;
};

const getCategory = async () => {
  return await prisma.$queryRaw`
  SELECT p.category_id
  `;
};
export default {
  getSortByPriceHign,
  getSortByPriceLow,
  getSortByRecent,
  getProductForList,
};
