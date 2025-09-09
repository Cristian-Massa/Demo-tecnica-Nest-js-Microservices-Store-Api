import { ConfigService } from '@nestjs/config';
import { Brands } from '@products/brands/entities/brands.entity';
import { Models } from '@products/models/entities/models.entity';
import { Products } from '@products/products/entities/products.entity';
import { DataSourceOptions } from 'typeorm';

export function buildDataSourceOptions(
  configService: ConfigService,
): DataSourceOptions {
  return {
    type: 'mysql',
    host: configService.get('DB_HOST'),
    username: configService.get('MYSQL_USER'),
    password: configService.get('MYSQL_PASSWORD'),
    port: configService.get('DB_PORT'),
    database: configService.get('MYSQL_DATABASE'),
    entities: [Products, Models, Brands],
    logging: configService.get('DATABASE_LOGGING') === 'true',
    migrations: [__dirname + '../migrations/*{.ts,.js}'],
  };
}
