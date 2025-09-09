import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from '@products/products/controllers/products.controller';
import { Products } from '@products/products/entities/products.entity';
import { ProductsService } from '@products/products/services/products.service';
@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
