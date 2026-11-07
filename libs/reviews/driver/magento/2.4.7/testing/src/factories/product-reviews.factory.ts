import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoSearchResultPageInfo } from '@daffodil/driver/magento/2.4.7';
import { MagentoSearchResultPageInfoFactory } from '@daffodil/driver/magento/2.4.7/testing';
import {
  MagentoProductReviews,
  MagentoProductReview,
} from '@daffodil/reviews/driver/magento/2.4.7';

import { MagentoProductReviewFactory } from './product-review.factory';

export class MockMagentoProductReviews implements MagentoProductReviews {
  __typename = <const>'ProductReviews';
  items = this.createReviews();
  page_info = this.createPageInfo();

  constructor(
    protected reviewFactory: MagentoProductReviewFactory,
    protected pageInfoFactory: MagentoSearchResultPageInfoFactory,
  ) {}

  private createReviews(): MagentoProductReview[] {
    return this.reviewFactory.createMany(faker.number.int({ min: 3, max: 5 }));
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
