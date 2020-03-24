import { NgModule } from '@angular/core';

import { ApolloBoostModule, ApolloBoost } from 'apollo-angular-boost';
import { DaffProductMagentoDriverModule } from '@daffodil/product';
import { DaffCheckoutInMemoryDriverModule } from '@daffodil/checkout/testing';
import { DaffNavigationMagentoDriverModule } from '@daffodil/navigation';
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/testing';
import { DaffCartMagentoDriverModule } from '@daffodil/cart';
import { DaffCategoryMagentoDriverModule } from '@daffodil/category';

@NgModule({
  imports: [
    //Magento
    ApolloBoostModule,
    DaffProductMagentoDriverModule.forRoot(),
    DaffCartMagentoDriverModule.forRoot(),
    DaffCheckoutInMemoryDriverModule.forRoot(),
    DaffNavigationMagentoDriverModule.forRoot(),
		DaffNewsletterInMemoryDriverModule.forRoot(),
		DaffCategoryMagentoDriverModule.forRoot()

  ]
})
export class MagentoModule {
  // Magento
  constructor(boost: ApolloBoost) {
    boost.create({
      uri: 'https://magento2.test/graphql',
    })
  }
}
