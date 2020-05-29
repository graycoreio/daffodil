import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DesignLandAppRoutingModule } from './app-routing.module';

import { DesignLandAppComponent } from './app.component';

import {
  DaffSidebarModule,
  DaffLinkSetModule,
  DaffArticleModule
 } from '@daffodil/design';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DesignLandAppRoutingModule,
    HttpClientModule,

    DaffSidebarModule,
    DaffLinkSetModule,
    DaffArticleModule
  ],
  declarations: [
    DesignLandAppComponent,
  ],
  bootstrap: [
    DesignLandAppComponent
  ]
})
export class AppModule { }
