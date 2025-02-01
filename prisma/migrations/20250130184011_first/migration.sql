-- CreateTable
CREATE TABLE "Content" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "premium1" TEXT NOT NULL,
    "premium2" TEXT NOT NULL,
    "premium3" TEXT NOT NULL,
    "premium4" TEXT DEFAULT '',
    "premium5" TEXT DEFAULT '',
    "img" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstname" TEXT NOT NULL,
    "secondname" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
