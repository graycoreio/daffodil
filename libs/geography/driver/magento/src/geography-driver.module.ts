import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffGeographyDriver } from '@daffodil/geography/driver'
import { provideManyDaffMagentoCacheableOperations } from '@daffodil/driver/magento';

import { DaffGeographyMagentoService } from './geography.service';
import { DAFF_MAGENTO_GET_COUNTRIES_QUERY_NAME, DAFF_MAGENTO_GET_COUNTRY_QUERY_NAME } from './queries/public_api';

@NgModule({
  imports: [
    CommonModule,
  ]
})
export class DaffGeographyMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffGeographyMagentoDriverModule> {
    return {
      ngModule: DaffGeographyMagentoDriverModule,
      providers: [
        {
          provide: DaffGeographyDriver,
          useExisting: DaffGeographyMagentoService
        },
				provideManyDaffMagentoCacheableOperations([
					DAFF_MAGENTO_GET_COUNTRIES_QUERY_NAME,
					DAFF_MAGENTO_GET_COUNTRY_QUERY_NAME
				])
      ],
    };
  }
}
