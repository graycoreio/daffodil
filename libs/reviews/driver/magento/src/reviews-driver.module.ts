import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';

import { DAFF_MAGENTO_CACHEABLE_OPERATIONS } from '@daffodil/driver/magento';
import {
  daffProvideProductMagentoExtraProductPreviewFragments,
  daffProvideProductMagentoExtraProductPreviewTransforms,
} from '@daffodil/product/driver/magento';
import { DaffReviewsDriver } from '@daffodil/reviews/driver';

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
        {
          provide: DaffReviewsDriver,
          useExisting: DaffReviewsMagentoService,
        },
        ...daffProvideProductMagentoExtraProductPreviewFragments(
          magentoReviewedProductFragment,
        ),
        ...daffProvideProductMagentoExtraProductPreviewTransforms(
          magentoReviewedProductTransform,
        ),
        {
          provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
          useValue: MAGENTO_REVIEWS_LIST_QUERY_NAME,
          multi: true,
        },
      ],
    };
  }
}
