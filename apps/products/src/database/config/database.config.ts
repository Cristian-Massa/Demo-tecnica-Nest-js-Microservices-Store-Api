import { ConfigService } from '@nestjs/config';
import { buildDataSourceOptions } from '@products/database/providers/database.provider';
import { DataSource } from 'typeorm';

export default new DataSource(buildDataSourceOptions(new ConfigService()));
