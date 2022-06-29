import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from './autor.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AutorApiService {
  constructor(private httpClient: HttpClient) {}

  getAutor(): Observable<Autor[]> {
    return this.httpClient.get<Autor[]>(`${environment.apiUrl}/autores`);
  }

  remove(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/autores/${id}`);
  }

  findById(id: number): Observable<Autor> {
    return this.httpClient.get<Autor>(`${environment.apiUrl}/autores/${id}`);
  }

  save(autor: Autor): Observable<Autor> {
    if(autor.id) {
      return this.httpClient.put<Autor>(`${environment.apiUrl}/autores/${autor.id}`, autor);
    }
    return this.httpClient.post<Autor>(`${environment.apiUrl}/autores`, autor);
  }
}
