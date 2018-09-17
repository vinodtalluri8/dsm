import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, JsonpClientBackend } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { appConstants } from '../../core/constants/appConstants';
import { Observable } from 'rxjs/Observable';
import {BaseServiceService} from './base-service.service';

@Injectable()
export class UpdatesystemvalueService extends BaseServiceService {
  private serverURL;

  constructor(private httpClient: HttpClient) {
    super();
  }

  updateSystemValue(data: JSON) {
    // this.serverURL = this.serverUrl + 'DIVA-SystemMaintService/updateDivaSystemValueDetails';
    this.serverURL = this.serverUrl + this.systemMaintServiceUrl + 'updateDivaSystemValueDetails';
    return this.httpClient.put(this.serverURL, data, appConstants.putHeaderOptions).map((results) => {
      return results;
    }).catch(this.handleError);
  }

  /* This method will be used to get label name which is dynamic*/

  getSystemValueRecord(valueId, subType) {
    this.serverURL = this.serverUrl + this.systemMaintServiceUrl + 'displayDivaSystemValueDetails';
    appConstants.getHeaderOptions.params = new HttpParams().set('valueId', valueId).set('systemValueType', subType);
    return this.httpClient
      .get(this.serverURL, appConstants.getHeaderOptions).map((data) => {
        return data;
      }).catch(this.handleError);
  }

}
