import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { ApolloBoostModule, ApolloBoost } from "apollo-angular-boost";

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DaffInMemoryDriverModule, DaffInMemoryService } from '@daffodil/driver/in-memory';
import { DaffShopifyDriverModule } from '@daffodil/driver/shopify';

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

    //In-memory
    // HttpClientInMemoryWebApiModule.forRoot(DaffInMemoryService),
    // DaffInMemoryDriverModule.forRoot({
    //   BASE_URL: environment.API_BASE
    // })

    //Shopify
    ApolloBoostModule,
    DaffShopifyDriverModule.forRoot({
      BASE_URL: environment.API_BASE
    }),

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
export class FoundationModule {
  // Shopify
  constructor(boost: ApolloBoost) {
    boost.create({
      uri: "https://daffodil-demo-alpha.myshopify.com/api/graphql",
      request: async operation => {
        operation.setContext({
          headers: {
            "X-Shopify-Storefront-Access-Token": "9419ecdd446b983348bc3b47dccc8b84"
          }
        });
      },
    })
  }
}