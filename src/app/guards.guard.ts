import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class LoggedInAuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private _router: Router,
    public afAuth: AngularFireAuth
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isLoggedIn === true) {
      alert('U ARE LOGGED GOD DAMNIT')
      this._router.navigate([''])
    }  return true
  }
}
