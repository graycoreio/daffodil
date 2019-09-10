import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DesignLandAppRoutingModule } from './app-routing.module';

import { DesignLandAppComponent } from './app.component';

import {
  DaffSidebarModule,
  DaffLinkSetModule
 } from '@daffodil/design';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DesignLandAppRoutingModule,

    DaffSidebarModule,
    DaffLinkSetModule
  ],
  declarations: [
    DesignLandAppComponent,
  ],
  providers: [],
  bootstrap: [
    DesignLandAppComponent
  ]
})
export class AppModule { }
