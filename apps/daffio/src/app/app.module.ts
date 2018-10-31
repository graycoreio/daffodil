import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DaffioHeaderModule } from './core/header/header.module';
import { StoreModule } from '@ngrx/store';
import { DaffioSidebarModule } from './core/sidebar/sidebar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DaffioHeaderModule,
    StoreModule.forRoot({}),
    DaffioSidebarModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
