import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { UsuarioRepository } from './repositories/usuario.repository';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService, PrismaService, UsuarioRepository],
})
export class UsuariosModule {}
