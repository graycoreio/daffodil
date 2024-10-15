import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DAFF_MAGENTO_CACHEABLE_OPERATIONS } from '@daffodil/driver/magento';
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
        {
          provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
          useValue: MAGENTO_GET_COUNTRY_QUERY_NAME,
          multi: true,
        },
        {
          provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
          useValue: MAGENTO_GET_COUNTRIES_QUERY_NAME,
          multi: true,
        },
      ],
    };
  }
}
