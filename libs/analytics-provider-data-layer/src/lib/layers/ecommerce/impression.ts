import { DataLayerProduct } from './product/product';

export interface ProductImpression extends DataLayerProduct{
  list: string;
  position: number;
}

export interface EcommerceDataLayerImpression {
  ecommerce: {
    impressions?: ProductImpression[];
  };
}
