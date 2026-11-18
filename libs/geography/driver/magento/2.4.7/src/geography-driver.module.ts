import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffGeographyMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffGeographyMagentoDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
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
        provideDaffGeographyMagentoDriver(),
      ],
    };
  }
}
