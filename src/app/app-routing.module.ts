import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'livros-biblioteca',
    pathMatch: 'full'
  },
  {
    path: 'loja',
    loadChildren: () => import('./livros/loja/loja.module').then( m => m.LojaPageModule)
  },
  {
    path: 'livros-biblioteca',
    loadChildren: () => import('./livros/livros-biblioteca/livros-biblioteca.module').then( m => m.LivrosBibliotecaPageModule)
  },
  {
    path: 'livros-cadastro',
    loadChildren: () => import('./livros/livros-cadastro/livros-cadastro.module').then( m => m.LivrosCadastroPageModule)
  },
  {
    path: 'loja-troca',
    loadChildren: () => import('./livros/loja-troca/loja-troca.module').then( m => m.LojaTrocaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
