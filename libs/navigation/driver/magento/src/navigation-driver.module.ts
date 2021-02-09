import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DaffNavigationDriver,
  DaffNavigationTransformer,
} from '@daffodil/navigation/driver';

import { DaffMagentoNavigationService } from './navigation.service';
import { DaffMagentoNavigationTransformerService } from './transformers/navigation-transformer';
import { MagentoNavigationDriverConfiguration, MAGENTO_NAVIGATION_TREE_QUERY_DEPTH } from './interfaces/navigation-config.interface';
import { provideDaffMagentoCacheableOperation } from '@daffodil/driver/magento';
import { DAFF_MAGENTO_GET_CATEGORY_TREE_QUERY_NAME } from './queries/get-category-tree';

export const MAGENTO_NAVIGATION_DEFAULT_CONFIGURATION: MagentoNavigationDriverConfiguration = {
  navigationTreeQueryDepth: 3
}

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffNavigationMagentoDriverModule {
  static forRoot(config: MagentoNavigationDriverConfiguration = MAGENTO_NAVIGATION_DEFAULT_CONFIGURATION): ModuleWithProviders<DaffNavigationMagentoDriverModule> {
    return {
      ngModule: DaffNavigationMagentoDriverModule,
      providers: [
        {
          provide: DaffNavigationDriver,
          useExisting: DaffMagentoNavigationService
        },
        {
          provide: DaffNavigationTransformer,
          useExisting: DaffMagentoNavigationTransformerService
        },
        {
          provide: MAGENTO_NAVIGATION_TREE_QUERY_DEPTH,
          useValue: config.navigationTreeQueryDepth
				},
				provideDaffMagentoCacheableOperation(DAFF_MAGENTO_GET_CATEGORY_TREE_QUERY_NAME)
      ]
    };
  }
}
