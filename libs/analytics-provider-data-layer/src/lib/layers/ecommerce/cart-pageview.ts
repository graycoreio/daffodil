import { DataLayerProduct } from './product/product';

interface DaffDataLayerCartProduct extends DataLayerProduct {
  quantity: number;
}

// TODO: this isn't a true data layer type. Where should it actually reside?
export interface DaffDataLayerCartPageView {
  event: 'viewCart';
  ecommerce: {
    cart: {
      items: DaffDataLayerCartProduct[];
    };
  };
}
