import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  DaffCart,
  DaffCartShippingInformationServiceInterface,
  DaffCartShippingRate
} from '@daffodil/cart';

import { DaffCartFactory, DaffCartShippingRateFactory } from '../../../factories/public_api';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCartShippingInformationService implements DaffCartShippingInformationServiceInterface<DaffCartShippingRate, DaffCart> {
  constructor(
    private shippingInfoFactory: DaffCartShippingRateFactory,
    private cartFactory: DaffCartFactory
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
