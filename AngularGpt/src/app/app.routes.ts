import { Routes } from '@angular/router';
import { DashboardLayout } from './presentation/layouts/dashboard-layout/dashboard-layout';

export const routes: Routes = [
    {
        path:'',
        component:DashboardLayout,
        children:[
            {   
                path:'ortography',
                loadComponent:()=> import('./presentation/pages/ortografi-page/ortografi-page'),
               
            },
        ]
    }
];
