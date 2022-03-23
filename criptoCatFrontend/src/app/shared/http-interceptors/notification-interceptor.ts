import { Injectable } from "@angular/core";
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable } from "rxjs";
import { tap } from 'rxjs/operators'
import { ToastrService } from "ngx-toastr";
import { environment } from "src/environments/environment";

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("NotificationInterceptor se ejecutó");
    return next.handle(req).pipe(
      tap((event:HttpEvent<any> | HttpResponse<any>) => {
        console.log(event);
        
        if (event instanceof HttpRequest && event.url.includes(environment.api)) {
          console.log("paso por esta condición");
          return
        }

        if (event.type === 0) {
          return
        }
        if (event instanceof HttpResponse && event.body === null || undefined) {
          this.toastr.error('Email o contraseña incorrecta');          
        } else if(event instanceof HttpResponse && event.status === 200 || 204) { //tiene que estar event.status == 200;
          this.toastr.success('La solicitud se completó con éxito');
        }
      })
    );
  }
}