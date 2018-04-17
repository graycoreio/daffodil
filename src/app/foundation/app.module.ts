import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';
import { ProductModule } from './product/product.module';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockModule } from '@core/mock/mock.module';

import { ProductTestingService } from '@core/product/testing/services/product.testing.service';
import { environment } from 'environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    environment.useMocks ? MockModule : [],

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    
    AppRoutingModule,

    CoreModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class FoundationModule { }
