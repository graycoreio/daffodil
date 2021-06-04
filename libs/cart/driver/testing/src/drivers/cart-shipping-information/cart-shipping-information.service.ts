import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffCart,
  DaffCartShippingRate,
} from '@daffodil/cart';
import { DaffCartShippingInformationServiceInterface } from '@daffodil/cart/driver';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory,
} from '@daffodil/cart/testing';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffTestingCartShippingInformationService implements DaffCartShippingInformationServiceInterface {
  constructor(
    private shippingInfoFactory: DaffCartShippingRateFactory,
    private cartFactory: DaffCartFactory,
  ) {}

  get(cartId: DaffCart['id']): Observable<DaffCartShippingRate> {
    return of(this.shippingInfoFactory.create());
  }

  update(cartId: DaffCart['id'], info: Partial<DaffCartShippingRate>): Observable<Partial<DaffCart>> {
    return of(this.cartFactory.create());
  }

  delete(cartId: DaffCart['id']): Observable<Partial<DaffCart>> {
    return of(this.cartFactory.create());
  }
}
