import { Injectable, NgZone } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { BehaviorSubject, concatMap, from, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class AuthService {
  loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();
  currentUser$ = authState(this.auth);
  constructor(private auth: Auth) {}
  signUp(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }
  login(username: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }
  singOut() {
  return from(this.auth.signOut())
}
}
