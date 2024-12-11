import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaModule } from './config/prisma/prisma.module';

@Module({
  imports: [UsuariosModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
