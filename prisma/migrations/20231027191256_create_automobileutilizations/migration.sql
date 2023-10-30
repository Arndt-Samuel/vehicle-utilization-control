-- CreateTable
CREATE TABLE "automobileutilizations" (
    "id" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "automobileId" TEXT NOT NULL,
    "initDate" TIMESTAMP(3) NOT NULL,
    "finalDate" TIMESTAMP(3) NOT NULL,
    "reasonForUse" TEXT NOT NULL,

    CONSTRAINT "automobileutilizations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "automobileutilizations" ADD CONSTRAINT "automobileutilizations_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "automobileutilizations" ADD CONSTRAINT "automobileutilizations_automobileId_fkey" FOREIGN KEY ("automobileId") REFERENCES "automobile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
