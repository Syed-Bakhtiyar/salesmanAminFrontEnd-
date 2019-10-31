import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';
import { roles } from '../../../common';
import { ObjectsTable } from '../../../object-table';
import { User } from '../../../shared/interfaces/user.interface';
import { UserService } from '../../../shared/services/user.service';
import { LocalStorageService } from '../../../shared/services/local.storage.service';

@Component({
  selector: 'app-area-manager',
  templateUrl: './area-manager.component.html',
  styleUrls: ['./area-manager.component.css']
})
export class AreaManagerComponent extends ObjectsTable<User> {

  constructor(private router: Router,
    private dataService: DataService,
    private userService: UserService,
    private localStorageService: LocalStorageService) {
      super();
    }

  async ngOnInit() {
    await this.update();
  }

  onChangeInput(event, object, property) {
    console.log(this.objects);
    // console.log({event});
    object[property] = event.target.value;
  }

  async update() {
    await this.getAreaManagers();
  }

  async getAreaManagers() {
    try {
      const responseOfAreaManager = await this.userService.getAreaManagers(this.localStorageService.getUserId());
      if (responseOfAreaManager['status'] !== 200) {
        throw responseOfAreaManager;
      }
      let areaManagers = JSON.parse(responseOfAreaManager['_body'])['message'];
      console.log(areaManagers);
      areaManagers = await Promise.all(areaManagers.map(async (areaManager): Promise<User> => {
        return {id: areaManager[0], firstName: areaManager[4], lastName: areaManager[5], email: areaManager[6]};
      }));
      this.objects = areaManagers;
    } catch (error) {
      console.log(error);
    }
  }

  openModalForAreaManagerCreation() {
    this.dataService.setRole(roles.AREA_MANAGER);
    this.router.navigate(['/dashboard/user/new-manager']);
  }
}
