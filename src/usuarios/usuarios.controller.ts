import { Body, Controller, Post } from '@nestjs/common';
import { CriarControllerDto } from './dto/controller/criar.controller.dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async criar(@Body() dadosDto: CriarControllerDto) {
    return await this.usuariosService.criar(dadosDto);
  }
}
