export class ProductDto {
  id: string;
  price: number;
  image: string;
  name: string;
  descirption: string;
  variant?: ProductDto[];
}
