import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemon } from './interfaces/pokemon.interface';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<IPokemon[]> {
    // return this.http.get<IPokemon[]>(`${environment.api}/${id}`);
    return this.http.get<IPokemon[]>(`${environment.api}`);
  }
}
