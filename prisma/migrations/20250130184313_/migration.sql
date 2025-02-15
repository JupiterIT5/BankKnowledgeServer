/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Content` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[login]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Content_name_key" ON "Content"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");
