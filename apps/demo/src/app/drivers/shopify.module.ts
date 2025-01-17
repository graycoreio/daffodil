import { NgModule } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import {
  Apollo,
  provideApollo,
} from 'apollo-angular';


import { DaffCartInMemoryDriverModule } from '@daffodil/cart/driver/in-memory';
import { DaffInMemoryDriverModule } from '@daffodil/driver/in-memory';
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/driver/in-memory';
import { createApolloConfig } from '@daffodil/product/driver';
import { DaffProductShopifyDriverModule } from '@daffodil/product/driver/shopify';
import { shopifyDriverConfig } from '@daffodil/product/driver/shopify';
import {
  DaffNavigationInMemoryDriverModule,
  DAFF_NAVIGATION_IN_MEMORY_SEED_DATA_PROVIDER,
} from '@daffodil/navigation/driver/in-memory';
import { DaffCategoryInMemoryDriverModule } from '@daffodil/category/driver/in-memory';

import { DaffAuthorizeNetInMemoryDriverModule } from '@daffodil/authorizenet/driver/in-memory';
import {
  DaffDefaultProductFactory,
  provideDaffProductExtraFactoryTypes,
} from '@daffodil/product/testing';


import { environment } from '../../environments/environment';
import { ShopifyEnviromentDriverConfiguration } from '../../environments/environment.interface';

const cache = new InMemoryCache();

@NgModule({
  imports: [
    DaffInMemoryDriverModule.forRoot(),
    DaffProductShopifyDriverModule.forRoot(),
    DaffCartInMemoryDriverModule.forRoot(),
    DaffNewsletterInMemoryDriverModule.forRoot(),
    DaffCategoryInMemoryDriverModule.forRoot(),
    DaffNavigationInMemoryDriverModule.forRoot(),
    DaffAuthorizeNetInMemoryDriverModule.forRoot(),
  ],
  providers: [
    provideDaffProductExtraFactoryTypes(DaffDefaultProductFactory),
    provideApollo(
      () => createApolloConfig(shopifyDriverConfig(
        (<ShopifyEnviromentDriverConfiguration>environment.driver).domain,
        (<ShopifyEnviromentDriverConfiguration>environment.driver).publicAccessToken)),
    ),
  ],
})
export class DemoDriverModule {}
