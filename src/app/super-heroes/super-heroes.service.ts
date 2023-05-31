import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SuperHeroes } from './super-heroes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SuperHeroesService {
  constructor(private http: HttpClient) { }

  get(): Observable<SuperHeroes[]> {
    return this.http.get<SuperHeroes[]>('http://localhost:3000/superHeroes');
  }

  add(payload:SuperHeroes){
    return this.http.post('http://localhost:3000/superHeroes', payload);
  }
}
