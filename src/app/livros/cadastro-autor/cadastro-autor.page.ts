import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ViewDidEnter,
  ViewDidLeave,
  ViewWillEnter,
  ViewWillLeave,
} from '@ionic/angular';
import { MessageService } from '../../service/message.service';
import { AutorApiService } from '../autor-api.service';
import { Sexo } from '../autor.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-autor',
  templateUrl: './cadastro-autor.page.html',
  styleUrls: ['./cadastro-autor.page.scss'],
})
export class CadastroAutorPage
  implements
    OnInit,
    OnDestroy,
    ViewWillEnter,
    ViewDidEnter,
    ViewWillLeave,
    ViewDidLeave
{
  form: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private autorApiService: AutorApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
  ) {}

  ngOnInit() {
    console.log('CadastroAutorPage ngOnInit');

    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      nacionalidade: ['', Validators.required],
      dataNascimento: [''],
      sexo: [Sexo.MASCULINO, Validators.required],
      foto: ['', Validators.required],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    if (id) {
      this.findById(id);
    }
  }

  findById(id: number) {
    this.loading = true;
    this.autorApiService
      .findById(id)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        (autor) => {
          if (autor) {
            this.form.patchValue({
              ...autor,
            });
          }
        },
        () =>
          this.messageService.error(
            `Erro ao buscar o autor com código ${id}`,
            () => this.findById(id)
          )
      );
  }

  ionViewWillEnter(): void {
    console.log('CadastroAutorPage ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('CadastroAutorPage ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('CadastroAutorPage ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('CadastroAutorPage ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('CadastroAutorPage ngOnDestroy');
  }

  salvar() {
    const { value } = this.form;
    const { id, nome } = value;

    if (!id) {
      delete value.id;
    }

    value.lancamento = value.lancamento.split('T')[0];

    this.loading = true;

    this.autorApiService
      .save(value)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        () => {
          this.messageService.sucess(`Game ${nome} foi salvo sucesso!`);
          this.router.navigate(['games-list']);
        },
        ({ error }) => {
          const erro = error?.erro ?? '';
          const mensagem = `Erro ao salvar o game ${nome} ${erro ? ': '+erro:''}`;
          this.messageService.error(mensagem, () => this.salvar());
        }
      );
  }
}
