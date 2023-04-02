import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { IsAuthenticatedGuard } from './core/guards/is-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/login/feed/feed.module').then((m) => m.FeedModule),
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
