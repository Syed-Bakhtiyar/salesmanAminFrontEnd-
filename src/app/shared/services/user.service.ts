import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Http} from '@angular/http';
import { BASE_URL } from '../../domain';
import { getRequestOptions } from './headers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  createUser(user: User){
    const userBody = `first_name=${user.firstName}&last_name=${user.lastName}&email=${user.email}&password=${user.password}`;
    return this.http.post(`${BASE_URL}admin`, userBody, getRequestOptions()).toPromise();
  }

  userLogin(user: User){
    const userBody = `email=${user.email}&password=${user.password}`;
    return this.http.post(`${BASE_URL}admin/auth`, userBody, getRequestOptions()).toPromise();
  }

  createManager(user: User){
    const userBody = `first_name=${user.firstName}&last_name=${user.lastName}&email=${user.email}&password=${user.password}`;
    return this.http.post(`${BASE_URL}admin/${user.adminId}/manager`, userBody, getRequestOptions()).toPromise();
  }

  createAreaManager(user: User){
    const userBody = `first_name=${user.firstName}&last_name=${user.lastName}&email=${user.email}&password=${user.password}`;
    return this.http.post(`${BASE_URL}admin/${user.adminId}/area-manager`, userBody, getRequestOptions()).toPromise();
  }

  createMerchandiser(user: User){
    const userBody = `first_name=${user.firstName}&last_name=${user.lastName}&email=${user.email}&password=${user.password}`;
    return this.http.post(`${BASE_URL}admin/${user.adminId}/merchandiser`, userBody, getRequestOptions()).toPromise();
  }

  getManagers(adminId: string){
    return this.http.get(`${BASE_URL}admin/${adminId}/manager`).toPromise();
  }

  getAreaManagers(adminId: string){
    return this.http.get(`${BASE_URL}admin/${adminId}/area-manager`).toPromise();
  }

  getMerchandisers(adminId: string){
    return this.http.get(`${BASE_URL}admin/${adminId}/merchandisers`).toPromise();
  }

}
