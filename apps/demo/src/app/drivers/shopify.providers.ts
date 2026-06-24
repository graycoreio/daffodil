import {
  importProvidersFrom,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffAuthorizeNetInMemoryDriverModule } from '@daffodil/authorizenet/driver/in-memory';
import { DaffCartInMemoryDriverModule } from '@daffodil/cart/driver/in-memory';
import { DaffCategoryInMemoryDriverModule } from '@daffodil/category/driver/in-memory';
import { DaffInMemoryDriverModule } from '@daffodil/driver/in-memory';
import { provideShopifyDriver } from '@daffodil/driver/shopify';
import { provideDaffNavigationInMemoryDriver } from '@daffodil/navigation/driver/in-memory';
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/driver/in-memory';
import { provideDaffProductShopifyDriver } from '@daffodil/product/driver/shopify';
import {
  DaffDefaultProductFactory,
  provideDaffProductExtraFactoryTypes,
} from '@daffodil/product/testing';

import { environment } from '../../environments/environment';
import { ShopifyEnviromentDriverConfiguration } from '../../environments/environment.interface';

const domain = (<ShopifyEnviromentDriverConfiguration>environment.driver).domain;
const accessToken = (<ShopifyEnviromentDriverConfiguration>environment.driver).publicAccessToken;

export const provideDemoDrivers = () => [
  makeEnvironmentProviders([
    importProvidersFrom(
      DaffInMemoryDriverModule.forRoot(),
      DaffCartInMemoryDriverModule.forRoot(),
      DaffNewsletterInMemoryDriverModule.forRoot(),
      DaffCategoryInMemoryDriverModule.forRoot(),
      DaffAuthorizeNetInMemoryDriverModule.forRoot(),
    ),
    provideDaffNavigationInMemoryDriver(),
    provideDaffProductExtraFactoryTypes(DaffDefaultProductFactory),
    provideShopifyDriver({ domain, accessToken }),
    provideDaffProductShopifyDriver(),
  ]),
];
