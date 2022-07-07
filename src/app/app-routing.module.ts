import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'livros-biblioteca',
    pathMatch: 'full'
  },
  {
    path: 'livros-biblioteca',
    loadChildren: () => import('./livros/livros-biblioteca/livros-biblioteca.module').then( m => m.LivrosBibliotecaPageModule)
  },
  {
    path: 'livros-cadastro',
    loadChildren: () => import('./livros/livros-cadastro/livros-cadastro.module').then( m => m.LivrosCadastroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
