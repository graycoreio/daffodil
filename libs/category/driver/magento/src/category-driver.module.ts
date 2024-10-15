import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import { DaffCategoryDriver } from '@daffodil/category/driver';
import { DAFF_MAGENTO_CACHEABLE_OPERATIONS } from '@daffodil/driver/magento';
import {
  provideDaffProductMagentoExtraProductPreviewFragments,
  DAFF_MAGENTO_GET_FILTER_TYPES_QUERY_NAME,
  magentoProductPreviewFragment,
} from '@daffodil/product/driver/magento';

import { DaffMagentoCategoryService } from './category.service';
import { MAGENTO_CATEGORY_CONFIG_DEFAULT } from './config/default';
import {
  DaffCategoryMagentoDriverConfig,
  MAGENTO_CATEGORY_CONFIG_TOKEN,
} from './interfaces/public_api';
import {
  DAFF_MAGENTO_GET_CATEGORY_AND_PRODUCTS_QUERY_NAME,
  DAFF_MAGENTO_RESOLVE_CATEGORY_URL_QUERY_NAME,
} from './queries/public_api';
import { DaffMagentoAppliedFiltersTransformService } from './transformers/applied-filter-transformer.service';
import { DaffMagentoCategoryPageConfigTransformerService } from './transformers/category-page-config-transformer.service';
import { DaffMagentoCategoryResponseTransformService } from './transformers/category-response-transform.service';
import { DaffMagentoCategoryTransformerService } from './transformers/category-transformer.service';

/**
 * A module that provides the {@link DaffCategoryDriver} and {@link MAGENTO_CATEGORY_CONFIG_TOKEN} as the {@link DaffMagentoCategoryService} and
 * {@link MAGENTO_CATEGORY_CONFIG_DEFAULT} respectively
 */
@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffCategoryMagentoDriverModule {
  static forRoot(config: DaffCategoryMagentoDriverConfig = MAGENTO_CATEGORY_CONFIG_DEFAULT): ModuleWithProviders<DaffCategoryMagentoDriverModule> {
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
        {
          provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
          useValue: DAFF_MAGENTO_GET_FILTER_TYPES_QUERY_NAME,
          multi: true,
        },
        {
          provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
          useValue: DAFF_MAGENTO_GET_CATEGORY_AND_PRODUCTS_QUERY_NAME,
          multi: true,
        },
        {
          provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
          useValue: DAFF_MAGENTO_RESOLVE_CATEGORY_URL_QUERY_NAME,
          multi: true,
        },
        {
          provide: MAGENTO_CATEGORY_CONFIG_TOKEN,
          useValue: {
            ...MAGENTO_CATEGORY_CONFIG_DEFAULT,
            ...config,
          },
        },
      ],
    };
  }
}
