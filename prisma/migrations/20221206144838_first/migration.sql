-- CreateTable
CREATE TABLE "Recipe" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "ingredients" STRING NOT NULL,
    "description" STRING NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);
