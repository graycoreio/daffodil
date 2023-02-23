import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MockMagentoCoreProduct } from '@daffodil/product/driver/magento/testing';
import { MagentoProductWithUpsell } from '@daffodil/upsell-products/driver/magento';

export class MockMagentoProductWithUpsell extends MockMagentoCoreProduct implements MagentoProductWithUpsell {
  upsell_products = [];
}

/**
 * A factory for creating stub data for {@link MagentoProductWithUpsell}s.
 */
@Injectable({
  providedIn: 'root',
})
export class MagentoProductWithUpsellFactory extends DaffModelFactory<MagentoProductWithUpsell> {
  constructor(){
    super(MockMagentoProductWithUpsell);
  }
}
