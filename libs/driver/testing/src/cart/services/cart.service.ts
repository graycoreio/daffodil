import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Cart } from '@daffodil/core';

import { DaffDriverTestingModule } from '../../testing.module';
import { DaffCartServiceInterface } from '@daffodil/driver';
import { CartFactory } from '@daffodil/core/testing';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingCartService implements DaffCartServiceInterface {
  constructor(
    private cartFactory: CartFactory
  ) {}

  get(): Observable<Cart> {
    return of(this.cartFactory.create());
  }

  addToCart(productId: string, qty: number): Observable<Cart> {
    return of(this.cartFactory.create());
  }
}
