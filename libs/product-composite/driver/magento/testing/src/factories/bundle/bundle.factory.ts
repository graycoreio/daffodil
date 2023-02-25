import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffModelFactory } from '@daffodil/core/testing';
import {
  MagentoBundledProduct,
  MagentoBundledProductItem,
} from '@daffodil/product-composite/driver/magento';
import { MagentoProductTypeEnum } from '@daffodil/product/driver/magento';
import { MockMagentoCoreProduct } from '@daffodil/product/driver/magento/testing';

import { MagentoBundledProductItemFactory } from './bundle-item.factory';


export class MockMagentoBundledProduct extends MockMagentoCoreProduct implements MagentoBundledProduct {
  constructor(
    private bundleItemFactory: MagentoBundledProductItemFactory,
  ) {
    super();
  }

  __typename = MagentoProductTypeEnum.BundledProduct;
  items = this.createBundleItems();

  protected createBundleItems(): MagentoBundledProductItem[] {
    return this.bundleItemFactory.createMany(faker.datatype.number({ min: 1, max: 5 }));
  }
}

/**
 * A factory for creating stub data for {@link MagentoBundledProduct}s.
 */
@Injectable({
  providedIn: 'root',
})
export class MagentoBundledProductFactory extends DaffModelFactory<MagentoBundledProduct> {
  constructor(
    bundleItemFactory: MagentoBundledProductItemFactory,
  ) {
    super(MockMagentoBundledProduct, bundleItemFactory);
  }
}
