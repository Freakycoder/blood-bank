/*
  Warnings:

  - Added the required column `DonorID` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `HospitalID` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "DonorID" INTEGER NOT NULL,
ADD COLUMN     "HospitalID" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Donor" (
    "ID" SERIAL NOT NULL,
    "DonorName" TEXT NOT NULL,

    CONSTRAINT "Donor_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Hospital" (
    "ID" SERIAL NOT NULL,
    "HospitalName" TEXT NOT NULL,

    CONSTRAINT "Hospital_pkey" PRIMARY KEY ("ID")
);

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_DonorID_fkey" FOREIGN KEY ("DonorID") REFERENCES "Donor"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_HospitalID_fkey" FOREIGN KEY ("HospitalID") REFERENCES "Hospital"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
