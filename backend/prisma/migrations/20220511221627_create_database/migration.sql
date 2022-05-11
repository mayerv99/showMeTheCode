-- CreateTable
CREATE TABLE "phone" (
    "id" INTEGER NOT NULL,
    "prefix" TEXT NOT NULL,

    CONSTRAINT "phone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "connections" (
    "origin_id" INTEGER NOT NULL,
    "destination_id" INTEGER NOT NULL,
    "fees" DECIMAL(3,2) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "connections_origin_id_destination_id_key" ON "connections"("origin_id", "destination_id");

-- AddForeignKey
ALTER TABLE "connections" ADD CONSTRAINT "connections_destination_id_fkey" FOREIGN KEY ("destination_id") REFERENCES "phone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "connections" ADD CONSTRAINT "connections_origin_id_fkey" FOREIGN KEY ("origin_id") REFERENCES "phone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
