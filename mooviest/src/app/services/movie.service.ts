import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private API_URL = 'http://localhost:3000/';

  constructor(private _http: HttpClient) {}

  getAllMovies(): Observable<any> {
    return this._http.get(`${this.API_URL}movies`);
  }

  getMovie(id: string): Observable<any> {
    return this._http.get(`${this.API_URL}movies/${id}`);
  }
}
