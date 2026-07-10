import { Observable } from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import { DaffProduct } from '@daffodil/product';

export interface DaffCrossSellProductDriverInterface<T extends DaffProduct = DaffProduct> {
  list(cartId: DaffCart['id']): Observable<Array<T>>;
}
