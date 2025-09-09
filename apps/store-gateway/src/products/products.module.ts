import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ClientsModule } from '@nestjs/microservices';
import {
  PRODUCTS_MICROSERVICE_PORT,
  TRANSPORT,
} from '@app/libs/constants/shared.constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCTS_CLIENT',
        transport: TRANSPORT,
        options: {
          host: 'products',
          port: PRODUCTS_MICROSERVICE_PORT,
        },
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
