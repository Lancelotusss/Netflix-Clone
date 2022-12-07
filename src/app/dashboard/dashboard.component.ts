import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../services/data.service';
import { Movies } from '../models/movie-sample';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Input() movies: Movies;
  @Input() title: string;
  constructor() {}

  ngOnInit(): void {}
}
