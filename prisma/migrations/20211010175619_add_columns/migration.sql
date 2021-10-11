/*
  Warnings:

  - You are about to alter the column `detail_image_url` on the `images` table. The data in that column could be lost. The data in that column will be cast from `LongText` to `Json`.
  - You are about to alter the column `sub_image_url` on the `images` table. The data in that column could be lost. The data in that column will be cast from `LongText` to `Json`.
  - You are about to drop the column `textileInformation` on the `products` table. All the data in the column will be lost.
  - Added the required column `textile_information` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `images` MODIFY `detail_image_url` JSON NOT NULL,
    MODIFY `sub_image_url` JSON NOT NULL;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `textileInformation`,
    ADD COLUMN `created_at` DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `textile_information` VARCHAR(3000) NOT NULL;
