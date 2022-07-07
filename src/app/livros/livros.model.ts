export interface Livro {
    id: number;
    titulo: string;
    stitulo: string;
    editora: string;
    lancamento: string;
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
