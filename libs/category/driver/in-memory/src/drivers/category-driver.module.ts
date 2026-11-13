import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCategoryInMemoryDriver } from './provider';

/**
 * A module that provides the {@link DaffInMemoryCategoryService} for the {@link DaffCategoryDriver} token.
 *
 * @deprecated in favor of {@link provideDaffCategoryInMemoryDriver} Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCategoryInMemoryDriverModule {
  static forRoot(): ModuleWithProviders<DaffCategoryInMemoryDriverModule> {
    return {
      ngModule: DaffCategoryInMemoryDriverModule,
      providers: [
        provideDaffCategoryInMemoryDriver(),
      ],
    };
  }
}
