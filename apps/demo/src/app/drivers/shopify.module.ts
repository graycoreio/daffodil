import { NgModule } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';

import { DaffCartInMemoryDriverModule } from '@daffodil/cart/driver/in-memory';
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/driver/in-memory';
import { createApolloConfig } from '@daffodil/product/driver';
import { DaffProductShopifyDriverModule } from '@daffodil/product/driver/shopify';
import { shopifyDriverConfig } from '@daffodil/product/driver/shopify';

import { environment } from '../../environments/environment';
import { ShopifyEnviromentDriverConfiguration } from '../../environments/environment.interface';

const cache = new InMemoryCache();

@NgModule({
  imports: [
    //Shopify
    DaffProductShopifyDriverModule.forRoot(),
    DaffCartInMemoryDriverModule.forRoot(),
    DaffNewsletterInMemoryDriverModule.forRoot(),
  ],
})
export class DemoDriverModule {
  driver: ShopifyEnviromentDriverConfiguration = (<ShopifyEnviromentDriverConfiguration>environment.driver);

  constructor(private apollo: Apollo) {
    const shopifyConfig = shopifyDriverConfig(this.driver.domain, this.driver.publicAccessToken);

    // Create the Apollo client for Shopify with error handling already configured in createApolloConfig
    const shopifyApolloConfig = createApolloConfig(shopifyConfig);

    // createNamed is used in case other platforms need to be accomodated (e.g. Magento)
    apollo.createNamed('shopify', shopifyApolloConfig);
  }
}
