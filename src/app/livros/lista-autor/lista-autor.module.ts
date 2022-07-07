import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutorListPageRoutingModule } from './lista-autor-routing.module';

import { AutorListPage } from './lista-autor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutorListPageRoutingModule,
  ],
  declarations: [AutorListPage]
})
export class AutorListPageModule {}
