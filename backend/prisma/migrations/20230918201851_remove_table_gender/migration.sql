/*
  Warnings:

  - You are about to drop the `BookGender` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `genders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BookGender" DROP CONSTRAINT "BookGender_bookId_fkey";

-- DropForeignKey
ALTER TABLE "BookGender" DROP CONSTRAINT "BookGender_genderId_fkey";

-- DropTable
DROP TABLE "BookGender";

-- DropTable
DROP TABLE "genders";
