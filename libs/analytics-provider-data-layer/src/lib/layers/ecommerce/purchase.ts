import { DataLayerProduct } from './product/product';

export interface PurchaseProduct extends DataLayerProduct {
  quantity: number;
  coupon?: string;
};

export interface PurchaseActionField {
  id: string;
  affiliation?: string;
  revenue: string;
  tax?: string;
  shipping?: string;
  coupon: string;
}

export interface EcommerceDataLayerPurchase {
  ecommerce: {
    purchase: {
      actionField: PurchaseActionField;
      products: PurchaseProduct[];
    };
  };
}
