import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffGeographyInMemoryDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffGeographyInMemoryDriver}
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
