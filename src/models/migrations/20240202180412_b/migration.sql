/*
  Warnings:

  - You are about to alter the column `cpf` on the `Cliente` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(11)`.
  - A unique constraint covering the columns `[cpf]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "email" VARCHAR(75) NOT NULL DEFAULT '',
ADD COLUMN     "numero" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "rua" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "cpf" SET DATA TYPE CHAR(11);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cpf_key" ON "Cliente"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");
