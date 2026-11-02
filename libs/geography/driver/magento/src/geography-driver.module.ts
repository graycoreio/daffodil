import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffGeographyMagentoDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffGeographyMagentoDriver}
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
