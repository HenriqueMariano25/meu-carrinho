/*
  Warnings:

  - You are about to drop the column `tipo_usuario` on the `usuario` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "usuario" DROP CONSTRAINT "usuario_tipousuario_id_fk";

-- AlterTable
ALTER TABLE "usuario" DROP COLUMN "tipo_usuario",
ADD COLUMN     "tipo_usuario_id" INTEGER;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_tipo_usuario_id_fkey" FOREIGN KEY ("tipo_usuario_id") REFERENCES "tipo_usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
