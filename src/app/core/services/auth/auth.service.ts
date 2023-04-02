import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  browserSessionPersistence,
  signInWithPopup,
} from '@angular/fire/auth';
import { EMPTY, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  loginWithGoogle() {
    return of(this.auth.setPersistence(browserSessionPersistence)).pipe(
      switchMap(() => signInWithPopup(this.auth, new GoogleAuthProvider())),
      switchMap(() => {
        return EMPTY;
      })
    );
  }

  isUserLoggedIn(): boolean {
    return this.auth.currentUser ? true : false;
  }
}
