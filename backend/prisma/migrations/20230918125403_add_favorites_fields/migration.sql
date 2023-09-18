-- CreateTable
CREATE TABLE "UserSeguir" (
    "id" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserSeguir_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSeguir_bookId_userId_key" ON "UserSeguir"("bookId", "userId");

-- AddForeignKey
ALTER TABLE "UserSeguir" ADD CONSTRAINT "UserSeguir_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSeguir" ADD CONSTRAINT "UserSeguir_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
