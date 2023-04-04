import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  User,
  browserLocalPersistence,
  signInWithPopup,
  user,
} from '@angular/fire/auth';
import { EMPTY, Observable, from, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<User | null>;

  constructor(private auth: Auth) {
    this.auth.setPersistence(browserLocalPersistence);
    this.user = user(this.auth);
  }

  loginWithGoogle() {
    return from(signInWithPopup(this.auth, new GoogleAuthProvider()));
  }

  isUserLoggedIn(): Observable<boolean> {
    return this.user.pipe(switchMap((user) => (user ? of(true) : of(false))));
  }
}
