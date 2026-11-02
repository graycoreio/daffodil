import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffPaypalInMemoryDriver } from './provider';

/**
 * @deprecated in favor of {@link provideDaffPaypalInMemoryDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffPaypalInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffPaypalInMemoryDriverModule> {
    return {
      ngModule: DaffPaypalInMemoryDriverModule,
      providers: [
        provideDaffPaypalInMemoryDriver(),
      ],
    };
  }
}
