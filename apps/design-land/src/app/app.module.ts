import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DesignLandAppRoutingModule } from './app-routing.module';

import { DesignLandAppComponent } from './app.component';
import { DaffSidebarModule } from '@daffodil/design';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    DaffSidebarModule,
    DesignLandAppRoutingModule
  ],
  declarations: [
    DesignLandAppComponent
  ],
  providers: [],
  bootstrap: [DesignLandAppComponent]
})
export class AppModule { }
