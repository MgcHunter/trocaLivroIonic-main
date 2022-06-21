import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { Livro } from './livros.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivrosApiService {
  constructor(private httpClient: HttpClient) { }

  getMeusLivros(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(`${environment.apiUrl}/meusLivros?_sort=titulo`);
  }

  remove(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/meusLivros/${id}`);
  }

  save(livro: Livro): Observable<Livro> {
    if (livro.id) {
      return this.httpClient.put<Livro>(`${environment.apiUrl}/meusLivros/${livro.id}`, livro);
    }
    return this.httpClient.post<Livro>(`${environment.apiUrl}/meusLivros`, livro);
  }

  findById(id: number): Observable<Livro> {
    return this.httpClient.get<Livro>(`${environment.apiUrl}/meusLivros/${id}`);
  }

  getLoja(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(`${environment.apiUrl}/loja`);
  }

  getLojaById(id: number): Observable<Livro> {
    return this.httpClient.get<Livro>(`${environment.apiUrl}/loja/${id}`);
  }

  deleteLivroLoja(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/loja/${id}`);
  }
}
