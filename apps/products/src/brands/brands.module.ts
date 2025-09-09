import { Module } from '@nestjs/common';
import { BrandsService } from '@products/brands/services/brands.service';
import { BrandsController } from '@products/brands/controllers/brands.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brands } from '@products/brands/entities/brands.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Brands])],
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class BrandsModule {}
