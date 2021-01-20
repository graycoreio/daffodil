import { DaffCompositeProduct, DaffProductTypeEnum, DaffCompositeProductItemInputEnum } from '@daffodil/product';
import { DaffModelFactory } from '@daffodil/core/testing';
/**
 * Mocked DaffCompositeProduct object.
 */
export declare class MockCompositeProduct implements DaffCompositeProduct {
    private stubPrice;
    private stubDiscount;
    type: DaffProductTypeEnum;
    id: any;
    url: any;
    price: any;
    images: any[];
    discount: {
        amount: any;
        percent: number;
    };
    in_stock: boolean;
    name: any;
    brand: any;
    description: string;
    items: {
        id: any;
        required: any;
        title: any;
        input_type: DaffCompositeProductItemInputEnum;
        options: {
            id: any;
            name: any;
            price: any;
            images: any[];
            discount: {
                amount: number;
                percent: number;
            };
            quantity: any;
            is_default: boolean;
            in_stock: boolean;
        }[];
    }[];
}
/**
 * Factory for creating DaffCompositeProducts.
 */
export declare class DaffCompositeProductFactory extends DaffModelFactory<DaffCompositeProduct> {
    constructor();
}
