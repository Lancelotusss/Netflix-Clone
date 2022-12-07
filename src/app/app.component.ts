import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movies } from './models/movie-sample';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Netflix-clone';

  constructor(private dataService: DataService, public router: Router) {}
  ngOnInit(): void {}
}
