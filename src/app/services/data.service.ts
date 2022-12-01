import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Movies } from '../models/movie-sample';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private URL = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getLatestMovie(): Observable<Movies> {
    return this.http.get<Movies>(
      this.URL + '/movie/popular?api_key=' + environment.api_key
    );
  }

  getNowPlaying(): Observable<Movies> {
    return this.http.get<Movies>(
      this.URL + '/movie/popular?api_key=' + environment.api_key
    );
  }

  getPopularMovies(): Observable<Movies> {
    return this.http.get<Movies>(
      this.URL + '/movie/popular?api_key=' + environment.api_key
    );
  }

  getTopRated(): Observable<Movies> {
    return this.http.get<Movies>(
      this.URL + '/movie/top_rated?api_key=' + environment.api_key
    );
  }
}
