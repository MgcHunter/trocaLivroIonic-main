import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroEditoraPage } from './cadastro-editora.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroEditoraPage
  },
  {
    path: ':id',
    component: CadastroEditoraPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroEditoraPageRouting {}
