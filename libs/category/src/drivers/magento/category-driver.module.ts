import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffMagentoCategoryService } from './category.service';
import { DaffMagentoCategoryResponseTransformService } from './transformers/category-response-transform.service';
import { DaffMagentoCategoryTransformerService } from './transformers/category-transformer.service';
import { DaffMagentoCategoryPageConfigTransformerService } from './transformers/category-page-config-transformer.service';
import { DaffCategoryDriver } from '../injection-tokens/category-driver.token';
import { DaffMagentoAppliedSortOptionTransformService } from './transformers/applied-sort-option-transformer.service';
import { DaffMagentoAppliedFiltersTransformService } from './transformers/applied-filter-transformer.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DaffCategoryMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCategoryMagentoDriverModule> {
    return {
      ngModule: DaffCategoryMagentoDriverModule,
      providers: [
				{
					provide: DaffCategoryDriver,
					useExisting: DaffMagentoCategoryService
				},
				DaffMagentoCategoryPageConfigTransformerService,
				DaffMagentoCategoryResponseTransformService,
				DaffMagentoCategoryTransformerService,
				DaffMagentoAppliedFiltersTransformService,
				DaffMagentoAppliedSortOptionTransformService
      ]
    };
  }
}
