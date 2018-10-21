import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { CompanyComponent } from './main-dashboard/company/company.component';
import { NewCompanyComponent } from './main-dashboard/new-company/new-company.component';
import { UserHolderComponent } from './main-dashboard/user-component/user-holder/user-holder.component';
import { ManagerComponent } from './main-dashboard/manager/manager/manager.component';
import { NewManagerComponent } from './main-dashboard/new-manager/new-manager/new-manager.component';
import { AreaManagerComponent } from './main-dashboard/area-manager/area-manager/area-manager.component';
import { NewAreaManagerComponent } from './main-dashboard/new-area-manager/new-area-manager/new-area-manager.component';
import { MerchandiserComponent } from './main-dashboard/merchandiser/merchandiser/merchandiser.component';
import { NewMerchandiserComponent } from './main-dashboard/new-merchandiser/new-merchandiser/new-merchandiser.component';

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
            {path: 'company', component: NewCompanyComponent},
            {
                path: 'user',
                component: UserHolderComponent,
                children: [
                    {path: '', component: ManagerComponent},
                    {path: 'new-manager', component: NewManagerComponent},
        
                    {path: 'area-manager', component: AreaManagerComponent},
                    {path: 'new-area-manager', component: NewAreaManagerComponent},
        
                    {path: 'merchandiser', component: MerchandiserComponent},
                    {path: 'new-merchandiser', component: NewMerchandiserComponent}
        
                ]
            }
        ]
    },
    
];