import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { ApolloBoostModule, ApolloBoost } from 'apollo-angular-boost';
import { DaffShopifyDriverModule } from '@daffodil/driver/shopify';

@NgModule({
  imports: [
    //Shopify
    ApolloBoostModule,
    DaffShopifyDriverModule.forRoot({
      BASE_URL: environment.API_BASE
    })
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