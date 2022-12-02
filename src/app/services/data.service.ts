import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Movies } from '../models/movie-sample';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private URL = 'https://api.themoviedb.org/3/movie/';
  private API_KEY = environment.api_key


  constructor(private http: HttpClient) {}


  getNowPlaying(): Observable<Movies> {
    return this.http.get<Movies>(
      this.URL + 'now_playing?api_key=' + this.API_KEY
    )
  }

  getPopularMovies(): Observable<Movies> {
    return this.http.get<Movies>(
      this.URL + 'popular?api_key=' + this.API_KEY
    )
  }

  getTopRated(): Observable<Movies> {
    return this.http.get<Movies>(
      this.URL + 'top_rated?api_key=' + this.API_KEY
    )
  }
}
