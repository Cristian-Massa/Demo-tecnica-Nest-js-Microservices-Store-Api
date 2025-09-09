import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BrandsModule } from '@products/brands/brands.module';
import { DatabaseProvider } from '@products/database/database.module';
import { ModelsModule } from '@products/models/models.module';
import { ProductsModule } from '@products/products/products.module';

@Module({
  imports: [
    ProductsModule,
    BrandsModule,
    ModelsModule,
    DatabaseProvider,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
  ],
})
export class AppModule {}
