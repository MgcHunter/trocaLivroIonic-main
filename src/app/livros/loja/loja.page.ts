import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MessageService } from 'src/app/service/message.service';
import { LivrosApiService } from '../livros-api.service';
import { Livro } from '../livros.model';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.page.html',
  styleUrls: ['./loja.page.scss'],
})
export class LojaPage implements OnInit {

  lojas: Livro[];

  constructor(
    private alertController: AlertController,
    private livrosApiService: LivrosApiService,
    private messageService: MessageService,
  ) {
    this.lojas = [];
  }

  ngOnInit() {
    this.listLoja();
  }

  listLoja() {
    this.livrosApiService
      .getLoja()
      .subscribe(
        (lojas) => (this.lojas = lojas),
        () =>
          this.messageService.error('Erro ao carregar loja', () =>
            this.listLoja()
          )
      );
  }

}
