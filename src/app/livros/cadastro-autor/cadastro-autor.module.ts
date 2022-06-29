import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { cadastroautorPageRoutingModule } from './cadastro-autor-routing.module';

import { CadastroAutorPage } from './cadastro-autor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    cadastroautorPageRoutingModule
  ],
  declarations: [CadastroAutorPage]
})
export class cadastroautorpagemodule {}
