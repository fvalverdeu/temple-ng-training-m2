import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    return next.handle(request)
      .pipe(
        catchError( (error: HttpErrorResponse) => {
          if (error.status === 401) {
            console.log('Error 404 interceptado!!');
          } else if (error.status === 403) {

          }
          return throwError(error);
        })
      );
  }
}
