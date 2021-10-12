import { DaffProduct } from '@daffodil/product';
import { DaffProductDriverResponse } from '@daffodil/product/driver';

export type DaffInMemoryProductResponseTransform<T extends DaffProduct = DaffProduct, V extends DaffProductDriverResponse = DaffProductDriverResponse> =
  (product: T) => V;
