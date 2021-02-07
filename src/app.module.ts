import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';

// *IMPORTAR MONGOOSE
// ?PRIMER PASO
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
