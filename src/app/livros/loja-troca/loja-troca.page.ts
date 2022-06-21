import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewDidEnter } from '@ionic/angular';
import { MessageService } from 'src/app/service/message.service';
import { LivrosApiService } from '../livros-api.service';
import { Livro } from '../livros.model';

@Component({
  selector: 'app-loja-troca',
  templateUrl: './loja-troca.page.html',
  styleUrls: ['./loja-troca.page.scss'],
})

export class LojaTrocaPage implements OnInit, ViewDidEnter {

  public lojas: Livro;
  public livros: Livro[];
  public id = +this.activatedRoute.snapshot.params.id;
  public IdMeuLivro: number;

  constructor(
    private router: Router,
    private livrosApiService: LivrosApiService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute
  ) {
    this.livros = [];
  }
  ionViewDidEnter(): void {

  }

  ngOnInit() {
    this.findLojaById(this.id);
    this.buscaMeusLivros();;
  }


  findLojaById(id: number) {
    this.livrosApiService
      .getLojaById(id)
      .subscribe(
        (lojas) => (this.lojas = lojas),
        () =>
          this.messageService.error('Erro ao buscar livro da Loja', () =>
            this.findLojaById(id)
          )
      );
  }

  buscaMeusLivros() {
    this.livrosApiService
      .getMeusLivros()
      .subscribe(
        (livros) => (this.livros = livros),
      );
  }

  atualizaLivro(idMeuLivro: number, lojaLivro: Livro) {
    const idLojaLivro = lojaLivro.id;
    lojaLivro.id = idMeuLivro;
    console.log(lojaLivro);
    this.livrosApiService
      .save(lojaLivro)
      .subscribe( () => {
        this.livrosApiService
          .deleteLivroLoja(idLojaLivro)
          .subscribe( () => this.router.navigate(['livros-biblioteca']),
          () => this.router.navigate(['livros-biblioteca'])
          .then(() => {
            window.location.reload();
          }));
      });
  }

}
