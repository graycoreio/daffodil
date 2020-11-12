import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DaffCart, DaffCartShippingRate } from '@daffodil/cart';
import {
  DaffCartShippingMethodsServiceInterface,
} from '@daffodil/cart/driver';

import { DaffCartShippingRateFactory } from '@daffodil/cart/testing';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCartShippingMethodsService implements DaffCartShippingMethodsServiceInterface {
  constructor(
    private shippingInfoFactory: DaffCartShippingRateFactory,
  ) {}

  list(cartId: DaffCart['id']): Observable<DaffCartShippingRate[]> {
    return of(this.shippingInfoFactory.createMany(3));
  }
}
