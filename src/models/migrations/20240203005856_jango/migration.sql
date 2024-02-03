-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "fidelidadeId" INTEGER;

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_fidelidadeId_fkey" FOREIGN KEY ("fidelidadeId") REFERENCES "ClienteFidelidade"("id") ON DELETE SET NULL ON UPDATE CASCADE;
