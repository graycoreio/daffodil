import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ProductModule } from './product/product.module';

import { CartModule } from './cart/cart.module';
import { CheckoutModule } from './checkout/checkout.module';

import { getDriverVariant } from './helper/driver-variant';
import { NotFoundModule } from './misc/not-found/not-found.module';
import { TemplateModule } from './core/template/template/template.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

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
    CheckoutModule,
    TemplateModule,
    NotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class FoundationModule {}