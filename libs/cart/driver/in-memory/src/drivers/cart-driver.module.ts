import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCartInMemoryDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffCartInMemoryDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCartInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffCartInMemoryDriverModule> {
    return {
      ngModule: DaffCartInMemoryDriverModule,
      providers: [
        provideDaffCartInMemoryDriver(),
      ],
    };
  }
}
