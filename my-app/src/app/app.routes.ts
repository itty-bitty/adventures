import {ModuleWithProviders} from '@angular/core';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {IdahoComponent} from './pages/bcs/idaho/idaho.component';
import {UtahComponent} from './pages/bcs/utah/utah.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'idaho',
        component: IdahoComponent
    },
    {
        path: 'utah',
        component: UtahComponent
    }

];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);