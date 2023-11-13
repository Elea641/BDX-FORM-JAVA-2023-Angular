import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req.urlWithParams);
    const startTime = new Date().getTime();
    return next.handle(req).pipe(
      tap(() => {
        const endTime = new Date().getTime();
        const duration = endTime - startTime;
        console.log(`La requête a pris ${duration} millisecondes.`);
      })
    );
  }
}
