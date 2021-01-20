import { DaffModelFactory } from '@daffodil/core/testing';
import { MagentoProduct, MagentoProductTypeEnum, MagentoProductStockStatusEnum } from '@daffodil/product';
export declare class MockMagentoCoreProduct implements MagentoProduct {
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
    description: {
        __typename: string;
        html: any;
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
                percent_off: any;
            };
        };
    };
    short_description: {
        __typename: string;
        html: any;
    };
    media_gallery_entries: any[];
}
export declare class MagentoCoreProductFactory extends DaffModelFactory<MagentoProduct> {
    constructor();
}
