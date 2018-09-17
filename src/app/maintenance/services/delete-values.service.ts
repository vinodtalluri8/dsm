import { Injectable } from '@angular/core';
import { appConstants } from '../../core/constants/appConstants';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {BaseServiceService} from './base-service.service';

@Injectable()
export class DeleteValuesService extends BaseServiceService {

  // private serverURL = this.serverUrl + 'DIVA-SystemMaintService/deleteDivaSystemValueDetails/';
  private serverURL = this.serverUrl + this.systemMaintServiceUrl + 'deleteDivaSystemValueDetails/';

  constructor(private httpClient: HttpClient) {
    super();
   }

    /* This method will get the data of department dropdown based on the group selected by passing the
    application name and the system code as input parameters*/
    deleteValue(value) {
      console.log(value);
      appConstants.deleteHeaderOptions.params = new HttpParams();
    return this.httpClient.delete(this.serverURL + value, appConstants.deleteHeaderOptions).catch(this.handleError);
  }
}

