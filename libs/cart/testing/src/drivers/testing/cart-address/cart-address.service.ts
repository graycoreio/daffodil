import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  DaffCart,
  DaffCartAddressServiceInterface,
  DaffCartAddress
} from '@daffodil/cart';

import { DaffCartAddressFactory, DaffCartFactory } from '../../../factories/public_api';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCartAddressService implements DaffCartAddressServiceInterface {
  constructor(
    private addressFactory: DaffCartAddressFactory,
    private cartFactory: DaffCartFactory
  ) {}

  update(cartId: DaffCart['id'], address: DaffCartAddress): Observable<Partial<DaffCart>> {
    return of(this.cartFactory.create());
  }
}
