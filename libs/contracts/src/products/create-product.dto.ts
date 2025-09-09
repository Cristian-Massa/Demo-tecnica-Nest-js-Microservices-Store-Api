import { ProductDto } from '@app/libs/contracts/src/products/product.dto';

export class CreateProductDto {
  price: number;
  image: string;
  name: string;
  descirption: string;
  variant?: ProductDto[];
  modelId: string;
}
