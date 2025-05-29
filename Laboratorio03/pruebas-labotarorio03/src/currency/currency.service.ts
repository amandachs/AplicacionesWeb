import { Injectable, BadRequestException } from '@nestjs/common';
import axios from 'axios';

// Servicio CurrencyService
@Injectable()
export class CurrencyService {
  private valorDolarVenta: number;

  async inicializar(): Promise<void> {
    await this.obtenerValorDolar();
  }

  async obtenerValorDolar(): Promise<void> {
    try {
      const respuesta = await axios.get('https://api.hacienda.go.cr/indicadores/tc');
      const data = respuesta.data as {
        dolar: {
          venta: {
            fecha: string;
            valor: number; // Valor encontrado
          };
        };
      };
      this.valorDolarVenta = data.dolar.venta.valor;
    } catch (error) {
      console.error('Error en axios:', error);
      throw new Error('Error al obtener el valor del dólar.');
    }
  }

  getDollarEquivalent(colones: number): number {
    if (!this.valorDolarVenta || colones <= 0) {
      throw new BadRequestException('Monto inválido o valor del dólar no disponible');
    }
    return colones / this.valorDolarVenta;
  }
}