import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import { DaffCartServiceInterface } from '@daffodil/cart/driver';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffDriverResponse } from '@daffodil/driver';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffTestingCartService implements DaffCartServiceInterface {
  constructor(
    private cartFactory: DaffCartFactory,
  ) {}

  get(id: DaffCart['id']): Observable<DaffDriverResponse<DaffCart>> {
    return of({
      response: this.cartFactory.create(),
      errors: [],
    });
  }

  addToCart(productId: string, qty: number): Observable<DaffCart> {
    return of(this.cartFactory.create());
  }

  clear(id: DaffCart['id']): Observable<DaffCart> {
    return of(this.cartFactory.create());
  }

  create() {
    return of({
      id: this.cartFactory.create().id,
    });
  }
}
