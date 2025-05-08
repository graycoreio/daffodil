import { NgModule } from '@angular/core';
import { provideApollo } from 'apollo-angular';

import { DaffAuthMagentoDriverModule } from '@daffodil/auth/driver/magento';
import { DaffMagentoAuthorizeNetDriverModule } from '@daffodil/authorizenet/driver/magento';
import { DaffCartMagentoDriverModule } from '@daffodil/cart/driver/magento';
import { DaffCategoryMagentoDriverModule } from '@daffodil/category/driver/magento';
import { provideDaffExternalRouterMagentoDriver } from '@daffodil/external-router/driver/magento/2.4.3';
import { DaffGeographyMagentoDriverModule } from '@daffodil/geography/driver/magento';
import { DaffNavigationMagentoDriverModule } from '@daffodil/navigation/driver/magento';
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/driver/in-memory';
import { DaffProductMagentoDriverModule } from '@daffodil/product/driver/magento';

import { demoMagentoApolloOptions } from './magento/apollo-options.factory';
import { environment } from '../../environments/environment';
import { MagentoEnvironmentDriverConfiguration } from '../../environments/environment.interface';

@NgModule({
  imports: [
    //Magento
    DaffAuthMagentoDriverModule.forRoot(),
    DaffProductMagentoDriverModule.forRoot({
      baseMediaUrl: 'https://magento2.test/media/',
    }),
    DaffCartMagentoDriverModule.forRoot(),
    DaffNavigationMagentoDriverModule.forRoot(),
    DaffNewsletterInMemoryDriverModule.forRoot(),
    DaffGeographyMagentoDriverModule.forRoot(),
    DaffCategoryMagentoDriverModule.forRoot(),
    DaffMagentoAuthorizeNetDriverModule.forRoot((<MagentoEnvironmentDriverConfiguration>environment.driver).anetConfig),
  ],
  providers: [
    provideApollo(demoMagentoApolloOptions),
    provideDaffExternalRouterMagentoDriver(),
  ],
})
export class DemoDriverModule {}
