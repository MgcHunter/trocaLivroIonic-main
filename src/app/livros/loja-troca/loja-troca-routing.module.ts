import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LojaTrocaPage } from './loja-troca.page';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    component: LojaTrocaPage
  },
  {
    path: ':id',
    component: LojaTrocaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LojaTrocaPageRoutingModule {}
