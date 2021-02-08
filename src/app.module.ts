import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';

// *IMPORTAR MONGOOSE
// ?PRIMER PASO (PARA LA CONEXION)
// ?INCRUSTAR LA URL DE LA CONEXION A MONGO
// ?DESPUES HAY QUE DEFINIR UN SCHEMA
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductoModule,
    MongooseModule.forRoot(
      'mongodb+srv://danny:12345678a@cluster0.medst.mongodb.net/dbnest?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
