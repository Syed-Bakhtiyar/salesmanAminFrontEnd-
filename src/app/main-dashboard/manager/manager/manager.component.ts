import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';
import { roles } from '../../../common';
import { UserService } from '../../../shared/services/user.service';
import { ObjectsTable } from '../../../object-table';
import { User } from '../../../shared/interfaces/user.interface';
import { LocalStorageService } from '../../../shared/services/local.storage.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent extends ObjectsTable<User> {

  constructor(private router: Router,
              private dataService: DataService,
              private userService: UserService,
              private localStorageService: LocalStorageService) {
                super();

  }

  async ngOnInit() {
    await this.update();
  }

  async update(){
    await this.getManagers();
  }

  async getManagers(){
    try{
      let responseOfManager = await this.userService.getManagers(this.localStorageService.getUserId());
      if(responseOfManager['status'] != 200){
        throw responseOfManager;
      }
      let managers = JSON.parse(responseOfManager['_body'])['message'];
      console.log(managers);
      managers = await Promise.all(managers.map(async (manager): Promise<User>=>{
        return {id: manager[0], firstName: manager[4], lastName: manager[5], email: manager[6]};
      }));
      this.objects = managers;
      console.log('');
    }catch(error){
      console.log(error);
    }
  }

  openModalForManagerCreation(){
    this.dataService.setRole(roles.MANAGER);
    this.router.navigate(['/dashboard/user/new-manager']);
  }
}
