/* This service is used to save the data for add system code */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { appConstants } from '../../core/constants/appConstants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import {BaseServiceService} from './base-service.service';


@Injectable()
export class AddsystemcodeService  extends BaseServiceService {

  // private serverURL = this.serverUrl + 'DIVA-SystemMaintService/saveSystemCode';
  private serverURL = this.serverUrl + this.systemMaintServiceUrl + 'saveSystemCode';
  constructor(private httpClient: HttpClient) {
    super();
   }

  /** This method will POST the data of add system code screen to backend **/
  addSystemCodeVal(data: JSON) {
    appConstants.postHeaderOptions.params = new HttpParams();
    return this.httpClient.post(this.serverURL,
      data, appConstants.postHeaderOptions).map((systemcode) => {
        return systemcode['status'];
      }).catch(this.handleError);
  }
}
