/*
  Warnings:

  - You are about to drop the column `image_url` on the `images` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `detail_image_url` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `main_image_url` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sub_image_url` to the `images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `images` DROP COLUMN `image_url`,
    ADD COLUMN `detail_image_url` VARCHAR(10000) NOT NULL,
    ADD COLUMN `main_image_url` VARCHAR(3000) NOT NULL,
    ADD COLUMN `sub_image_url` VARCHAR(10000) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_email_key` ON `users`(`email`);
