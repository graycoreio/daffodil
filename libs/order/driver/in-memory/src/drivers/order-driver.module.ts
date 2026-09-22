import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffOrderInMemoryDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffOrderInMemoryDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffOrderInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffOrderInMemoryDriverModule> {
    return {
      ngModule: DaffOrderInMemoryDriverModule,
      providers: [
        provideDaffOrderInMemoryDriver(),
      ],
    };
  }
}
