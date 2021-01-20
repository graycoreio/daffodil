import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoProductTypeEnum, MagentoBundledProduct } from '@daffodil/product';
import { MockMagentoCoreProduct } from '../core/product.factory';
export declare class MockMagentoBundledProduct extends MockMagentoCoreProduct implements MagentoBundledProduct {
    __typename: MagentoProductTypeEnum;
    items: any[];
}
export declare class MagentoBundledProductFactory extends DaffModelFactory<MagentoBundledProduct> {
    constructor();
}
