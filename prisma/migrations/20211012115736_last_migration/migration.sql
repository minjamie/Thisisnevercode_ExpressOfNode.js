/*
  Warnings:

  - You are about to alter the column `price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(10,2)`.
  - A unique constraint covering the columns `[key_number]` on the table `detail_images` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[key_number]` on the table `sub_images` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `key_number` to the `detail_images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `key_number` to the `sub_images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `detail_images` ADD COLUMN `key_number` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `products` MODIFY `price` DECIMAL(10, 2) NOT NULL;

-- AlterTable
ALTER TABLE `sub_images` ADD COLUMN `key_number` VARCHAR(100) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `detail_images_key_number_key` ON `detail_images`(`key_number`);

-- CreateIndex
CREATE UNIQUE INDEX `sub_images_key_number_key` ON `sub_images`(`key_number`);
