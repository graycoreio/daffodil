import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import { DaffCategoryDriver } from '@daffodil/category/driver';
import { DAFF_MAGENTO_CACHEABLE_OPERATIONS } from '@daffodil/driver/magento';

import { DaffMagentoCategoryService } from './category.service';
import { DAFF_MAGENTO_GET_CATEGORY_QUERY_NAME } from './queries/get-category';
import { DAFF_MAGENTO_GET_PRODUCTS_QUERY_NAME } from './queries/get-products';
import { DAFF_MAGENTO_GET_FILTER_TYPES_QUERY_NAME } from './queries/public_api';
import { DaffMagentoAppliedFiltersTransformService } from './transformers/applied-filter-transformer.service';
import { DaffMagentoAppliedSortOptionTransformService } from './transformers/applied-sort-option-transformer.service';
import { DaffMagentoCategoryPageConfigTransformerService } from './transformers/category-page-config-transformer.service';
import { DaffMagentoCategoryResponseTransformService } from './transformers/category-response-transform.service';
import { DaffMagentoCategoryTransformerService } from './transformers/category-transformer.service';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCategoryMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffCategoryMagentoDriverModule> {
    return {
      ngModule: DaffCategoryMagentoDriverModule,
      providers: [
        {
          provide: DaffCategoryDriver,
          useExisting: DaffMagentoCategoryService,
        },
        DaffMagentoCategoryPageConfigTransformerService,
        DaffMagentoCategoryResponseTransformService,
        DaffMagentoCategoryTransformerService,
        DaffMagentoAppliedFiltersTransformService,
        DaffMagentoAppliedSortOptionTransformService,
        {
          provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
          useValue: DAFF_MAGENTO_GET_CATEGORY_QUERY_NAME,
          multi: true,
        },
        {
          provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
          useValue: DAFF_MAGENTO_GET_FILTER_TYPES_QUERY_NAME,
          multi: true,
        },
        {
          provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
          useValue: DAFF_MAGENTO_GET_PRODUCTS_QUERY_NAME,
          multi: true,
        },
      ],
    };
  }
}
