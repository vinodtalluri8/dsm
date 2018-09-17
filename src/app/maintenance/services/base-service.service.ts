import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { HttpClient, HttpHeaders, HttpParams, JsonpClientBackend } from '@angular/common/http';
import { Config } from '../../../environments/config';
@Injectable()
export class BaseServiceService {

  serverUrl: string;
  systemMaintServiceUrl: string;
  commonServiceURL: string;
  constructor() {
    this.serverUrl = Config.getEnvironmentVariable('serverUrl');
    this.systemMaintServiceUrl = Config.getEnvironmentVariable('systemMaintServiceUrl');
    this.commonServiceURL = Config.getEnvironmentVariable('commonServiceURL');
  }
  /** This method will handle the error for add system code screen**/
  handleError(error: any) {
    let errMsg = (error.error.message) ? (error.error.message) : error.message ? error.message : error.status ?
      `${error.status} - ${error.statusText}` : 'Server error';
    if (errMsg.length) {
      errMsg = errMsg.toString();
    }
    return Observable.throw(errMsg);
  }
}
