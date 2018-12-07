import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Cart, CartFactory } from '../../../../../index';
import { DaffCartServiceInterface } from '../../../../src/service-interfaces/cart/cart-service.interface';

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
