import { Pipe, PipeTransform } from '@angular/core';
import { Estado } from '../livros.model';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  transform(value: Estado): string {
    switch(value) {
      case Estado.BEMUSADO: return 'Bem Usado';
      case Estado.COMONOVO: return 'Como Novo';
      case Estado.NOVO: return 'Novo';
      case Estado.USADO: return 'Usado';
    }
  }

}
