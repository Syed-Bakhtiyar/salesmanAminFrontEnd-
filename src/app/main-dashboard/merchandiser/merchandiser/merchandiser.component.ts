import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';
import { roles } from '../../../common';
import { User } from '../../../shared/interfaces/user.interface';
import { ObjectsTable } from '../../../object-table';
import { UserService } from '../../../shared/services/user.service';
import { LocalStorageService } from '../../../shared/services/local.storage.service';

@Component({
  selector: 'app-merchandiser',
  templateUrl: './merchandiser.component.html',
  styleUrls: ['./merchandiser.component.css']
})
export class MerchandiserComponent extends ObjectsTable<User> {

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
      let responseOfManager = await this.userService.getMerchandisers(this.localStorageService.getUserId());
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

  openModalForMerchandiserCreation(){
    this.dataService.setRole(roles.MERCHANDISER);
    this.router.navigate(['/dashboard/user/new-manager']);
  }
}
