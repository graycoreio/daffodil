import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DaffodilModule } from '@daffodil/daffodil.module';
import { ProductModule } from './product/product.module';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockModule } from '@daffodil/mock/mock.module';

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

    DaffodilModule.forRoot({BASE_URL: environment.API_BASE}),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class FoundationModule { }
