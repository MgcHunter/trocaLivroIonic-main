import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { cadastroautorpage } from './cadastro-autor.page';

const routes: Routes = [
  {
    path: '',
    component: cadastroautorpage,
  },
  {
    path: ':id',
    component: cadastroautorpage,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class cadastroautorPageRoutingModule {}
