export declare enum MagentoProductTypeEnum {
    BundledProduct = "BundleProduct",
    ConfigurableProduct = "ConfigurableProduct",
    SimpleProduct = "SimpleProduct"
}
export declare enum MagentoProductStockStatusEnum {
    InStock = "IN_STOCK",
    OutOfStock = "OUT_OF_STOCK"
}
/**
 * An object for defining what the product service requests and retrieves from a magento backend.
 */
export interface MagentoProduct {
    __typename: string;
    id: number;
    name: string;
    sku: string;
    url_key: string;
    image: {
        url: string;
        label: string;
    };
    thumbnail: {
        url: string;
        label: string;
    };
    price_range: {
        maximum_price: {
            regular_price: {
                value: number;
                currency: any;
            };
            discount: {
                amount_off: number;
                percent_off: number;
            };
        };
    };
    stock_status?: MagentoProductStockStatusEnum;
    media_gallery_entries?: {
        label: string;
        file: string;
        position: number;
        disabled: boolean;
        id: number;
    }[];
    short_description?: {
        html: string;
    };
    description?: {
        html: string;
    };
}
