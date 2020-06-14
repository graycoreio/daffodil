import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DaffCart, DaffCartServiceInterface } from '@daffodil/cart';

import { DaffCartFactory } from '../../../factories/cart.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCartService implements DaffCartServiceInterface<DaffCart> {
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
