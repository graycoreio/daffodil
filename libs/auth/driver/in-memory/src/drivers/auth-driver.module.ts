import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffAuthInMemoryDriver } from '../provider';

/**
 * @deprecated in favor of {@link provideDaffAuthInMemoryDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffAuthInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffAuthInMemoryDriverModule> {
    return {
      ngModule: DaffAuthInMemoryDriverModule,
      providers: [
        provideDaffAuthInMemoryDriver(),
      ],
    };
  }
}
