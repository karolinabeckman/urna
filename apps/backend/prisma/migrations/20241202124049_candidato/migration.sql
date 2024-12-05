-- CreateTable
CREATE TABLE "Candidato" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numero" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "partido" TEXT NOT NULL,
    "descricao" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Candidato_numero_key" ON "Candidato"("numero");
