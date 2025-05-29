import { Module, OnModuleInit } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';

// Módulo CurrencyModule
@Module({
  controllers: [CurrencyController],
  providers: [CurrencyService],
})
export class CurrencyModule implements OnModuleInit {
  constructor(private readonly currencyService: CurrencyService) {}

  async onModuleInit() {
    await this.currencyService.inicializar();
  }
}