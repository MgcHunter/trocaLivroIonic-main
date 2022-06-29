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
import { EditoraApiService } from '../editora-api.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-editora',
  templateUrl: './cadastro-editora.page.html',
  styleUrls: ['./cadastro-editora.page.scss'],
})
export class CadastroEditoraPage
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
    private editoraApiService: EditoraApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
  ) {}

  ngOnInit() {
    console.log('EditoraRegisterPage ngOnInit');

    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(3)]],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    if (id) {
      this.findById(id);
    }
  }

  findById(id: number) {
    this.loading = true;
    this.editoraApiService
      .findById(id)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        (editora) => {
          if (editora) {
            this.form.patchValue({
              ...editora,
            });
          }
        },
        () =>
          this.messageService.error(
            `Erro ao buscar a Editora com código ${id}`,
            () => this.findById(id)
          )
      );
  }

  ionViewWillEnter(): void {
    console.log('EditoraRegisterPage ionViewWillEnter');
  }

  ionViewDidEnter(): void {
    console.log('EditoraRegisterPage ionViewDidEnter');
  }

  ionViewWillLeave(): void {
    console.log('EditoraRegisterPage ionViewWillLeave');
  }

  ionViewDidLeave(): void {
    console.log('EditoraRegisterPage ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('EditoraRegisterPage ngOnDestroy');
  }

  salvar() {
    const { value } = this.form;
    const { id, nome } = value;

    if (!id) {
      delete value.id;
    }

    value.lancamento = value.lancamento.split('T')[0];

    this.loading = true;

    this.editoraApiService
      .save(value)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(
        () => {
          this.messageService.sucess(`Editora ${nome} foi salvo sucesso!`);
        },
        ({ error }) => {
          const erro = error?.erro ?? '';
          const mensagem = `Erro ao salvar a Editora ${nome} ${erro ? ': '+erro:''}`;
          this.messageService.error(mensagem, () => this.salvar());
        }
      );
  }
}
