import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';

import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  {
    path: 'register',
    component: RegisterComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'movie/:id', component: MovieComponent, pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
