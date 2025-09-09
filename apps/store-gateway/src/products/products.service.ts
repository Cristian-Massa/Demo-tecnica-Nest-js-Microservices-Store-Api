import { CreateProductDto } from '@app/libs/contracts/src/products/create-product.dto';
import { UpdateProductDto } from '@app/libs/contracts/src/products/update-product.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCTS_CLIENT')
    private productsClient: ClientProxy,
  ) {}
  create(createProductDto: CreateProductDto) {
    return this.productsClient.send('createProduct', createProductDto);
  }

  findAll() {
    return this.productsClient.send('findAllProducts', {});
  }

  findOne(id: number) {
    return this.productsClient.send('findOneProduct', { id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productsClient.send('updateProduct', { id, updateProductDto });
  }

  remove(id: number) {
    return this.productsClient.send('removeProduct', { id });
  }
}
