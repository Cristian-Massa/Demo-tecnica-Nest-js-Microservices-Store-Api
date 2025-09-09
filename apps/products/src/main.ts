import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import {
  PRODUCTS_MICROSERVICE_PORT,
  TRANSPORT,
} from '@app/libs/constants/shared.constants';
import { AppModule } from '@products/app.module';
import { InternalServerErrorFilter } from '@products/shared/filters/internal-server-error.filter';
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: TRANSPORT,
      options: {
        host: 'products',
        port: PRODUCTS_MICROSERVICE_PORT,
      },
    },
  );

  app.useGlobalFilters(new InternalServerErrorFilter());
  await app.listen();
}
bootstrap()
  .then(() => {
    console.log(
      `Microservicio TCP levantado en http://products:${PRODUCTS_MICROSERVICE_PORT}`,
    );
  })
  .catch((error) => {
    console.log(error);
  });
