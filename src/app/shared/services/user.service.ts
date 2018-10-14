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

}
