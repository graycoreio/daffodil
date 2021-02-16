import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DAFF_MAGENTO_CACHEABLE_OPERATIONS } from '@daffodil/driver/magento';

import { DaffMagentoCategoryService } from './category.service';
import { DaffMagentoCategoryResponseTransformService } from './transformers/category-response-transform.service';
import { DaffMagentoCategoryTransformerService } from './transformers/category-transformer.service';
import { DaffMagentoCategoryPageConfigTransformerService } from './transformers/category-page-config-transformer.service';
import { DaffCategoryDriver } from '../injection-tokens/category-driver.token';
import { DaffMagentoAppliedSortOptionTransformService } from './transformers/applied-sort-option-transformer.service';
import { DaffMagentoAppliedFiltersTransformService } from './transformers/applied-filter-transformer.service';
import { DAFF_MAGENTO_GET_CATEGORY_QUERY_NAME } from './queries/get-category';
import { DAFF_MAGENTO_GET_CATEGORY_AGGREGATIONS_QUERY_NAME } from './queries/get-category-aggregations';
import { DAFF_MAGENTO_GET_PRODUCTS_QUERY_NAME } from './queries/get-products';

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
				DaffMagentoAppliedSortOptionTransformService,
				{
					provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
					useValue: [
						DAFF_MAGENTO_GET_CATEGORY_QUERY_NAME
					],
					multi: true
				},
				{
					provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
					useValue: [
						DAFF_MAGENTO_GET_CATEGORY_AGGREGATIONS_QUERY_NAME
					],
					multi: true
				},
				{
					provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
					useValue: [
						DAFF_MAGENTO_GET_PRODUCTS_QUERY_NAME
					],
					multi: true
				}
      ]
    };
  }
}
