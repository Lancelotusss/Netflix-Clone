import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public afAuth: AngularFireAuth,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  logout() {
    this.authService.singOut().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
