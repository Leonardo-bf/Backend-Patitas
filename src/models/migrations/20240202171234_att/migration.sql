/*
  Warnings:

  - You are about to drop the column `clienteId` on the `Compra` table. All the data in the column will be lost.
  - You are about to drop the column `cliente_id` on the `Produto` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Compra" DROP CONSTRAINT "Compra_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_cliente_id_fkey";

-- AlterTable
ALTER TABLE "Compra" DROP COLUMN "clienteId";

-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "cliente_id";
