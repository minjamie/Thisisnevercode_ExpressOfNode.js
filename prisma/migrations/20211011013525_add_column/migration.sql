/*
  Warnings:

  - Added the required column `sub_category` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categories` ADD COLUMN `sub_category` JSON NOT NULL;
