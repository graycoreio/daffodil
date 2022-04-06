import { DataLayerProduct } from './product/product';

export interface CheckoutProduct extends DataLayerProduct {
  quantity: number;
}

export interface EcommerceDataLayerCheckoutStep {
  event: 'checkout';
  ecommerce: {
    checkout: {
      actionField: { step: number; option: string };
      products: CheckoutProduct[];
    };
  };
}
