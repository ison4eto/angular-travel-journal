import {
    HttpHandler,
    HttpEvent,
    HttpRequest,
    HttpInterceptor
} from '@angular/common/http'
import { Injectable } from '../../../../node_modules/@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService){
    }
    intercept(req: HttpRequest<any>, next: HttpHandler)
        : Observable<HttpEvent<any>> {
            const token = this.authService.getToken()
            if(token){
                req = req.clone({
                    url: `${req.url}?auth=${token}`
                })
            }
            return next.handle(req)
    }
}