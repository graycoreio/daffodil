import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoSearchResultPageInfo } from '@daffodil/driver/magento';
import { MagentoSearchResultPageInfoFactory } from '@daffodil/driver/magento/testing';
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
    protected pageInfoFactory: MagentoSearchResultPageInfoFactory,
  ) {}

  private createReviews(): MagentoProductReview[] {
    return this.reviewFactory.createMany(faker.datatype.number({ min: 3, max: 5 }));
  }

  private createPageInfo(): MagentoSearchResultPageInfo {
    return this.pageInfoFactory.create();
  }
}

@Injectable({
  providedIn: 'root',
})
export class MagentoProductReviewsFactory extends DaffModelFactory<MagentoProductReviews> {
  constructor(
    reviewFactory: MagentoProductReviewFactory,
    pageInfoFactory: MagentoSearchResultPageInfoFactory,
  ) {
    super(MockMagentoProductReviews, reviewFactory, pageInfoFactory);
  }
}
