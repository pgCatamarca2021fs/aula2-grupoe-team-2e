import { Injector, Injectable } from "@angular/core";
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { delay, finalize, Observable } from "rxjs";
import { LoaderService } from "../services/loader.service";

@Injectable()
export class PreloaderInterceptor implements HttpInterceptor {
  constructor(private injector: Injector ) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loaderService = this.injector.get(LoaderService);
    loaderService.show();
    console.log("Preloader interceptor se ejecutó");
    return next.handle(req).pipe(
      // delay(5000),
      finalize(() => loaderService.hide())
    );
  }
}