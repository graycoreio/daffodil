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
      uri: "https://magento2.test/graphql",
    })
  }
}