import { importProvidersFrom } from '@angular/core';

import { DaffAuthorizeNetInMemoryDriverModule } from '@daffodil/authorizenet/driver/in-memory';
import { DaffCartInMemoryDriverModule } from '@daffodil/cart/driver/in-memory';
import { DaffCategoryInMemoryDriverModule } from '@daffodil/category/driver/in-memory';
import { DaffInMemoryDriverModule } from '@daffodil/driver/in-memory';
import { provideShopifyApolloDriver } from '@daffodil/driver/shopify';
import { DaffNavigationInMemoryDriverModule } from '@daffodil/navigation/driver/in-memory';
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/driver/in-memory';
import { DaffProductShopifyDriverModule } from '@daffodil/product/driver/shopify';
import {
  DaffDefaultProductFactory,
  provideDaffProductExtraFactoryTypes,
} from '@daffodil/product/testing';

import { environment } from '../../environments/environment';
import { ShopifyEnviromentDriverConfiguration } from '../../environments/environment.interface';

const domain = (<ShopifyEnviromentDriverConfiguration>environment.driver).domain;
const accessToken = (<ShopifyEnviromentDriverConfiguration>environment.driver).publicAccessToken;

export const provideDemoDrivers = () => [
  importProvidersFrom(
    DaffInMemoryDriverModule.forRoot(),
    DaffProductShopifyDriverModule.forRoot(),
    DaffCartInMemoryDriverModule.forRoot(),
    DaffNewsletterInMemoryDriverModule.forRoot(),
    DaffCategoryInMemoryDriverModule.forRoot(),
    DaffNavigationInMemoryDriverModule.forRoot(),
    DaffAuthorizeNetInMemoryDriverModule.forRoot(),
  ),
  provideDaffProductExtraFactoryTypes(DaffDefaultProductFactory),
  provideShopifyApolloDriver(domain, accessToken),
];
