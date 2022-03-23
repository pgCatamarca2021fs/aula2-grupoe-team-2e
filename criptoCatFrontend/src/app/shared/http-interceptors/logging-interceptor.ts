import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    let ok: string;

    return next.handle(req)
      .pipe(
        tap({
          next: (event) => (ok = event instanceof HttpResponse ? 'succeeded': ''),
          error: (error) => (ok = 'failed')
        }),
        finalize(() => {
          const ellapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}" 
          ${ok} ${ellapsed} ms
          `
          console.log("Respuesta recibida")
          console.log(msg)
        })
      )
  }
  
}