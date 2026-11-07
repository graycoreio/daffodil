import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffCategoryDriver } from '@daffodil/category/driver';
import { provideManyDaffMagentoCacheableOperations } from '@daffodil/driver/magento/2.4.7';
import { DAFF_MAGENTO_GET_FILTER_TYPES_QUERY_NAME } from '@daffodil/product/driver/magento/2.4.7';

import { DaffMagentoCategoryService } from './category.service';
import {
  DAFF_MAGENTO_GET_CATEGORY_AND_PRODUCTS_QUERY_NAME,
  DAFF_MAGENTO_RESOLVE_CATEGORY_URL_QUERY_NAME,
} from './queries/public_api';
import { DaffMagentoAppliedFiltersTransformService } from './transformers/applied-filter-transformer.service';
import { DaffMagentoCategoryPageConfigTransformerService } from './transformers/category-page-config-transformer.service';
import { DaffMagentoCategoryResponseTransformService } from './transformers/category-response-transform.service';
import { DaffMagentoCategoryTransformerService } from './transformers/category-transformer.service';

/**
 * Provides the {@link DaffMagentoCategoryService} for the {@link DaffCategoryDriver} token.
 */
export const provideDaffCategoryMagentoDriver = (): EnvironmentProviders => makeEnvironmentProviders([
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
]);
