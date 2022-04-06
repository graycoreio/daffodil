export enum MagentoProductStockStatusEnum {
  InStock = 'IN_STOCK',
  OutOfStock = 'OUT_OF_STOCK'
}

/**
 * A stripped down version of the Magento product.
 * The product preview is intended for loading lists of products
 * that do not need the full amount of information that would be
 * necessary for a product page, for example.
 */
export interface MagentoProductPreview {
  __typename: string;
  uid: string;
  name: string;
  sku: string;
  url_key: string;
  url_suffix: string;
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
}
