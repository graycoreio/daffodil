import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
} from '@angular/core';

import { provideDaffCategoryDriver } from '@daffodil/category/driver';
import { provideManyDaffMagentoCacheableOperations } from '@daffodil/driver/magento';
import { DAFF_MAGENTO_GET_FILTER_TYPES_QUERY_NAME } from '@daffodil/product/driver/magento';

import { DaffMagentoCategoryService } from './category.service';
import { MAGENTO_CATEGORY_CONFIG_DEFAULT } from './config/default';
import {
  DaffCategoryMagentoDriverConfig,
  provideMagentoCategoryConfig,
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
        provideDaffCategoryDriver(DaffMagentoCategoryService),
        DaffMagentoCategoryPageConfigTransformerService,
        DaffMagentoCategoryResponseTransformService,
        DaffMagentoCategoryTransformerService,
        DaffMagentoAppliedFiltersTransformService,
        provideManyDaffMagentoCacheableOperations(
          DAFF_MAGENTO_GET_FILTER_TYPES_QUERY_NAME,
          DAFF_MAGENTO_GET_CATEGORY_AND_PRODUCTS_QUERY_NAME,
          DAFF_MAGENTO_RESOLVE_CATEGORY_URL_QUERY_NAME,
        ),
        provideMagentoCategoryConfig(config),
      ],
    };
  }
}
