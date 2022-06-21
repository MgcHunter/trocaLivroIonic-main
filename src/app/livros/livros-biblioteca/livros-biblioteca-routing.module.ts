import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivrosBibliotecaPage } from './livros-biblioteca.page';

const routes: Routes = [
  {
    path: '',
    component: LivrosBibliotecaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosBibliotecaPageRoutingModule {}
