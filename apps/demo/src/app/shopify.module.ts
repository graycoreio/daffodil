import { NgModule } from '@angular/core';

import { ApolloBoostModule, ApolloBoost } from 'apollo-angular-boost';
import { DaffProductShopifyDriverModule } from '@daffodil/product';
import { DaffCartInMemoryDriverModule } from '@daffodil/cart/testing';
import { DaffCheckoutInMemoryDriverModule } from '@daffodil/checkout/testing';

@NgModule({
  imports: [
    //Shopify
    ApolloBoostModule,
    DaffProductShopifyDriverModule.forRoot(),
    DaffCartInMemoryDriverModule.forRoot(),
    DaffCheckoutInMemoryDriverModule.forRoot()
  ]
})
export class ShopifyModule {
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