-- AlterTable
CREATE SEQUENCE "phone_id_seq";
ALTER TABLE "phone" ALTER COLUMN "id" SET DEFAULT nextval('phone_id_seq');
ALTER SEQUENCE "phone_id_seq" OWNED BY "phone"."id";
