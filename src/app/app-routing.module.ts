import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {authenticatedGuard} from "./guards/authenticated/authenticated.guard";
import {unauthenticatedGuard} from "./guards/unauthenticated/unauthenticated.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canActivate: [authenticatedGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    canActivate: [unauthenticatedGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
