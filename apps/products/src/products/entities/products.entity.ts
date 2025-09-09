import { Models } from '@products/models/entities/models.entity';
import { IncrementalIdBaseEntity } from '@products/shared/entity/base-entity.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Products extends IncrementalIdBaseEntity {
  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'serial_number',
  })
  serialNumber: string;

  @Column({
    type: 'varchar',
  })
  description: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  image_url: string | null;

  @Column({
    type: 'float',
  })
  price: number;

  @ManyToOne(() => Models, (models) => models.products)
  models: Models;
}
