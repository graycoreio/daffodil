import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { HttpInMemoryWebApiModule, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DaffInMemoryDriverModule, DaffInMemoryService } from '@daffodil/driver/in-memory';

import { environment } from '../environments/environment';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NxModule } from '@nrwl/nx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ProductModule } from './product/product.module';

import { CartModule } from './cart/cart.module';
import { MiscModule } from './misc/misc.module';
import { CheckoutModule } from './checkout/checkout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),

    HttpClientModule,
    environment.useMocks ? HttpClientInMemoryWebApiModule.forRoot(DaffInMemoryService) : [],
    environment.useMocks ? DaffInMemoryDriverModule.forRoot({
      BASE_URL: environment.API_BASE
    }) : [],

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    
    AppRoutingModule,

    ProductModule,
    CartModule,
    MiscModule,
    CheckoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class FoundationModule { }