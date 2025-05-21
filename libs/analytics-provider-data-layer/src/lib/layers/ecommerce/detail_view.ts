import { DataLayerProduct } from './product/product';

export interface DaffEcommerceDataLayerDetailView {
  ecommerce: {
    detail: {
      actionField?: { list: string };
      products: DataLayerProduct[];
    };
  };
}
