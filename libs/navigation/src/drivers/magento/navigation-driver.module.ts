import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffNavigationDriver } from '../injection-tokens/navigation-driver.token';
import { DaffMagentoNavigationService } from './navigation.service';
import { DaffNavigationTransformer } from '../injection-tokens/navigation-transformer.token';
import { DaffMagentoNavigationTransformerService } from './transformers/navigation-transformer';
import { MagentoNavigationDriverConfiguration, MAGENTO_NAVIGATION_TREE_QUERY_DEPTH } from '../interfaces/navigation-config.interface';

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
        }
      ]
    };
  }
}
