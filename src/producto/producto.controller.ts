import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';

// ? IMPORTANDO DTO (AYUDA A SABER QUE VALORES RECIBIRA)
import { CreateProductDTO } from './dto/produto.dto';

@Controller('producto')
export class ProductoController {
  @Post('/crear')
  crearPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    console.log(createProductDTO);
    return res.status(HttpStatus.OK).json({ message: 'recibido' });
  }
}
