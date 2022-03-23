import { Injectable } from "@angular/core";
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';

import { catchError, Observable, throwError } from "rxjs";
import { retry } from 'rxjs/operators';
import { ToastrService } from "ngx-toastr";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("ErrorInterceptor se ejecutó");
    return next.handle(req).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        if(error.status !== 401) {
          this.toastr.error(error.message)
        }
        return throwError(error)
      })
    )
  }
}