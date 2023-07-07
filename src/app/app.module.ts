import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeModule} from "./pages/home/home.module";
import {LoginModule} from "./pages/login/login.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {ErrorInterceptor} from "./interceptors/error/error.interceptor";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {JwtModule} from "@auth0/angular-jwt";

export function tokenGetter() {
  if (!localStorage.getItem('token')) {
    return null
  }

  return JSON.parse(atob(localStorage.getItem('token')!))?.access_token || null;
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoginModule,
    HomeModule,
    MatCardModule,
    MatSnackBarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:3000'],
        disallowedRoutes: ['/api/auth/sign-in'],
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
