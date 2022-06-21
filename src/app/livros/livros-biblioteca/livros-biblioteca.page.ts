import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MessageService } from './../../service/message.service';
import { LivrosApiService } from '../livros-api.service';
import { Livro } from '../livros.model';

@Component({
  selector: 'app-livros-biblioteca',
  templateUrl: './livros-biblioteca.page.html',
  styleUrls: ['./livros-biblioteca.page.scss'],
})
export class LivrosBibliotecaPage implements OnInit {

  livros: Livro[];

  constructor(
    private alertController: AlertController,
    private livrosApiService: LivrosApiService,
    private messageService: MessageService
  ) {
    this.livros = [];
  }

  ngOnInit() {
    this.buscaLivros();
  }

  buscaLivros() {
    this.livrosApiService
      .getMeusLivros()
      .subscribe(
        (livros) =>(this.livros = livros),
      );
  }

  confirmRemove(livro: Livro) {
    this.alertController
      .create({
        header: 'Exclusão',
        message: `Deseja excluir o Livro ${livro.titulo} da sua biblioteca?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => this.remove(livro),
          },
          {
            text: 'Não',
          },
        ],
      })
      .then((alert) => alert.present());
  }

  remove(livro: Livro){
    this.livrosApiService
      .remove(livro.id)
      .subscribe(
        () =>
          {
            this.messageService.sucess(`Livro ${livro.titulo} excluido com sucesso!`);
            this.buscaLivros();
          },
        () =>
          {
            this.messageService.error('Erro ao excluir livro', () => this.remove(livro));
          }
        );
  }
}
