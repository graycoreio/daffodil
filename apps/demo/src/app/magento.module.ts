import { NgModule } from '@angular/core';

import { ApolloBoostModule, ApolloBoost } from 'apollo-angular-boost';
import { DaffProductMagentoDriverModule } from '@daffodil/product';
import { DaffCartInMemoryDriverModule } from '@daffodil/cart/testing';
import { DaffCheckoutInMemoryDriverModule } from '@daffodil/checkout/testing';

@NgModule({
  imports: [
    //Magento
    ApolloBoostModule,
    DaffProductMagentoDriverModule.forRoot(),
    DaffCartInMemoryDriverModule.forRoot(),
    DaffCheckoutInMemoryDriverModule.forRoot()
  ]
})
export class MagentoModule {
  // Magento
  constructor(boost: ApolloBoost) {
    boost.create({
      uri: "https://release-dev-231-npzdaky-zddsyhrdimyra.us-4.magentosite.cloud/graphql",
      request: async operation => {
        operation.setContext({
          headers: {
            // "X-Magento-Storefront-Access-Token": "9419ecdd446b983348bc3b47dccc8b84"
          }
        });
      },
    })
  }
}