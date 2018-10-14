import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key, value){
    localStorage.setItem(key, value)
  }

  getItem(key){
    return localStorage.getItem(key)
  }

  getUserId(){
    return localStorage.getItem('userId');
  }
}