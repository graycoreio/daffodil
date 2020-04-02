import { NgModule } from '@angular/core';
import { ApolloBoostModule, ApolloBoost } from 'apollo-angular-boost';
import { DaffProductShopifyDriverModule } from '@daffodil/product';
import { DaffCartInMemoryDriverModule } from '@daffodil/cart/testing';
import { DaffCheckoutInMemoryDriverModule } from '@daffodil/checkout/testing';
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/testing';

import { environment } from '../../../environments/environment';
import { ShopifyEnviromentDriverConfiguration } from '../../../environments/environment.interface';


@NgModule({
  imports: [
     //Shopify
     ApolloBoostModule,
     DaffProductShopifyDriverModule.forRoot(),
     DaffCartInMemoryDriverModule.forRoot(),
     DaffCheckoutInMemoryDriverModule.forRoot(),
     DaffNewsletterInMemoryDriverModule.forRoot()
  ]
})
export class DemoShopifyDriverModule { 
  driver: ShopifyEnviromentDriverConfiguration = (<ShopifyEnviromentDriverConfiguration>environment.driver);

  // Shopify
  constructor(boost: ApolloBoost) {
    boost.create({
      uri: this.driver.domain + '/api/graphql',
      request: async operation => {
        operation.setContext({
          headers: {
            'X-Shopify-Storefront-Access-Token': this.driver.publicAccessToken
          }
        });
      },
    })
  }
}
