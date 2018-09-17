import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../../login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let activate = false;
    if (this.loginService.isLoggedIn() && !this.loginService.isExpiredToken()) {
      const roles: any[] = this.loginService.getRoles();
        roles.forEach(element => {
        if (this.loginService.getUserRole().indexOf(element['authenticationId']) > 0
          && (element['flagAdminAccess'] === 'Y' || (element['flagReadAccess'] === 'Y' && element['flagWriteAccess'] === 'Y'))) {
          activate = true;
        }
      });

    }
    if (!activate) {
      this.router.navigateByUrl('/login');
    }

    return activate;
  }
}
