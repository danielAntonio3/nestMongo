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

// ?VAMOS A IMPORTAR EL SERVICIO
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
  constructor(private productoService: ProductoService) {}
  // !CREAR UN NUEVO PRODUCTO
  @Post('/crear')
  async crearPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    const nuevoProducto = await this.productoService.createProducto(
      createProductDTO,
    );
    console.log(nuevoProducto);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'recibido', producto: nuevoProducto });
  }
}
