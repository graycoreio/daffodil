import { DataLayerProduct } from './product/product';

export interface RemoveFromCartProduct extends DataLayerProduct {
  quantity: number;
}

export interface EcommerceDataLayerRemoveFromCart {
  event: 'removeFromCart';
  ecommerce: {
    remove: {
      products: [RemoveFromCartProduct];
    };
  };
}
