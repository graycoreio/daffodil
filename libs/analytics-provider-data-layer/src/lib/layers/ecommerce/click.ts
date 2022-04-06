import { DataLayerProduct } from './product/product';

export interface ProductClickImpression extends DataLayerProduct {
  position: number;
}

export interface EcommerceDataLayerProductClick {
  event: 'productClick';
  ecommerce: {
    click: {
      actionField?: { list: string };
      products: ProductClickImpression[];
    };
  };
}
