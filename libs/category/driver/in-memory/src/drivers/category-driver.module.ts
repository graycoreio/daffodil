import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DaffCategoryDriver } from '@daffodil/category/driver';

import { DaffInMemoryCategoryService } from './category.service';

/**
 * A module that provides the {@link DaffInMemoryCategoryService} for the {@link DaffCategoryDriver} token.
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
        {
          provide: DaffCategoryDriver,
          useExisting: DaffInMemoryCategoryService,
        },
      ],
    };
  }
}
