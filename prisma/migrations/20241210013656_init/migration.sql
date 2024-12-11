-- CreateTable
CREATE TABLE "tipo_usuario" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(100) NOT NULL,

    CONSTRAINT "tipo_usuario_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,
    "tipo_usuario" INTEGER,

    CONSTRAINT "usuario_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_tipousuario_id_fk" FOREIGN KEY ("tipo_usuario") REFERENCES "tipo_usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
