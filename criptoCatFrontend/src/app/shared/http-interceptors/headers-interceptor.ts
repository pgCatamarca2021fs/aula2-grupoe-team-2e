import { Injectable } from "@angular/core";
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from "rxjs";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("HeaderInterceptor se ejecutó");
    const modified = req.clone({
      setHeaders: { "X-Man": "Wolwerine" }
    });
    return next.handle(modified);
  }
}