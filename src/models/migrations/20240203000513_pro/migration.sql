-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_clienteId_fkey";

-- AlterTable
ALTER TABLE "Produto" ALTER COLUMN "clienteId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;
