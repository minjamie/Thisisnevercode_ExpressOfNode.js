/*
  Warnings:

  - You are about to alter the column `detail_image_url` on the `images` table. The data in that column could be lost. The data in that column will be cast from `LongText` to `Json`.
  - You are about to alter the column `sub_image_url` on the `images` table. The data in that column could be lost. The data in that column will be cast from `LongText` to `Json`.

*/
-- AlterTable
ALTER TABLE `images` MODIFY `detail_image_url` JSON NOT NULL,
    MODIFY `sub_image_url` JSON NOT NULL;

-- AlterTable
ALTER TABLE `products` ADD COLUMN `created_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3);
