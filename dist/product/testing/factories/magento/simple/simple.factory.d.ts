import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoProductTypeEnum, MagentoSimpleProduct } from '@daffodil/product';
import { MockMagentoCoreProduct } from '../core/product.factory';
export declare class MockMagentoSimpleProduct extends MockMagentoCoreProduct implements MagentoSimpleProduct {
    __typename: MagentoProductTypeEnum;
}
export declare class MagentoSimpleProductFactory extends DaffModelFactory<MagentoSimpleProduct> {
    constructor();
}
