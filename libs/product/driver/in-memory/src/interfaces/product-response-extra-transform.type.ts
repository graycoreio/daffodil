import { DaffProduct } from '@daffodil/product';
import { DaffProductDriverResponse } from '@daffodil/product/driver';

export type DaffInMemoryProductResponseExtraTransform<T extends DaffProduct = DaffProduct, V extends DaffProductDriverResponse = DaffProductDriverResponse> =
  (daffProductResponse: DaffProductDriverResponse, product: T) => V;
