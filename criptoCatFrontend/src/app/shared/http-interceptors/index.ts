import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorInterceptor } from "./error-interceptor";
import { ForceHttpsInterceptor } from "./force-https-interceptor";
import { HeaderInterceptor } from "./headers-interceptor";
import { LoggingInterceptor } from "./logging-interceptor";
import { NoopInterceptor } from "./noop-interceptors";
import { NotificationInterceptor } from "./notification-interceptor";
import { PreloaderInterceptor } from "./preloader-interceptor";

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: NotificationInterceptor, multi: true}
]
