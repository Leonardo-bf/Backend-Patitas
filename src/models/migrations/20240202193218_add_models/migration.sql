-- CreateTable
CREATE TABLE "ClienteFidelidade" (
    "frete" BOOLEAN NOT NULL,
    "cupom" BOOLEAN NOT NULL,
    "premios" BOOLEAN NOT NULL,
    "cartao" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ClienteFidelidade_cartao_key" ON "ClienteFidelidade"("cartao");
