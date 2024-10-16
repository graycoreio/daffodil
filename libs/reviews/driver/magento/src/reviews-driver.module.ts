import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { provideDaffMagentoCacheableOperation } from '@daffodil/driver/magento';
import {
  provideDaffProductMagentoExtraProductPreviewFragments,
  provideDaffProductMagentoExtraProductPreviewTransforms,
} from '@daffodil/product/driver/magento';
import { provideDaffReviewsDriver } from '@daffodil/reviews/driver';

import {
  magentoReviewedProductFragment,
  MAGENTO_REVIEWS_LIST_QUERY_NAME,
} from './queries/public_api';
import { DaffReviewsMagentoService } from './reviews.service';
import { magentoReviewedProductTransform } from './transforms/public_api';

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class DaffReviewsMagentoDriverModule {
  static forRoot(): ModuleWithProviders<DaffReviewsMagentoDriverModule> {
    return {
      ngModule: DaffReviewsMagentoDriverModule,
      providers: [
        provideDaffReviewsDriver(DaffReviewsMagentoService),
        ...provideDaffProductMagentoExtraProductPreviewFragments(
          magentoReviewedProductFragment,
        ),
        ...provideDaffProductMagentoExtraProductPreviewTransforms(
          magentoReviewedProductTransform,
        ),
        provideDaffMagentoCacheableOperation(MAGENTO_REVIEWS_LIST_QUERY_NAME),
      ],
    };
  }
}
