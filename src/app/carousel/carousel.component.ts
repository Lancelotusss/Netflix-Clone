import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { AppComponent } from '../app.component';
import { Movies } from '../models/movie-sample';
import { environment } from 'src/environments/environment';
import { SliderDirective } from '../next.directive';
import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  popular: Movies;
  topRated: Movies;

  nowPlaying: Movies;
  constructor(private dataService: DataService, public next: SliderDirective) {}
  ngOnInit(): void {
    this.getNowPlaying();
    this.getPopularMovies();
    this.getTopRated();
  }
  getNowPlaying() {
    this.dataService.getNowPlaying().subscribe((res) => {
      this.nowPlaying = this.modifyData(res);
    });
  }
  getTopRated() {
    this.dataService.getTopRated().subscribe((res) => {
      this.topRated = this.modifyData(res);
    });
  }
  getPopularMovies() {
    this.dataService.getPopularMovies().subscribe((res) => {
      this.popular = this.modifyData(res);
    });
  }
  modifyData(movies: Movies): Movies {
    if (movies?.results) {
      movies.results.forEach((el) => {
        el.backdrop_path =
          'https://image.tmdb.org/t/p/original' +
          el.backdrop_path +
          '?api_key=' +
          environment.api_key;
      });
    }
    return movies;
  }
}
