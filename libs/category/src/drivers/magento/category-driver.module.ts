import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffCategoryDriver } from '../injection-tokens/category-driver.token';
import { DaffMagentoCategoryService } from './category.service';
import { DaffCategoryTransformer } from '../injection-tokens/category-transformer.token';
import { DaffMagentoCategoryTransformerService } from './transformers/category-transformer.service';
import { DaffCategoryQueryManager } from '../injection-tokens/category-query-manager.token';
import { DaffMagentoCategoryGraphQlQueryManagerService } from './queries/category-query-manager.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffCategoryMagentoDriverModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DaffCategoryMagentoDriverModule,
      providers: [
        {
          provide: DaffCategoryDriver,
          useExisting: DaffMagentoCategoryService
        },
        {
          provide: DaffCategoryTransformer,
          useExisting: DaffMagentoCategoryTransformerService
        },
        {
          provide: DaffCategoryQueryManager,
          useExisting: DaffMagentoCategoryGraphQlQueryManagerService
        }
      ]
    };
  }
}
