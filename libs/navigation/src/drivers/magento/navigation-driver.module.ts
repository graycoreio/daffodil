import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffNavigationDriver } from '../injection-tokens/navigation-driver.token';
import { DaffMagentoNavigationService } from './navigation.service';
import { DaffNavigationTransformer } from '../injection-tokens/navigation-transformer.token';
import { DaffMagentoNavigationTransformerService } from './transformers/navigation-transformer';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffNavigationMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffNavigationMagentoDriverModule> {
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
        }
      ]
    };
  }
}
