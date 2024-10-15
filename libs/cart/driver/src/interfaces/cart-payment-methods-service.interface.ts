import { Observable } from 'rxjs';

import {
  DaffCartPaymentMethod,
  DaffCart,
} from '@daffodil/cart';
import { createSingletonInjectionToken } from '@daffodil/core';

/**
 * The interface responsible for retrieving the available payment methods of a cart.
 */
export interface DaffCartPaymentMethodsServiceInterface<T extends DaffCartPaymentMethod = DaffCartPaymentMethod> {
  /**
   * List the available payment methods of a cart.
   */
  list(cartId: DaffCart['id']): Observable<T[]>;
}

export const {
  token: DaffCartPaymentMethodsDriver,
  provider: daffProvideCartPaymentMethodsDriver,
} = createSingletonInjectionToken<DaffCartPaymentMethodsServiceInterface>('DaffCartPaymentMethodsDriver');
