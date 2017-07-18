
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MenubarModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import {HomeComponent} from './pages/home/home.component';
import {RoutingModule} from './app.routes';
import {IdahoComponent} from './pages/bcs/idaho/idaho.component';
import {UtahComponent} from './pages/bcs/utah/utah.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IdahoComponent,
    UtahComponent
  ],
  imports: [
    BrowserModule, 
    MenubarModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }


