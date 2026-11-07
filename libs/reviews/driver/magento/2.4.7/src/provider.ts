import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffMagentoCacheableOperation } from '@daffodil/driver/magento/2.4.7';
import {
  provideDaffProductMagentoExtraProductPreviewFragments,
  provideDaffProductMagentoExtraProductPreviewTransforms,
} from '@daffodil/product/driver/magento/2.4.7';
import { provideDaffReviewsDriver } from '@daffodil/reviews/driver';

import {
  magentoReviewedProductFragment,
  MAGENTO_REVIEWS_LIST_QUERY_NAME,
} from './queries/public_api';
import { DaffReviewsMagentoService } from './reviews.service';
import { magentoReviewedProductTransform } from './transforms/public_api';

/**
 * Provides the Magento implementation of the `@daffodil/reviews/driver` interface along with the reviewed product fragment and transform.
 */
export const provideDaffReviewsMagentoDriver = (): EnvironmentProviders => makeEnvironmentProviders([
  provideDaffReviewsDriver(DaffReviewsMagentoService),
  ...provideDaffProductMagentoExtraProductPreviewFragments(
    magentoReviewedProductFragment,
  ),
  ...provideDaffProductMagentoExtraProductPreviewTransforms(
    magentoReviewedProductTransform,
  ),
  provideDaffMagentoCacheableOperation(MAGENTO_REVIEWS_LIST_QUERY_NAME),
]);
