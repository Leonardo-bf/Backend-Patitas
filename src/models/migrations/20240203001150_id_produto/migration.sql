-- AlterTable
ALTER TABLE "ClienteFidelidade" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ClienteFidelidade_pkey" PRIMARY KEY ("id");
