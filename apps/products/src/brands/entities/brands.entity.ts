import { Models } from '@products/models/entities/models.entity';
import { UUIDBaseEntity } from '@products/shared/entity/base-entity.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Brands extends UUIDBaseEntity {
  @Column({
    type: 'varchar',
  })
  name: string;

  @OneToMany(() => Models, (models) => models.brands)
  models: Models[];
}
