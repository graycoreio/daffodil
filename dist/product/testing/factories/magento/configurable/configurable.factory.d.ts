import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoProductTypeEnum, MagentoConfigurableProduct, MagentoProductStockStatusEnum } from '@daffodil/product';
import { MockMagentoCoreProduct } from '../core/product.factory';
export declare class MockMagentoConfigurableProduct extends MockMagentoCoreProduct implements MagentoConfigurableProduct {
    private priceVariant1;
    private discountVariant1;
    private priceVariant2;
    private discountVariant2;
    private priceVariant3;
    private discountVariant3;
    __typename: MagentoProductTypeEnum;
    configurable_options: {
        attribute_code: string;
        attribute_id: any;
        id: any;
        label: string;
        position: number;
        product_id: any;
        values: {
            label: string;
            value_index: number;
        }[];
    }[];
    variants: ({
        attributes: {
            code: string;
            label: string;
            value_index: number;
        }[];
        product: {
            __typename: MagentoProductTypeEnum;
            id: any;
            url_key: any;
            name: any;
            sku: any;
            stock_status: MagentoProductStockStatusEnum;
            image: {
                __typename: string;
                label: any;
                url: any;
            };
            thumbnail: {
                __typename: string;
                label: any;
                url: any;
            };
            price_range: {
                __typename: string;
                maximum_price: {
                    __typename: string;
                    regular_price: {
                        __typename: string;
                        value: any;
                        currency: any;
                    };
                    discount: {
                        __typename: string;
                        amount_off: any;
                        percent_off: number;
                    };
                };
            };
        };
    } | {
        attributes: {
            code: string;
            label: string;
            value_index: number;
        }[];
        product: {
            __typename: MagentoProductTypeEnum;
            id: any;
            url_key: any;
            name: any;
            sku: any;
            stock_status: MagentoProductStockStatusEnum;
            image: {
                __typename: string;
                label: any;
                url: any;
            };
            thumbnail: {
                __typename: string;
                label: any;
                url: any;
            };
            price_range: {
                __typename: string;
                maximum_price: {
                    __typename: string;
                    regular_price: {
                        __typename: string;
                        value: any;
                        currency: any;
                    };
                    discount: {
                        amount_off: any;
                        percent_off: number;
                        __typename?: undefined;
                    };
                };
            };
        };
    })[];
}
export declare class MagentoConfigurableProductFactory extends DaffModelFactory<MagentoConfigurableProduct> {
    constructor();
}
