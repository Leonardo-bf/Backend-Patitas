/*
  Warnings:

  - You are about to drop the column `cpf` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `numero` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `rua` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the `Compra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Produto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Compra" DROP CONSTRAINT "Compra_produtoId_fkey";

-- DropIndex
DROP INDEX "Cliente_cpf_key";

-- DropIndex
DROP INDEX "Cliente_email_key";

-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "cpf",
DROP COLUMN "email",
DROP COLUMN "numero",
DROP COLUMN "rua";

-- DropTable
DROP TABLE "Compra";

-- DropTable
DROP TABLE "Produto";
