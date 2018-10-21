import { Component, OnInit  } from '@angular/core';
import { PerPageComponent } from '../../per-page/per-page.component';
import { ObjectsTable } from '../../object-table';
import { CompanyInterface } from '../../shared/interfaces/company.interface';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NewCompanyComponent } from '../new-company/new-company.component';
import { Router } from '@angular/router';
import { CompanyService } from '../../shared/services/company.service';
import { LocalStorageService } from '../../shared/services/local.storage.service';
import * as moment from'moment';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent extends ObjectsTable<CompanyInterface> {

  constructor(private router: Router, private companyService: CompanyService, private localStorageService: LocalStorageService) { 
    super();
  }

  async ngOnInit() {
    await this.update();
  }

  async getCompanies(){
    try{
      let responseOfCompany = await this.companyService.getCompanies(this.localStorageService.getUserId());
      if(responseOfCompany['status'] != 200){
        throw responseOfCompany;
      }
      let companies = JSON.parse(responseOfCompany['_body'])['message'];
      companies = await Promise.all(companies.map(async (company): Promise<CompanyInterface>=>{
        return {id: company[0], adminId: company[1], name: company[2], date: moment(company[3]).format('YYYY-MMM-DD')};
      }));
      this.objects = companies;
    }catch(error){
      console.log(error);
    }
  }

  openModalForCompanyCreation(){
    this.router.navigate(['/dashboard/company']);
  }

  bindDialogCloseEvent(dialogRef: any) {
    dialogRef.afterClosed().subscribe(() => {
      this.removeSelectedObjectsDisabled = false;
      this.update();
    });
  }

  async update(){
    await this.getCompanies();    
  }

  async updateNameOfCompany(value, company: CompanyInterface){
    try{
      console.log(value, company.id);
      await this.companyService.updateCompany(value, company.id);
      this.update();
    }catch(error){
      console.log(error);
    }
  }
}
