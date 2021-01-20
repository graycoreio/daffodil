import { DaffConfigurableProduct, DaffProductTypeEnum } from '@daffodil/product';
import { DaffModelFactory } from '@daffodil/core/testing';
/**
 * Mocked DaffConfigurableProduct object.
 */
export declare class MockConfigurableProduct implements DaffConfigurableProduct {
    private stubPriceVariant1;
    private stubDiscountVariant1;
    private stubPriceVariant2;
    private stubDiscountVariant2;
    private stubPriceVariant3;
    private stubDiscountVariant3;
    type: DaffProductTypeEnum;
    id: any;
    url: any;
    price: any;
    images: any[];
    name: any;
    brand: any;
    description: string;
    in_stock: boolean;
    configurableAttributes: {
        code: string;
        label: string;
        order: number;
        values: {
            value: string;
            label: string;
            swatch: {
                value: string;
                thumbnail: any;
            };
        }[];
    }[];
    variants: {
        appliedAttributes: {
            color: string;
            size: string;
            material: string;
        };
        price: any;
        discount: {
            amount: any;
            percent: number;
        };
        id: any;
        in_stock: boolean;
    }[];
}
/**
 * Factory for creating DaffConfigurableProducts.
 */
export declare class DaffConfigurableProductFactory extends DaffModelFactory<DaffConfigurableProduct> {
    constructor();
}
