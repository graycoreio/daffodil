import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker/locale/en_US';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MockMagentoCoreProduct } from '@daffodil/product/driver/magento/testing';
import { MagentoReviewedProduct } from '@daffodil/reviews/driver/magento';

export class MockMagentoReviewedProduct extends MockMagentoCoreProduct implements MagentoReviewedProduct {
  review_count = faker.datatype.number({ min: 0, max: 100 });
  rating_summary = faker.datatype.number({ min: 0, max: 100 });
}

@Injectable({
  providedIn: 'root',
})
export class MagentoReviewedProductFactory extends DaffModelFactory<MagentoReviewedProduct> {
  constructor() {
    super(MockMagentoReviewedProduct);
  }
}
