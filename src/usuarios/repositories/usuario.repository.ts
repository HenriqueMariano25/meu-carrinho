import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { CriarRepositoryDto } from '../dto/repository/criar.repository.dto';

@Injectable()
export class UsuarioRepository {
  constructor(private readonly prisma: PrismaService) {}

  async criar(dadosDto: CriarRepositoryDto) {
    const data = { ...dadosDto, tipo_usuario_id: 2 };

    return await this.prisma.usuario.create({ data });
  }
}
