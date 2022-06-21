import { Pipe, PipeTransform } from '@angular/core';
import { Genero } from '../livros.model';

@Pipe({
  name: 'genero'
})
export class GeneroPipe implements PipeTransform {
  transform(value: Genero): string {
    switch(value) {
      case Genero.BIOGRAFIAS: return 'Biografias e Autobiografias';
      case Genero.FANTASIA: return 'Fantasia';
      case Genero.FICCAO: return 'Ficção Cientifica';
      case Genero.ROMANCE: return 'Romance';
      case Genero.TERROR: return 'Terror';
      case Genero.TECNOLOGIA: return 'Técnologia';
    }
  }
}
