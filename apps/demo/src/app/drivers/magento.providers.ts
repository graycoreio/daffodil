import {
  importProvidersFrom,
  makeEnvironmentProviders,
} from '@angular/core';

import { DaffAuthMagentoDriverModule } from '@daffodil/auth/driver/magento';
import { DaffMagentoAuthorizeNetDriverModule } from '@daffodil/authorizenet/driver/magento';
import { DaffCartMagentoDriverModule } from '@daffodil/cart/driver/magento';
import { DaffCategoryMagentoDriverModule } from '@daffodil/category/driver/magento';
import {
  provideMagentoDriver,
  withOperationCache,
} from '@daffodil/driver/magento';
import { DaffGeographyMagentoDriverModule } from '@daffodil/geography/driver/magento';
import { DaffNavigationMagentoDriverModule } from '@daffodil/navigation/driver/magento';
import { DaffNewsletterTestingDriverModule } from '@daffodil/newsletter/driver/testing';
import { DaffProductMagentoDriverModule } from '@daffodil/product/driver/magento';

import { possibleTypes } from './magento/fragmentTypes.json';
import { provideDaffExternalRouterMagentoDriver } from './magento-version';
import { environment } from '../../environments/environment';
import { MagentoEnvironmentDriverConfiguration } from '../../environments/environment.interface';

export const provideDemoDrivers = () => [
  makeEnvironmentProviders([
    importProvidersFrom(
      DaffAuthMagentoDriverModule.forRoot(),
      DaffProductMagentoDriverModule.forRoot({
        baseMediaUrl: 'https://magento2.test/media/',
      }),
      DaffCartMagentoDriverModule.forRoot(),
      DaffNavigationMagentoDriverModule.forRoot(),
      DaffNewsletterTestingDriverModule.forRoot(),
      DaffGeographyMagentoDriverModule.forRoot(),
      DaffCategoryMagentoDriverModule.forRoot(),
      DaffMagentoAuthorizeNetDriverModule.forRoot((<MagentoEnvironmentDriverConfiguration>environment.driver).anetConfig),
    ),
    provideMagentoDriver(
      {
        uri: (<MagentoEnvironmentDriverConfiguration>environment.driver).domain + '/graphql',
        withCredentials: false,
        possibleTypes,
        typePolicies: {},
      },
      withOperationCache(),
    ),
    provideDaffExternalRouterMagentoDriver(),
  ]),
];
