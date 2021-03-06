import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { appConstants } from '../../core/constants/appConstants';
import { SelectItem } from 'primeng/api';
import {BaseServiceService} from './base-service.service';

@Injectable()
export class DepartmentsService extends BaseServiceService {
  // private serverURL = this.serverUrl + 'DIVA-SystemMaintService/userDeptList';
  private serverURL = this.serverUrl + this.systemMaintServiceUrl + 'userDeptList';

  constructor(private httpclient: HttpClient) {
    super();
  }
 /* This method will get the data of departments dropdown */
 getDepartments() {
  return this.httpclient
    .get(this.serverURL, appConstants.getHeaderOptions).map((departments: SelectItem[]) => {
      const departmentList = [];
      console.log('inside department');
      for (const department of departments) {
        departmentList.push({ 'label': department['id'], 'value': department['value'] });
      }
      console.log(departmentList);
      return departmentList;
    }).catch(this.handleError);
  }
}
