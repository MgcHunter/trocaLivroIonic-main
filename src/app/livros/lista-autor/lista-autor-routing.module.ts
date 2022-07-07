import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutorListPage } from './lista-autor.page';

const routes: Routes = [
  {
    path: '',
    component: AutorListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutorListPageRoutingModule {}
