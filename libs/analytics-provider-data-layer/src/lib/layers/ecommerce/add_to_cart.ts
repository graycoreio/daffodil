import { DataLayerProduct } from './product/product';

export interface AddToCartProduct extends DataLayerProduct {
  quantity: number;
}

export interface EcommerceDataLayerAddToCart {
  event: 'addToCart';
  ecommerce: {
    add: {
      products: AddToCartProduct[];
    };
  };
}
