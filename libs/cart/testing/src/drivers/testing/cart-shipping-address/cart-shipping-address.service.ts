import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  DaffCart,
  DaffCartShippingAddressServiceInterface,
  DaffCartAddress
} from '@daffodil/cart';

import { DaffCartAddressFactory, DaffCartFactory } from '../../../factories/public_api';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCartShippingAddressService implements DaffCartShippingAddressServiceInterface {
  constructor(
    private addressFactory: DaffCartAddressFactory,
    private cartFactory: DaffCartFactory
  ) {}

  get(cartId: DaffCart['id']): Observable<DaffCartAddress> {
    return of(this.addressFactory.create());
  }

  update(cartId: DaffCart['id'], address: DaffCartAddress): Observable<Partial<DaffCart>> {
    return of(this.cartFactory.create());
  }
}
