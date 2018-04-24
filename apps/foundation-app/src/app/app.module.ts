import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NxModule } from '@nrwl/nx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ProductModule } from './product/product.module';

import { MockModule } from '@daffodil/mock/mock.module'
import { DaffodilModule } from '@daffodil/daffodil.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
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
