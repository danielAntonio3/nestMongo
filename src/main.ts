import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //await app.listen(3000);
  // ! ESTO ES PARA QUE JALE EN HEROKU YA QUE ELLOS NO OCUPAN NUESTRO PUERTO SI NO EL DE ELLOS
  // ? AGREGAR UN NUEVOR ACHIVO EN RAIZ CON EL NOMBRE DE Procfile
  // ? web: npm run start:prod
  // ? EN packge.json AGREGA EN SCRIPT AL FINAL LO SIGUIENTE
  // * "heroku-postbuild":"npm install --only=dev --no-shrinkwrap && npm run build"
  // !AGREGA LA SIGUEINTRE LINEA
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
