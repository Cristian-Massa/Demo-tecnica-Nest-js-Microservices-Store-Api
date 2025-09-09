import { DynamicModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { buildDataSourceOptions } from '@products/database/providers/database.provider';

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  imports: [TypeOrmModule, ConfigModule],
  inject: [ConfigService],
  useFactory: buildDataSourceOptions,
});
