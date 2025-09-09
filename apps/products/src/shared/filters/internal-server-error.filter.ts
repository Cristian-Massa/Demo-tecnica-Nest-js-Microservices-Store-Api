import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class InternalServerErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    if (status !== HttpStatus.INTERNAL_SERVER_ERROR) {
      return;
    }
    response.status(status).json({
      statusCode: status,
      message:
        'Se encontro un error inesperado, por favor contacta a soporte o intentalo nuevamente',
    });
  }
}
