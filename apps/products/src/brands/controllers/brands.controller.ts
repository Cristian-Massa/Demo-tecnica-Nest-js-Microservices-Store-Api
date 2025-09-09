import { Controller } from '@nestjs/common';
import { BrandsService } from '@products/brands/services/brands.service';

@Controller()
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}
}
