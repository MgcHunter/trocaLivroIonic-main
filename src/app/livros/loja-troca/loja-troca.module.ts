import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LojaTrocaPageRoutingModule } from './loja-troca-routing.module';

import { LojaTrocaPage } from './loja-troca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LojaTrocaPageRoutingModule
  ],
  declarations: [LojaTrocaPage]
})
export class LojaTrocaPageModule {}
