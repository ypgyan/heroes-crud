import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SuperHeroes } from './super-heroes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SuperHeroesService {
  constructor(private http: HttpClient) { }

  get(
    sortColumn: string,
    sortType: string,
    searchKey: string,
    currentPage: number,
    pageSize: number
  ): Observable<HttpResponse<any>> {
    let url = `http://localhost:3000/superHeroes?_page=${currentPage}&_limit=${pageSize}`;
    if (sortColumn && sortType) {
      url = `${url}&_sort=${sortColumn}&_order=${sortType}`;
    }

    if (searchKey) {
      url = `${url}&q=${searchKey}`;
    }
    return this.http.get<HttpResponse<any>>(url, { observe: 'response' });
  }

  add(payload: SuperHeroes) {
    return this.http.post('http://localhost:3000/superHeroes', payload);
  }

  getById(id: number): Observable<SuperHeroes> {
    return this.http.get<SuperHeroes>(
      `http://localhost:3000/superHeroes/${id}`
    );
  }

  update(payload: SuperHeroes): Observable<SuperHeroes> {
    return this.http.put<SuperHeroes>(
      `http://localhost:3000/superHeroes/${payload.id}`,
      payload
    );
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:3000/superHeroes/${id}`);
  }
}
