import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Cart } from '@daffodil/core';

import { DaffCartServiceInterface } from '@daffodil/driver';
import { DaffCartFactory } from '@daffodil/core/testing';

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
