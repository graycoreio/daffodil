import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffMagentoCacheableOperation } from '@daffodil/driver/magento';
import { provideDaffGeographyDriver } from '@daffodil/geography/driver';

import { DaffGeographyMagentoService } from './geography.service';
import {
  MAGENTO_GET_COUNTRIES_QUERY_NAME,
  MAGENTO_GET_COUNTRY_QUERY_NAME,
} from './queries/public_api';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffGeographyMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffGeographyMagentoDriverModule> {
    return {
      ngModule: DaffGeographyMagentoDriverModule,
      providers: [
        provideDaffGeographyDriver(DaffGeographyMagentoService),
        provideDaffMagentoCacheableOperation(MAGENTO_GET_COUNTRY_QUERY_NAME),
        provideDaffMagentoCacheableOperation(MAGENTO_GET_COUNTRIES_QUERY_NAME),
      ],
    };
  }
}
