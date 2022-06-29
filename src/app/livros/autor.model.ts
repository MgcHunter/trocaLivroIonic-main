export interface Autor{
    id: number;
    nome: string;
    nacionalidade: string;
    dataNascimento: string;
    foto: string;
}

export enum Sexo{
    MASCULINO = 'MASCULINO',
    FEMININO  = 'FEMININO',
    OUTROS    = 'OUTROS',
  }
