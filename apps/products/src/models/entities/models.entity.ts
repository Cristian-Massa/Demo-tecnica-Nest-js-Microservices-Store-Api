import { Brands } from '@products/brands/entities/brands.entity';
import { Products } from '@products/products/entities/products.entity';
import { UUIDBaseEntity } from '@products/shared/entity/base-entity.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Models extends UUIDBaseEntity {
  @Column({
    type: 'varchar',
  })
  name: string;

  @ManyToOne(() => Brands, (brands) => brands.models)
  @JoinColumn({
    name: 'brand_id',
  })
  brands: Brands;

  @OneToMany(() => Products, (products) => products.models)
  products: Products[];
}
