/*
  Warnings:

  - A unique constraint covering the columns `[plate]` on the table `automobile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "automobile_plate_key" ON "automobile"("plate");
