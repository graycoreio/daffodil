import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

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
import { TemplateModule } from './core/template/template.module';

import { getDriverVariant } from './helper/driver-variant';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    NxModule.forRoot(),

    HttpClientModule,

    getDriverVariant(environment.driver),
    
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
    CheckoutModule,
    TemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class FoundationModule {}