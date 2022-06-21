import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Loja', url: '/loja', icon: 'storefront' },
    { title: 'Biblioteca', url: '/livros-biblioteca', icon: 'book' },
    { title: 'Cadastro', url: '/livros-cadastro', icon: 'save' },
  ];

  constructor() {}
}
