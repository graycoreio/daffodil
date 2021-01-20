import { DaffProduct, DaffProductTypeEnum } from '@daffodil/product';
import { DaffModelFactory } from '@daffodil/core/testing';
/**
 * Mocked DaffProduct object.
 */
export declare class MockProduct implements DaffProduct {
    private stubPrice;
    private stubDiscount;
    type: DaffProductTypeEnum;
    id: any;
    url: any;
    price: any;
    in_stock: boolean;
    discount: {
        amount: any;
        percent: number;
    };
    images: any[];
    name: any;
    brand: any;
    description: string;
}
/**
 * Factory for creating DaffProducts.
 */
export declare class DaffProductFactory extends DaffModelFactory<DaffProduct> {
    constructor();
}
