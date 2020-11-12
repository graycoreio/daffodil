import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import { DaffCartServiceInterface } from '@daffodil/cart/driver';

import { DaffCartFactory } from '@daffodil/cart/testing';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCartService implements DaffCartServiceInterface {
  constructor(
    private cartFactory: DaffCartFactory
  ) {}

  get(id: number | string): Observable<DaffCart> {
    return of(this.cartFactory.create());
  }

  addToCart(productId: string, qty: number): Observable<DaffCart> {
    return of(this.cartFactory.create());
  }

  clear(id: number | string): Observable<DaffCart> {
    return of(this.cartFactory.create());
  }

  create() {
    return of({
      id: this.cartFactory.create().id
    });
  }
}
