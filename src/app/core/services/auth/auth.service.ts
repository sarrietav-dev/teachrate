import { Injectable } from '@angular/core';
import { Observable, of, switchMap, tap } from 'rxjs';
import { User } from 'src/models/user';
import { FirebaseAuthService } from '../firebase/firebase-auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user?: Observable<User | null>;

  constructor(private auth: FirebaseAuthService) {
    this.user = this.auth.getUser();
  }

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
