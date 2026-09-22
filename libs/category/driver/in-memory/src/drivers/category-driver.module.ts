import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCategoryInMemoryDriver } from './provider';

/**
 * A module that provides the {@link DaffInMemoryCategoryService} for the {@link DaffCategoryDriver} token.
 *
 * @deprecated in favor of {@link provideDaffCategoryInMemoryDriver}
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
