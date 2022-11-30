import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../services/data.service';
import { Movie } from '../models/movie-sample';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  latestMovie: any;
  popularMovies: Movie;
  topRatedMovies: Movie;
  nowPlayingMovies: Movie;
  upcomingMovies: Movie;
  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.getLatestMovie();
    this.getPopularMovies();
    this.getTopRatedMovies();
    this.getNowPlayingMovies();
    this.getUpcomingMovies();
  }

  getLatestMovie() {
    this.dataservice.getLatestMovie().subscribe((res) => {
      this.latestMovie = this.changeData(res);
  
    });
  }
  getPopularMovies() {
    this.dataservice.getPopularMovies().subscribe((res) => {
      this.popularMovies = this.fixData(res);

    });
  }
  getTopRatedMovies() {
    this.dataservice.getTopRatedMovies().subscribe((res) => {
      this.topRatedMovies = this.fixData(res);
    });
  }
  getNowPlayingMovies() {
    this.dataservice.getNowPlayingMovies().subscribe((res) => {
      this.nowPlayingMovies = this.fixData(res);
    });
  }
  getUpcomingMovies() {
    this.dataservice.getUpcomingMovies().subscribe((res) => {
      this.upcomingMovies = this.fixData(res);
    });
  }
  fixData(movies: Movie): Movie {
    if (movies.results) {
      movies.results.forEach((element) => {
        element.backdrop_path =
          'https://image.tmdb.org/t/p/original' +
          element.backdrop_path +
          '?api_key=' +
          environment.api_key;
        if (!element.title) {
          element.title = element?.name;
        }
      });
      return movies;
    }
  }
  changeData(res: any): any {
    if (!res.backdrop_path) {
      res.backdrop_path =
        'https://image.tmdb.org/t/p/original' +
        res.poster_path +
        '?api_key=' +
        environment.api_key;
    } else {
      res.backdrop_path =
        'https://image.tmdb.org/t/p/original' +
        res.backdrop_path +
        '?api_key=' +
        environment.api_key;
    }
    return res;
  }
}
