import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffGeographyInMemoryDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffGeographyInMemoryDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffGeographyInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffGeographyInMemoryDriverModule> {
    return {
      ngModule: DaffGeographyInMemoryDriverModule,
      providers: [
        provideDaffGeographyInMemoryDriver(),
      ],
    };
  }
}
