import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  role: string;
  constructor() { }

  setRole(role) {
    this.role = role;
  }

  getRole() {
    return this.role;
  }
}
