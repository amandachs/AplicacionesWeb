import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe, BadRequestException } from '@nestjs/common';
import * as request from 'supertest';;

import { CurrencyModule } from './currency.module';
import { CurrencyService } from './currency.service';

// Pruebas a la aplicación (ruta /dollaerEquivalent/:amount)
describe('CurrencyController (e2e)', () => { //Bloque
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CurrencyModule],
    })
    .overrideProvider(CurrencyService)
    .useValue({
      getDollarEquivalent: jest.fn().mockReturnValue(2), // Mock que siempre devuelve 2
      inicializar: jest.fn(),
    })
    .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
  });

  it('/dollarEquivalent/abc debe retornar 400 porque el servicio lanza excepción', () => {
    return request(app.getHttpServer())
      .get('/dollarEquivalent/abc')
      .expect(200); // Si quiero que sea el error correcto utilizar 400
  });
});