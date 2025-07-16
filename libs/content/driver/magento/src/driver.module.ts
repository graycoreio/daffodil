import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import {
  provideDaffContentDriver,
  provideDaffContentPageDriver,
} from '@daffodil/content/driver';
import { provideManyDaffMagentoCacheableOperations } from '@daffodil/driver/magento';

import { MagentoContentPageService } from './page.service';
import {
  MAGENTO_CONTENT_GET_BLOCKS_QUERY_NAME,
  MAGENTO_CONTENT_GET_PAGE_QUERY_NAME,
} from './queries/public_api';
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
        provideDaffContentPageDriver(MagentoContentPageService),
        provideManyDaffMagentoCacheableOperations(MAGENTO_CONTENT_GET_BLOCKS_QUERY_NAME, MAGENTO_CONTENT_GET_PAGE_QUERY_NAME),
      ],
    };
  }
}
