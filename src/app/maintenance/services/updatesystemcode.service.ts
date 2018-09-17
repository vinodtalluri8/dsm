import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, JsonpClientBackend } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { appConstants } from '../../core/constants/appConstants';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs/Observable';
import {BaseServiceService} from './base-service.service';

@Injectable()
export class UpdatesystemcodeService extends BaseServiceService {
  // private serverURL = this.serverUrl + 'DIVA-SystemMaintService/getSystemCode';
  // private serverUrlUpdate = this.serverUrl + 'DIVA-SystemMaintService/updateSystemCode';
  private serverURL = this.serverUrl + this.systemMaintServiceUrl + 'getSystemCode';
  private serverUrlUpdate = this.serverUrl + this.systemMaintServiceUrl + 'updateSystemCode';

  constructor(private httpClient: HttpClient) {
    super();
  }

  /* This method will be used to get data for the update screen
  * based on system code type selected*/

  getUpdateSystemCodeData(value) {
    return this.httpClient
      .get(this.serverURL + '/' + value, appConstants.getHeaderOptions).map((dataList: JSON[]) => {
        return dataList;
      }).catch(this.handleError);
  }
  updateSystemValueData(data: JSON) {
    return this.httpClient.put(this.serverUrlUpdate , data, appConstants.putHeaderOptions).map((results) => {
      return results;
    }).catch(this.handleError);
  }

}
