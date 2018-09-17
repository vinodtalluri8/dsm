import { Injectable, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import { BaseServiceService } from '../maintenance/services/base-service.service';
import { appConstants } from '../core/constants/appConstants';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
import { NavbarComponent } from '../core/navbar/navbar.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginService extends BaseServiceService {
  navbar: NavbarComponent;
  public displayName = new BehaviorSubject('');
  role: JSON[];
  constructor(private httpClient: HttpClient, private router: Router) {
    super();
  }
  /** This method will POST the data of add system code screen to backend **/
  obtainAccessToken(loginData) {
    const params = new URLSearchParams();
    params.append('username', loginData.username);
    params.append('password', loginData.pass);
    params.append('grant_type', 'password');
    params.append('client_id', 'diva-app');
    const serverURL = this.serverUrl + 'spring-security-oauth-server/oauth/token';
    return this.httpClient.post(serverURL, params.toString(), appConstants.loginPost).map((user: JSON) => {
      console.log('authentication', user);
      user['timestamp'] = Date.now();
      localStorage.setItem('user', JSON.stringify(user));
      this.getDisplayName();
    }).catch(this.handleError);
  }

  getToken() {
    return localStorage.getItem('user');
  }
  private getDisplayName() {
    this.obtainUserInformation().subscribe(user => {
      this.setDisplayName(user['fullName']);
      this.router.navigateByUrl('/systemcodes');
    });
  }
  isLoggedIn() {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }
  isExpiredToken() {
    let tokenExpired = true;
    const user = JSON.parse(this.getToken());
    if (user && user['timestamp']) {
      const expire = user['expires_in'] * 1000;
      const expireTimestamp = Date.now() - user['timestamp'];
      if (expireTimestamp <= expire) {
        tokenExpired = false;
      }
    }
    return tokenExpired;

  }
  public getUserRole() {
    let roles = JSON.parse(this.getToken()).usergroups;
    roles = roles ? roles.split(',') : [];
    return roles;
  }

  public getUser() {
    return JSON.parse(this.getToken()) ? JSON.parse(this.getToken()).userlogin : '';
  }

  public getAccessToken() {
    return JSON.parse(this.getToken()).access_token;
  }

  loadRoles() {
    this.getRetirevedRoles().subscribe((userroles: JSON[]) => {
      this.role = userroles;
    });
  }
  obtainUserInformation() {
    const login = {
      'loginId': this.getUser()
    };
    const serverURL = this.serverUrl + this.commonServiceURL + 'getUserDetails';
    return this.httpClient.post(serverURL, login, appConstants.postHeaderOptions).map((user: JSON) => {
      return user;
    }).catch(this.handleError);
  }

  setDisplayName(displayName) {
    this.displayName.next(displayName);
  }

  private getRetirevedRoles() {
    const serverURL = this.serverUrl + this.commonServiceURL + 'getAuthorize';
    const inputJson = {
      'resourceId' : 'SYSTEM_MAINTENANCE'
    };
    return this.httpClient.post(serverURL, inputJson, appConstants.postHeaderOptions).map((roles: JSON) => {
      return roles;
    }).catch(this.handleError);
  }
  getRoles() {
    return this.role ? this.role : [];
  }
}
