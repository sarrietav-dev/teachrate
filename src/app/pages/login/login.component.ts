import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import googleIcon from "@iconify/icons-fa6-brands/google"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  google = googleIcon

  login() {
    this.authService
      .loginWithGoogle()
      .subscribe(() => this.router.navigate(['']));
  }
}
