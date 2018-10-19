import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { CompanyComponent } from './main-dashboard/company/company.component';
import { NewCompanyComponent } from './main-dashboard/new-company/new-company.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'dashboard',
        component: MainDashboardComponent,
        children: [
            {path: '', component: CompanyComponent},
            {path: 'company', component: NewCompanyComponent}
        ]
    }
];