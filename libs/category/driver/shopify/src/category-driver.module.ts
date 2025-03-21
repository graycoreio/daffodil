import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import { provideDaffCategoryDriver } from '@daffodil/category/driver';

import { DaffShopifyCategoryService } from './category.service';

/**
 * A module that provides the {@link DaffCategoryDriver} as the {@link DaffShopifyCategoryService}.
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCategoryShopifyDriverModule {
  static forRoot(): ModuleWithProviders<DaffCategoryShopifyDriverModule> {
    return {
      ngModule: DaffCategoryShopifyDriverModule,
      providers: [
        provideDaffCategoryDriver(DaffShopifyCategoryService),
      ],
    };
  }
}

