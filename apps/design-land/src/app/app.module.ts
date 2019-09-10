import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DesignLandAppRoutingModule } from './app-routing.module';

import { DesignLandAppComponent } from './app.component';
import { DaffSidebarModule, DaffListModule } from '@daffodil/design';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    DaffSidebarModule,
    DaffListModule,
    DesignLandAppRoutingModule,
  ],
  declarations: [
    DesignLandAppComponent,
  ],
  providers: [],
  bootstrap: [DesignLandAppComponent]
})
export class AppModule { }
