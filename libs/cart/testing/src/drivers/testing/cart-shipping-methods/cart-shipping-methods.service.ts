import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  DaffCartShippingMethodsServiceInterface,
  DaffCart,
  DaffCartShippingRate
} from '@daffodil/cart';

import { DaffCartShippingRateFactory } from '../../../factories/public_api';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCartShippingMethodsService implements DaffCartShippingMethodsServiceInterface<DaffCartShippingRate> {
  constructor(
    private shippingInfoFactory: DaffCartShippingRateFactory,
  ) {}

  list(cartId: DaffCart['id']): Observable<DaffCartShippingRate[]> {
    return of(this.shippingInfoFactory.createMany(3));
  }
}
