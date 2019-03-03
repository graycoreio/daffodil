import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Cart, DaffCartServiceInterface } from '@daffodil/cart';

import { DaffCartFactory } from '../../factories/cart.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCartService implements DaffCartServiceInterface {
  constructor(
    private cartFactory: DaffCartFactory
  ) {}

  get(): Observable<Cart> {
    return of(this.cartFactory.create());
  }

  addToCart(productId: string, qty: number): Observable<Cart> {
    return of(this.cartFactory.create());
  }

  clear(): Observable<void> {
    return of();
  }
}
