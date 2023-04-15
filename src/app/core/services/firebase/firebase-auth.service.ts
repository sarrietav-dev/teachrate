import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  User as FirebaseUser,
  signInWithPopup,
  user,
  browserSessionPersistence,
} from '@angular/fire/auth';
import { Observable, from, mergeMap, of } from 'rxjs';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  private user: Observable<FirebaseUser | null>;

  constructor(private auth: Auth) {
    this.auth.setPersistence(browserSessionPersistence);
    this.user = user(this.auth);
  }

  loginWithGoogle(): Observable<User> {
    return from(signInWithPopup(this.auth, new GoogleAuthProvider())).pipe(
      mergeMap((user) => {
        return of({
          id: user.user.uid,
          name: user.user.displayName ?? undefined,
          email: user.user.email ?? '',
        } satisfies User);
      })
    );
  }

  getUser(): Observable<User | null> {
    return this.user.pipe(
      mergeMap((user) => {
        if (user) {
          return of({
            id: user.uid,
            name: user.displayName ?? undefined,
            email: user.email ?? '',
          } satisfies User);
        } else {
          return of(null);
        }
      })
    );
  }
}
