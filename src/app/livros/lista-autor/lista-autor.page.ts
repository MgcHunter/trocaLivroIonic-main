import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AlertController,
  IonItemSliding,
  ToastController,
  ViewDidEnter,
  ViewDidLeave,
  ViewWillEnter,
  ViewWillLeave,
} from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { MessageService } from 'src/app/service/message.service';
import { AutorApiService } from '../autor-api.service';
import { Autor } from '../autor.model';

@Component({
  selector: 'app-lista-autor',
  templateUrl: './lista-autor.page.html',
  styleUrls: ['./lista-autor.page.scss'],
})
export class AutorListPage
  implements
    OnInit,
    OnDestroy,
    ViewWillEnter,
    ViewDidEnter,
    ViewWillLeave,
    ViewDidLeave
{
  Autor: Autor[];
  loading = false;

  constructor(
    private alertController: AlertController,
    private autorApiService: AutorApiService,
    private messageService: MessageService,
  ) {
    this.Autor = [];
  }

  ngOnInit() {
    console.log('AutorListPage ngOnInit');
  }

  ionViewWillEnter(): void {
    this.AutorList();
    console.log('AutorListPage ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('AutorListPage ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('AutorListPage ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('AutorListPage ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('AutorListPage ngOnDestroy');
  }

  AutorList() {
    this.loading = true;
    this.autorApiService
      .getAutor()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        (autor) => (this.Autor = autor),
        () =>
          this.messageService.error('Erro ao listar autor', () =>
            this.AutorList()
          )
      );
  }

  confirmRemove(autor: Autor) {
    this.alertController
      .create({
        header: 'Exclusão',
        message: `Você deseja excluir o autor ${autor.nome}?`,
        buttons: [
          {
            text: 'Sim',
            handler: () => this.remove(autor),
          },
          {
            text: 'Não',
          },
        ],
      })
      .then((alert) => alert.present());
  }

  remove(autor: Autor) {
    this.loading = true;
    this.autorApiService
      .remove(autor.id)
      .subscribe(
        () => {
          this.messageService.sucess(`Excluído autor ${autor.nome} com sucesso!`);
          this.AutorList();
        },
        () => {
          this.messageService.error('Erro ao excluir autor', () =>
            this.remove(autor)
          );
          this.loading = false;
        }
      );
  }

  close(sliding: IonItemSliding) {
    sliding.close();
  }
}
