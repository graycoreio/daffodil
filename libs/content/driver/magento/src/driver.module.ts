import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffContentDriver } from '@daffodil/content/driver';
import { provideDaffMagentoCacheableOperation } from '@daffodil/driver/magento';

import { MAGENTO_CONTENT_GET_BLOCKS_QUERY_NAME } from './queries/public_api';
import { MagentoContentService } from './service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffContentMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffContentMagentoDriverModule> {
    return {
      ngModule: DaffContentMagentoDriverModule,
      providers: [
        provideDaffContentDriver(MagentoContentService),
        provideDaffMagentoCacheableOperation(MAGENTO_CONTENT_GET_BLOCKS_QUERY_NAME),
      ],
    };
  }
}
