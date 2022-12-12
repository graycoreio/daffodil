import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoProductPageInfo } from '@daffodil/product/driver/magento';
import { MagentoProductPageInfoFactory } from '@daffodil/product/driver/magento/testing';
import {
  MagentoProductReviews,
  MagentoProductReview,
} from '@daffodil/reviews/driver/magento';

import { MagentoProductReviewFactory } from './product-review.factory';

export class MockMagentoProductReviews implements MagentoProductReviews {
  __typename: 'ProductReviews' = 'ProductReviews';
  items = this.createReviews();
  page_info = this.createPageInfo();

  constructor(
    protected reviewFactory: MagentoProductReviewFactory,
    protected pageInfoFactory: MagentoProductPageInfoFactory,
  ) {}

  private createReviews(): MagentoProductReview[] {
    return this.reviewFactory.createMany(faker.datatype.number({ min: 3, max: 5 }));
  }

  private createPageInfo(): MagentoProductPageInfo {
    return this.pageInfoFactory.create();
  }
}

@Injectable({
  providedIn: 'root',
})
export class MagentoProductReviewsFactory extends DaffModelFactory<MagentoProductReviews> {
  constructor(
    reviewFactory: MagentoProductReviewFactory,
    pageInfoFactory: MagentoProductPageInfoFactory,
  ) {
    super(MockMagentoProductReviews, reviewFactory, pageInfoFactory);
  }
}
