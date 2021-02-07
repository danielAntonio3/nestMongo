import { Module } from '@nestjs/common';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';

// ?TERCER PASO ES INCRUSTAR EL SCHEMA
// ?CUARTO PASO HAY QUE CREAR UNA INTERFACE

// *IMPORTACIONES NECESARIAS
import { MongooseModule } from '@nestjs/mongoose';

// *IMPORTAMOS EL SCHEMA
import { ProductoSchema } from './schemas/producto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Producto', schema: ProductoSchema }]),
  ],
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}
