import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffCategoryDriver } from '@daffodil/category/driver';
import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';

import { DaffInMemoryCategoryService } from './category.service';
import { DaffInMemoryBackendCategoryService } from '../backend/category.service';

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
        provideDaffCategoryDriver(DaffInMemoryCategoryService),
        provideDaffInMemoryBackends(DaffInMemoryBackendCategoryService),
      ],
    };
  }
}
