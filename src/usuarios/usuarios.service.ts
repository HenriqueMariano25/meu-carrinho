import { Injectable } from '@nestjs/common';
import { UsuarioRepository } from './repositories/usuario.repository';
import { CriarControllerDto } from './dto/controller/criar.controller.dto';

@Injectable()
export class UsuariosService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async criar(dadosDto: CriarControllerDto) {
    return await this.usuarioRepository.criar(dadosDto);
  }
}
