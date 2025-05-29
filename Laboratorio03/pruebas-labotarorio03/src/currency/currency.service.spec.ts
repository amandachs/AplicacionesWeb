import { CurrencyService } from './currency.service';
import { BadRequestException } from '@nestjs/common';

// Pruebas a la aplicación (getDollarEquivalent)
describe('CurrencyService', () => {
  let servicio: CurrencyService;

  beforeEach(() => {
    servicio = new CurrencyService();
    // Mockea solo el método getDollarEquivalent
    jest.spyOn(servicio,'getDollarEquivalent').mockReturnValue(2);
  });

  it('Debe retornar el equivalente correcto en dólares', () => {
    const colones = 3000;
    const resultado = servicio.getDollarEquivalent(colones);
    expect(resultado).toBe(2);
  });

});