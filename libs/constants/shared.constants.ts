import { Transport } from '@nestjs/microservices';

export const HTTP_PORT = process.env.HTTP_PORT
  ? Number(process.env.HTTP_PORT)
  : 3000;
export const GATEWAY_PORT = process.env.GATEWAY_PORT
  ? Number(process.env.GATEWAY_PORT)
  : 3001;
export const PRODUCTS_MICROSERVICE_PORT = process.env.PRODUCTS_MICROSERVICE_PORT
  ? Number(process.env.PRODUTS_MICROSERVICE_PORT)
  : 4000;
export const TRANSPORT = Transport.TCP;
