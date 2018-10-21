import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/interfaces/user.interface';
import { LocalStorageService } from '../shared/services/local.storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private router: Router, private userService: UserService, private localStorageService: LocalStorageService) {
    this.user = {
      email: '',
      password: ''
    }
   }

  ngOnInit() {
    if(this.localStorageService.getUserId()){
      this.redirectUserToDashboard();
    }
  }

  redirectUserToDashboard(){
    this.router.navigate(['dashboard']);
  }

  gotoSignup(){
    this.router.navigate(['signup']);
  }

  async login(){
    try {
      let response = await this.userService.userLogin(this.user);
      response = JSON.parse(response['_body']);
      console.log(response['message']);
      this.localStorageService.setItem('adminId', response['message']);
      this.redirectUserToDashboard();
    } catch (error) {
      console.log({error});
    }
  }
}
