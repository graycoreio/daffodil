import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffSearchCategoryInMemoryDriver } from './provider';

/**
 * Module for providing the {@link DaffSearchProductInMemoryBackendService} as a search in-memory child backend.
 *
 * @deprecated in favor of {@link provideDaffSearchCategoryInMemoryDriver}
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffSearchCategoryInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffSearchCategoryInMemoryDriverModule> {
    return {
      ngModule: DaffSearchCategoryInMemoryDriverModule,
      providers: [
        provideDaffSearchCategoryInMemoryDriver(),
      ],
    };
  }
}
