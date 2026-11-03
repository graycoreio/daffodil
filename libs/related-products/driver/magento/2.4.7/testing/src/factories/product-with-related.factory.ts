import { Injectable } from '@angular/core';

import { DaffModelFactory } from '@daffodil/core/testing';
import { MockMagentoCoreProduct } from '@daffodil/product/driver/magento/testing';
import { MagentoProductWithRelated } from '@daffodil/related-products/driver/magento/2.4.7';

export class MockMagentoProductWithRelated extends MockMagentoCoreProduct implements MagentoProductWithRelated {
  related_products = [];
}

/**
 * A factory for creating stub data for {@link MagentoProductWithRelated}s.
 */
@Injectable({
  providedIn: 'root',
})
export class MagentoProductWithRelatedFactory extends DaffModelFactory<MagentoProductWithRelated> {
  constructor(){
    super(MockMagentoProductWithRelated);
  }
}
