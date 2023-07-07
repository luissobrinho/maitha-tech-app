import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../../components/snack-bar/snack-bar.component";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private readonly snackBar: MatSnackBar,) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        let errorMessage = 'Ocorreu um erro. Por favor, tente novamente mais tarde.';

        if (error instanceof HttpErrorResponse) {
          if (error.error && error.error.message) {
            if (Array.isArray(error.error.message)) {
              const messagens = error.error.message.map((m: string) => `<li>${m}</li>`).join('');
              errorMessage = `<ul>${messagens}</ul>`;
            } else {
              errorMessage = error.error.message;
            }
          } else {
            errorMessage = `${error.status} - ${error.statusText}`;
          }
        }

        this.snackBar.openFromComponent(SnackBarComponent, {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          data: {
            errorMessage
          }
        });

        // Repassar o erro para o consumidor do observable
        return throwError(error);
      })
    );
  }
}
