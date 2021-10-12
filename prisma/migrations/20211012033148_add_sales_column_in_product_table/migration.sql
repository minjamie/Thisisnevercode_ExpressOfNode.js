/*
  Warnings:

  - You are about to drop the column `is_sale` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `products` DROP COLUMN `is_sale`,
    ADD COLUMN `is_discount` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `sales` INTEGER NOT NULL DEFAULT 0;
