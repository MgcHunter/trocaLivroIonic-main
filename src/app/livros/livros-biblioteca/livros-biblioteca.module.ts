import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivrosBibliotecaPageRoutingModule } from './livros-biblioteca-routing.module';

import { LivrosBibliotecaPage } from './livros-biblioteca.page';
import { GeneroPipe } from './genero.pipe';
import { EstadoPipe } from './estado.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivrosBibliotecaPageRoutingModule
  ],
  declarations: [LivrosBibliotecaPage, GeneroPipe, EstadoPipe]
})
export class LivrosBibliotecaPageModule {}
