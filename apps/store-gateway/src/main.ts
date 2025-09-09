import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HTTP_PORT } from '@app/libs/constants/shared.constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.startAllMicroservices();
  await app.listen(3000);

  console.log(
    `Servidor gateway inicializado en: http://localhost:${HTTP_PORT}`,
  );
}
bootstrap();
