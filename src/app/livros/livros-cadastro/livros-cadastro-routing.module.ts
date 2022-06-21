import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivrosCadastroPage } from './livros-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: LivrosCadastroPage,
  },
  {
    path: ':id',
    component: LivrosCadastroPage,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosCadastroPageRoutingModule {}
