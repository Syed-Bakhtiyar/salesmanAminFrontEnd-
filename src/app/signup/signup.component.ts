import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interfaces/user.interface';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User;
  constructor(private userService: UserService) { 
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  ngOnInit() {
  }

  async createUser(){
    const response = await this.userService.createUser(this.user);
    console.log(response);
  }
}
