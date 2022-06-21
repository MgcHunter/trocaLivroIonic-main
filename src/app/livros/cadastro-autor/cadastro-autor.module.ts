import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { cadastroautorPageRoutingModule } from './cadastro-autor-routing.module';

import { cadastroautorpage } from './cadastro-autor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    cadastroautorPageRoutingModule
  ],
  declarations: [cadastroautorpage]
})
export class cadastroautorpagemodule {}
