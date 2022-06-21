import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivrosCadastroPageRoutingModule } from './livros-cadastro-routing.module';

import { LivrosCadastroPage } from './livros-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LivrosCadastroPageRoutingModule
  ],
  declarations: [LivrosCadastroPage]
})
export class LivrosCadastroPageModule {}
