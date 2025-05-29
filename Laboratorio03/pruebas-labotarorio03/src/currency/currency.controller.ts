import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { CurrencyService } from './currency.service';

// Controlador CurrencyController
@Controller()
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('/dollarEquivalent/:amount')
  getDollarEquivalent(
    @Param('amount', ParseFloatPipe) amount: number,
  ): number {
    return this.currencyService.getDollarEquivalent(amount);
  }
}