import { InternalServerErrorFilter } from './internal-server-error.filter';
import { ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';

describe('InternalServerErrorFilter', () => {
  let filter: InternalServerErrorFilter;
  let response: any;
  let host: ArgumentsHost;

  beforeEach(() => {
    filter = new InternalServerErrorFilter();

    response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    host = {
      switchToHttp: () => ({
        getResponse: () => response,
        getRequest: () => ({}),
      }),
    } as unknown as ArgumentsHost;
  });

  it('should be defined', () => {
    expect(filter).toBeDefined();
  });

  it('should handle InternalServerError correctly', () => {
    const error = new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR);
    filter.catch(error, host);

    expect(response.status).toHaveBeenCalledWith(
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
    expect(response.json).toHaveBeenCalledWith({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message:
        'Se encontro un error inesperado, por favor contacta a soporte o intentalo nuevamente',
    });
  });

  it('should not handle other errors as internal server error', () => {
    const error = new HttpException('Error', HttpStatus.NOT_FOUND);
    filter.catch(error, host);

    expect(response.json).not.toHaveBeenCalledWith({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message:
        'Se encontro un error inesperado, por favor contacta a soporte o intentalo nuevamente',
    });
  });
});
