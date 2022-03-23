import { Injectable, Injector } from "@angular/core";
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable, of, tap } from "rxjs";
import { CacheService } from "../services/cache.service";

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("CacheInterceptor se ejecutó");
    const cache = this.injector.get(CacheService);
    if(req.method !== 'GET') {
      console.log('No es un GET')
      return next.handle(req);
    }

    const cachedResponse = cache.get(req.url);
    if(cachedResponse) {
      console.log("Retornó desde la caché")
      return of(cachedResponse);
    }
    return next.handle(req).pipe(
      tap(event => {
        if(event instanceof HttpResponse) {
          console.log("No estaba en caché, ahora lo guardamos.")
          cache.set(req.url, event)
        }
      })
    )
  }
}