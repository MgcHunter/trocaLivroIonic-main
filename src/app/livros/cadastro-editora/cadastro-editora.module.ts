import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEditoraPageRouting } from './cadastro-editora-routing.module';

import { CadastroEditoraPage } from './cadastro-editora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CadastroEditoraPageRouting
  ],
  declarations: [CadastroEditoraPage]
})
export class CadastroEditoraPageModule {}



