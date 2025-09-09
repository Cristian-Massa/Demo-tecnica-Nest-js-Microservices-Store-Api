import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

class BaseEntity {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({
    nullable: true,
  })
  updatedAt: Date | null;

  @DeleteDateColumn({
    nullable: true,
  })
  deletedAt: Date | null;
}

export class IncrementalIdBaseEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
}

export class UUIDBaseEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
