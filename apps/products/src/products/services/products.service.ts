import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from '@app/libs/contracts/src/products/create-product.dto';
import { UpdateProductDto } from '@app/libs/contracts/src/products/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from '@products/products/entities/products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const createdProduct = this.productsRepository.create(createProductDto);

    const savedProduct = await this.productsRepository.save(createdProduct);
    return savedProduct;
  }

  async findAll() {
    const products = await this.productsRepository.find();
    if (products.length === 0) return 'no se encontraron productos';
    return products;
  }

  async findOne(id: number) {
    const product = await this.productsRepository.findOne({
      where: {
        id,
      },
    });

    if (!product) throw new NotFoundException();

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const updatedProduct = await this.productsRepository.update(id, {
      ...updateProductDto,
    });
  }

  async remove(id: number) {
    const deletedProduct = await this.productsRepository.softDelete(id);
  }
}
