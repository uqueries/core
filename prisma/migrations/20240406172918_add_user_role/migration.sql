-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('SUPER', 'ADMIN', 'USER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "ROLE" NOT NULL DEFAULT 'USER';