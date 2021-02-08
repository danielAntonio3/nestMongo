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
    return res.status(HttpStatus.OK).json({
      message: 'Product Successfully Created',
      producto: nuevoProducto,
    });
  }
  // !PARA VER TODOS LOS PRODUCTOS
  @Get('/productos')
  async productos(@Res() res) {
    const productos = await this.productoService.getProductos();
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Product Successfully', products: productos });
  }
  // !PARA VER UN PRODUCTO (BUSCAR)
  @Get('productos/:productIdid')
  async producto(@Res() res, @Param('productIdid') productIdid: string) {
    const producto = await this.productoService.getProducto(productIdid);
    res
      .status(HttpStatus.OK)
      .json({ message: 'Product found Successfully ', product: producto });
  }
  // !ELIMINAR UN PRODUCTO
  @Delete('eliminar/:productIdid')
  async elimianar(@Res() res, @Param('productIdid') productIdid: string) {
    const ProductoEliminar = await this.productoService.deleteProducto(
      productIdid,
    );
    res
      .status(HttpStatus.OK)
      .json({ message: 'Removed Successfully', product: ProductoEliminar });
  }
  // !ACTUALIZAR UN PRODUCTO
  @Put('editar/:productId')
  async actualizar(
    @Res() res,
    @Param('productId') productId: string,
    @Body() createProductDTO: CreateProductDTO,
  ) {
    const productoUpdate = await this.productoService.updateProducto(
      productId,
      createProductDTO,
    );
    res
      .status(HttpStatus.OK)
      .json({ message: 'Upadte Successfully', product: productoUpdate });
  }
}
