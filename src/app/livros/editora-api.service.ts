import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Editora } from './editora.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EditoraApiService {
  constructor(private httpClient: HttpClient) {}

  getEditora(): Observable<Editora[]> {
    return this.httpClient.get<Editora[]>(`${environment.apiUrl}/editora`);
  }

  remove(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/editora/${id}`);
  }

  findById(id: number): Observable<Editora> {
    return this.httpClient.get<Editora>(`${environment.apiUrl}/editora/${id}`);
  }

  save(editora: Editora): Observable<Editora> {
    if(editora.id) {
      return this.httpClient.put<Editora>(`${environment.apiUrl}/editora/${editora.id}`, editora);
    }
    return this.httpClient.post<Editora>(`${environment.apiUrl}/editora`, editora);
  }
}
