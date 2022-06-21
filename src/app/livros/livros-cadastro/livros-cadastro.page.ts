import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { MessageService } from 'src/app/service/message.service';
import { LivrosApiService } from '../livros-api.service';
import { Estado, Genero } from '../livros.model';

@Component({
  selector: 'app-livros-cadastro',
  templateUrl: './livros-cadastro.page.html',
  styleUrls: ['./livros-cadastro.page.scss'],
})
export class LivrosCadastroPage implements OnInit {

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
      titulo:['', [Validators.required, Validators.minLength(3)]],
      genero:[Genero.ROMANCE],
      estado:[Estado.USADO],
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
      (livro) => {
        if (livro) {
          this.form.patchValue({
            ...livro,
          });
        }
      },
      () =>
        this.messageService.error(`Erro ao buscar o livro com o código ${id}`,
                                    () => this.findById(id))
    );
  }

  salvar(){
    const { titulo } = this.form.value;

    this.livrosApiService
      .save(this.form.value)
      .subscribe(
        () => {
          this.router.navigate(['livros-biblioteca']);
          this.messageService.sucess(`Livro ${titulo} salvo com sucesso!`)
          .then(() => {
            window.location.reload();
          });
        },
        () => {
          this.messageService.error(`Erro ao salvar o livro ${titulo}`, () =>
          this.salvar()
          );
        }
      );
  }

}
