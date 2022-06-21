export interface Livro {
    id: number;
    titulo: string;
    genero: Genero;
    estado: Estado;
    foto: string;
  }

export interface autor{
    id: number;
    nome: string;
    nacionalidade: string;
    dataNascimento: string;
    foto: string;
}

  export enum Genero {
    FANTASIA    = 'FANTASIA',
    TERROR      = 'TERROR',
    FICCAO      = 'FICCAO',
    ROMANCE     = 'ROMANCE',
    BIOGRAFIAS  = 'BIOGRAFIAS',
    TECNOLOGIA  = 'TECNOLOGIA',
  }

  export enum Estado {
    NOVO     = 'NOVO',
    COMONOVO = 'COMONOVO',
    USADO    = 'USADO',
    BEMUSADO = 'BEMUSADO',
  }

  export enum Sexo{
    MASCULINO = 'MASCULINO',
    FEMININO  = 'FEMININO',
    OUTROS    = 'OUTROS',
  }
