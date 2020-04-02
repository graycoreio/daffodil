import { NgModule } from '@angular/core';

import { ApolloBoostModule, ApolloBoost } from 'apollo-angular-boost';
import { DaffProductMagentoDriverModule } from '@daffodil/product';
import { DaffCheckoutInMemoryDriverModule } from '@daffodil/checkout/testing';
import { DaffNavigationMagentoDriverModule } from '@daffodil/navigation';
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/testing';
import { DaffCartMagentoDriverModule } from '@daffodil/cart';

import { environment } from '../../../environments/environment';
import { MagentoEnvironmentDriverConfiguration } from '../../../environments/environment.interface';

@NgModule({
  imports: [
    ApolloBoostModule,
    DaffProductMagentoDriverModule.forRoot(),
    DaffCartMagentoDriverModule.forRoot(),
    DaffCheckoutInMemoryDriverModule.forRoot(),
    DaffNavigationMagentoDriverModule.forRoot(),
    DaffNewsletterInMemoryDriverModule.forRoot()
  ]
})
export class DemoMagentoDriverModule { 
  // Magento
  constructor(boost: ApolloBoost) {
    boost.create({
      uri: (<MagentoEnvironmentDriverConfiguration>environment.driver).domain + '/graphql',
    })
  }
}
