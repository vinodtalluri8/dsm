import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router, private loginService: LoginService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req && req.body && ((typeof req.body === 'string' && req.body.split('username') && req.body.split('username').length > 1)
            || (typeof req.body === 'object' && req.body.resourceId))) {
            return next.handle(req)
                .do(
                    succ => { },
                    err => {
                        if (err.status === 401) {
                            this.router.navigateByUrl('/login');
                        }
                    }
                );
        } else if (this.loginService.isLoggedIn() && !this.loginService.isExpiredToken()) {
            const user = JSON.parse(this.loginService.getToken());
            const clonedreq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + user.access_token)
            });
            // const clonedreq = req.clone()
            return next.handle(clonedreq)
                .do(
                    succ => { },
                    error => {
                        if (error.status === 401) {
                            this.router.navigateByUrl('/login');
                        }
                    }
                );
        } else {
            this.router.navigateByUrl('/login');
        }
    }
}
