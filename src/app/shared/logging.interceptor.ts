import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import  'rxjs/add/operator/do'
;
export class LoggingInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //do allows to execute any code that goes through observable without consuming it
        return next.handle(req).do(event => {
            console.log('Logging interceptor', event)
        })
    }
}