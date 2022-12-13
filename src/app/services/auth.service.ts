import { Injectable, NgZone } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { BehaviorSubject, concatMap, from, Observable, of, tap } from 'rxjs';
import { TokenStorageService } from './token.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loggedIn = new BehaviorSubject<boolean>(false);
  currentUser$ = authState(this.auth);
  loggedOrNot: boolean;
userData: any
  constructor(
    private auth: Auth,
    public afAuth: AngularFireAuth,
    public token: TokenStorageService,
    public ngZone: NgZone,
    public router: Router
  ) {   this.afAuth.authState.subscribe((user) => {
    if (user) {
      this.userData = user;
      localStorage.setItem('user', JSON.stringify(this.userData));
      JSON.parse(localStorage.getItem('user')!);
    } else {
      localStorage.setItem('user', 'null');
      JSON.parse(localStorage.getItem('user')!);
    }
  });}








  signUp(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  login(username: string, password: string) {
    console.log(this.isLoggedIn);
    return from(signInWithEmailAndPassword(this.auth, username, password)).pipe(
      tap((res) => {
        console.log(
          'aiuwdhaiuhdaiduahwdiaudhaiduwahdaiudhawudhawiduhawdiawudhaiwduh',
          res.user
        );
        this.loggedIn.next(true);
      })
    );
  }

  signOut() {
    this.loggedIn.next(false)
    console.log(this.isLoggedIn);
    localStorage.removeItem('user')
    this.router.navigate([''])
    return from(this.auth.signOut())

    ;
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== 'null' ? true : false;
  }


}
