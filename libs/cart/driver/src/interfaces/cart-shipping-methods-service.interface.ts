import { Observable } from 'rxjs';

import {
  DaffCartShippingRate,
  DaffCart,
} from '@daffodil/cart';
import { createSingleInjectionToken } from '@daffodil/core';

/**
 * The interface responsible for retrieving the available shipping methods of a cart.
 */
export interface DaffCartShippingMethodsServiceInterface<
  T extends DaffCartShippingRate = DaffCartShippingRate
> {
  /**
   * List the available shipping methods for a cart.
   */
  list(cartId: DaffCart['id']): Observable<T[]>;
}

export const {
  token: DaffCartShippingMethodsDriver,
  provider: daffProvideCartShippingMethodsDriver,
} = createSingleInjectionToken<DaffCartShippingMethodsServiceInterface>('DaffCartShippingMethodsDriver');
