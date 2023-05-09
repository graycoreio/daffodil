import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import { DaffCartStoreCreditDriverInterface } from '@daffodil/cart-store-credit/driver';
import { DaffCartWithStoreCreditFactory } from '@daffodil/cart-store-credit/testing';

/**
 * A basic cart driver that creates mock cart results of different kinds.
 * For testing purposes.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCartStoreCreditTestingDriver implements DaffCartStoreCreditDriverInterface {
  constructor(
    private factory: DaffCartWithStoreCreditFactory,
  ) {}

  apply(): Observable<DaffCartWithStoreCredit> {
    return of(this.factory.create());
  }

  remove(): Observable<DaffCartWithStoreCredit> {
    return of(this.factory.create());
  }
}
