import { DataLayerProduct } from './product/product';

export interface AddToCartProduct extends DataLayerProduct {
  quantity: number;
}

export interface DaffEcommerceDataLayerAddToCart {
  event: 'addToCart';
  ecommerce: {
    add: {
      products: AddToCartProduct[];
    };
  };
}
