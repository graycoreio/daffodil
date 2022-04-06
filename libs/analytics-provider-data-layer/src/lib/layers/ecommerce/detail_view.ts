import { DataLayerProduct } from './product/product';

export interface EcommerceDataLayerDetailView {
  ecommerce: {
    detail: {
      actionField?: { list: string };
      products: DataLayerProduct[];
    };
  };
}
