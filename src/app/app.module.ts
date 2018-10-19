import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { 
  MatDialogModule,
  MatTabsModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatTableModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatToolbarModule,
  MatTooltipModule,
 } from '@angular/material';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { UserComponent } from './user/user.component';
import { PerPageComponent } from './per-page/per-page.component';
import { EditableFieldComponent } from './editable-field/editable-field.component';
import { UserService } from './shared/services/user.service';
import { LocalStorageService } from './shared/services/local.storage.service';
import { CompanyComponent } from './main-dashboard/company/company.component';
import { NewCompanyComponent } from './main-dashboard/new-company/new-company.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MainDashboardComponent,
    UserComponent,
    PerPageComponent,
    EditableFieldComponent,
    CompanyComponent,
    NewCompanyComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatToolbarModule,
    MatTooltipModule,
    BootstrapModalModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot()
  ],
  providers: [
    UserService,
    LocalStorageService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
