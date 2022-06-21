import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { MessageService } from 'src/app/service/message.service';
import { LivrosApiService } from '../livros-api.service';

@Component({
  templateUrl: './cadastro-autor.page.html',
  styleUrls: ['./cadastro-autor.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class cadastroautorpage implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private livrosApiService: LivrosApiService,
    private messageService: MessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id:[''],
      nome:['', [Validators.required, Validators.minLength(3)]],
      dataNascimento:[''],
      sexo:[''],
      foto:['', Validators.required]
    });

    const id = +this.activatedRoute.snapshot.params.id;
    if (id) {
      this.findById(id);
    }
  }

  findById(id: number){
    this.livrosApiService
    .findById(id)
    .subscribe(
      (autor) => {
        if (autor) {
          this.form.patchValue({
            ...autor,
          });
        }
      },
      () =>
        this.messageService.error(`Erro ao buscar o autor com o código ${id}`,
                                    () => this.findById(id))
    );
  }

  salvar(){
    const { titulo } = this.form.value;

    this.livrosApiService
      .save(this.form.value)
      .subscribe(
        () => {
          this.router.navigate(['cadastro-autor']);
          this.messageService.sucess(`Autor ${titulo} salvo com sucesso!`)
          .then(() => {
            window.location.reload();
          });
        },
        () => {
          this.messageService.error(`Erro ao salvar o autor ${titulo}`, () =>
          this.salvar()
          );
        }
      );
  }

}
