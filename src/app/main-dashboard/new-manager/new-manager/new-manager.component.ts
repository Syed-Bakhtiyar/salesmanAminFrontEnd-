import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { User } from '../../../shared/interfaces/user.interface';
import { LocalStorageService } from '../../../shared/services/local.storage.service';
import { UserService } from '../../../shared/services/user.service';
import { SweetAlertModalService } from '../../../shared/services/sweet-alert-modal.service';
import { DataService } from '../../../shared/services/data.service';
import { roles } from '../../../common';

@Component({
  selector: 'app-new-manager',
  templateUrl: './new-manager.component.html',
  styleUrls: ['./new-manager.component.css']
})
export class NewManagerComponent implements OnInit {

  manager: User;

  constructor(private _location: Location,
    private localStorageService: LocalStorageService,
    private userService: UserService,
    private sweetAlertService: SweetAlertModalService,
    private dataService: DataService) {
    this.manager = {
      adminId: localStorageService.getUserId(),
      firstName: '',
      lastName: '',
      email: '',
      password:''
    }
  }

  ngOnInit() {
  }

  async createUser(){
    switch (this.dataService.getRole()) {
      case roles.MANAGER:
        await this.createManager();        
        break;
      case roles.AREA_MANAGER:
        await this.createAreaManager();
        break;
      case roles.MERCHANDISER:
        await this.createMerchandiser();
        break;

      default:
        break;
    }
  }

  async createManager(){
    try {
     const manager = await this.userService.createManager(this.manager);
     console.log(manager);
     this.sweetAlertService.showDialog('Manager', 'Manager Created Successfully', 'success');
     setTimeout(() => {
       this._location.back();
     }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

  async createAreaManager(){
    try {
     const manager = await this.userService.createAreaManager(this.manager);
     console.log(manager);
     this.sweetAlertService.showDialog('Area Manager', 'Area Manager Created Successfully', 'success');
     setTimeout(() => {
       this._location.back();
     }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

  async createMerchandiser(){
    try {
     const manager = await this.userService.createMerchandiser(this.manager);
     console.log(manager);
     this.sweetAlertService.showDialog('Merchandiser', 'Merchandiser Created Successfully', 'success');
     setTimeout(() => {
       this._location.back();
     }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

}
