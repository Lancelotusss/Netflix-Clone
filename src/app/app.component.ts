import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from './models/movie-sample';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Netflix-clone';
  trending: Movies;
  popular: Movies;
  topRated: Movies;
  originals: Movies;
  nowPlaying: Movies;
  latest: Movies;
  constructor(private movie: DataService) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.movie.getLatestMovie().subscribe((data) => (this.latest = data));
    this.movie.getPopularMovies().subscribe((data) => (this.popular = data));
    this.movie.getTopRated().subscribe((data) => (this.topRated = data));
    this.movie.getNowPlaying().subscribe((data) => (this.nowPlaying = data));
    console.log(this.popular.results[0].title);
  }
}
