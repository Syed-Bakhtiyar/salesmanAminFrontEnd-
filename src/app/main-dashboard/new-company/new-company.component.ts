import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CompanyInterface } from '../../shared/interfaces/company.interface';
import { LocalStorageService } from '../../shared/services/local.storage.service';
import { CompanyService } from '../../shared/services/company.service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {

  company: CompanyInterface;
  constructor(private localStorageService: LocalStorageService, private companyService: CompanyService) { 
    this.company = {
      adminId: Number(localStorageService.getUserId()),
      name: ''
    };
  }

  ngOnInit() {
  }

  async createCompany(){
    try {
      const company = await this.companyService.createCompany(this.company);
    } catch (error) {
      console.log(error);
    }
  }
}
