import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffMagentoCategoryService } from './category.service';
import { DaffMagentoCategoryResponseTransformService } from './transformers/category-response-transform.service';
import { DaffMagentoCategoryTransformerService } from './transformers/category-transformer.service';
import { DaffMagentoCategoryPageConfigTransformerService } from './transformers/category-page-config-transformer.service';
import { DaffMagentoAppliedFiltersTransformService } from './transformers/applied-filter-transformer.service';
import { DaffMagentoAppliedSortOptionTransformService } from './transformers/applied-sort-option-transformer.service';

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
				DaffMagentoCategoryService,
				DaffMagentoCategoryPageConfigTransformerService,
				DaffMagentoCategoryResponseTransformService,
				DaffMagentoCategoryTransformerService,
				DaffMagentoAppliedFiltersTransformService,
				DaffMagentoAppliedSortOptionTransformService
      ]
    };
  }
}
