import { Injectable } from '@angular/core';
import { Observable, of, switchMap, tap } from 'rxjs';
import { User } from 'src/models/user';
import { FirebaseAuthService } from '../firebase/firebase-auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user?: Observable<User>;

  constructor(private auth: FirebaseAuthService) {}

  login() {
    return this.auth.loginWithGoogle().pipe(
      tap((user) => {
        this.user = of(user);
      })
    );
  }

  isUserLoggedIn(): Observable<boolean> {
    return (
      this.user?.pipe(switchMap((user) => (user ? of(true) : of(false)))) ??
      of(false)
    );
  }
}
