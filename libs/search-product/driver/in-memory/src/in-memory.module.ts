import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffSearchProductInMemoryDriver } from './provider';

/**
 * Module for providing the {@link DaffSearchProductInMemoryBackendService} as a search in-memory child backend.
 *
 * @deprecated in favor of {@link provideDaffSearchProductInMemoryDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffSearchProductInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffSearchProductInMemoryDriverModule> {
    return {
      ngModule: DaffSearchProductInMemoryDriverModule,
      providers: [
        provideDaffSearchProductInMemoryDriver(),
      ],
    };
  }
}
