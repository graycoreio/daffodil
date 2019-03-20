import { NgModule } from '@angular/core';

import { ApolloBoostModule, ApolloBoost } from 'apollo-angular-boost';
import { DaffProductShopifyDriverModule } from '@daffodil/product';

@NgModule({
  imports: [
    //Shopify
    ApolloBoostModule,
    DaffProductShopifyDriverModule.forRoot()
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