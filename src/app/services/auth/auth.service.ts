import {Injectable} from '@angular/core';
import {ApiService} from '../api/api.service';
import {LoginDto} from '../../dtos/login/login.dto';
import {SignUpDto} from "../../dtos/sign-up/sign-up.dto";
import {Observable, tap} from 'rxjs';
import {TokenDto} from "../../dtos/token/token.dto";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signInEndpoint = '/api/auth/sign-in';
  private signUpEndpoint = '/api/auth/sign-up';
  private signOutEndpoint = '/api/auth/sign-out';

  constructor(
    private readonly apiService: ApiService,
    private readonly router: Router
  ) {
  }

  signIn(credentials: LoginDto): Observable<TokenDto> {
    return this.apiService.post(this.signInEndpoint, credentials)
      .pipe(tap((resposta) => {
        if (!resposta) return;
        localStorage.setItem('token', btoa(JSON.stringify(resposta)));
        void this.router.navigate(['']);
      }));
  }

  signUp(user: SignUpDto): Observable<TokenDto> {
    return this.apiService.post(this.signUpEndpoint, user)
      .pipe(tap((resposta) => {
        if (!resposta) return;
        localStorage.setItem('token', btoa(JSON.stringify(resposta)));
        void this.router.navigate(['']);
      }));
  }

  signOut(): Observable<TokenDto> {
    return this.apiService.post(this.signOutEndpoint, {}).pipe(tap(() => {
      localStorage.clear();
      void this.router.navigate(['login']);
    }));
  }

  get getUserToken(): string {
    return localStorage.getItem('token')
      ? JSON.parse(atob(localStorage.getItem('token')!))
      : null;
  }

  get isLogged(): boolean {
    return !!localStorage.getItem('token');
  }
}
