import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

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

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MainDashboardComponent,
    UserComponent,
    PerPageComponent,
    EditableFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
