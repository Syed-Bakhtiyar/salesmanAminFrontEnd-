import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { CompanyInterface } from '../interfaces/company.interface';
import { BASE_URL } from '../../domain';
import { getRequestOptions } from './headers';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: Http) { }

  createCompany(company: CompanyInterface){
    const companyBody = `name=${company.name}&adminId=${company.adminId}`;
    return this.http.post(`${BASE_URL}admin/company`, companyBody, getRequestOptions()).toPromise();
  }

  getCompanies(adminId): Promise<any>{
    return this.http.get(`${BASE_URL}admin/${adminId}/company`).toPromise();
  }

  updateCompany(companyName: string, companyId: number){
    const companyBody = `name=${companyName}`;
    return this.http.post(`${BASE_URL}admin/company/${companyId}/action`, companyBody, getRequestOptions()).toPromise();
  }
}
