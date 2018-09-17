import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { appConstants } from '../../core/constants/appConstants';
import { SelectItem } from 'primeng/api';
import {BaseServiceService} from './base-service.service';

@Injectable()
export class ApplicationService extends BaseServiceService {
  // private serverURL = this.serverUrl + 'DIVA-SystemMaintService/applicationList';
  private serverURL = this.serverUrl + this.systemMaintServiceUrl + 'applicationList';
  constructor(private httpClient: HttpClient) {
    super();
   }
  getApplication() {
    appConstants.getHeaderOptions.params = {};
    return this.httpClient
      .get(this.serverURL, appConstants.getHeaderOptions).map((applications: SelectItem[]) => {
        const applicationList = [];
        for (const application of applications) {
          applicationList.push({ 'label': application['value'], 'value': application['id'] });
        }
        return applicationList;
      }).catch(this.handleError);
  }

}
