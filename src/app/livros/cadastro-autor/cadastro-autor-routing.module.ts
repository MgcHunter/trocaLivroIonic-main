import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroAutorPage } from './cadastro-autor.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroAutorPage,
  },
  {
    path: ':id',
    component: CadastroAutorPage,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class cadastroautorPageRoutingModule {}
