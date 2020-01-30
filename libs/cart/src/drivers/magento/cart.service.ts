import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, merge, forkJoin, zip, pipe, OperatorFunction } from 'rxjs';
import { mergeMap, map, mergeMapTo, mapTo } from 'rxjs/operators';

import {
  DaffProductServiceInterface,
  DaffProductUnion,
  DaffProductDriver
} from '@daffodil/product'

import { DaffCartServiceInterface } from '../interfaces/cart-service.interface';
import { CartItem } from './models/cart-item';
import { DaffCart } from '../../models/cart';
import { CartResponse } from './models/cart-response'
import { CartTotalsResponse } from './models/cart-totals-response'
import { DaffCartTransformerInterface } from '../interfaces/cart-transformer.interface';
import { CartPaymentMethod } from './models/cart-payment-method';
import { DaffCartTransformer } from '../injection-tokens/cart-transformer.token';

const ProductToCartItemTransformer = (item: DaffProductUnion): any => {
  //stub
  return {
    ...item
  }
}

/**
 * Utility pipe that merges all responses into a single object.
 * @param buildRequests Returns an array of Observables given piped data.
 */
function mergeResponses<T extends Object>(
  buildRequests: (...args: any[]) => Observable<any>[]
): OperatorFunction<T, any> {
  return pipe(
    mergeMap((...args) =>
      zip(...buildRequests(...args))
    ),
    map((...responses) =>
      Object.assign({}, ...responses)
    )
  )
}

/**
 * A service for making Magento REST queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoCartService implements DaffCartServiceInterface {
  cartId: Observable<string>
  uri = ''

  constructor(
    private http: HttpClient,
    @Inject(DaffProductDriver) private product: DaffProductServiceInterface<DaffProductUnion>,
    @Inject(DaffCartTransformer) public cartTransformer: DaffCartTransformerInterface<DaffCart>
  ) {
    this.cartId = this.createCart()
  }

  protected createCart(): Observable<string> {
    return this.http.post<string>(`${this.uri}/guest-carts`, {})
  }

  protected getItems(): Observable<CartItem[]> {
    return this.cartId.pipe(
      mergeMap(cartId =>
        this.http.get<CartItem[]>(`${this.uri}/guest-carts/${cartId}/items`)
      )
    )
  }

  protected deleteItem(itemId: number): Observable<void> {
    return this.cartId.pipe(
      mergeMap(cartId =>
        this.http.delete<void>(`${this.uri}/guest-carts/${cartId}/items/${itemId}`)
      )
    )
  }

  get(): Observable<DaffCart> {
    return this.cartId.pipe(
      mergeMap(cartId => zip(
        this.http.get<CartResponse>(`${this.uri}/guest-carts/${cartId}`),
        // magento provides totals and payment method on a separate endpoint
        this.http.get<CartTotalsResponse>(`${this.uri}/guest-carts/${cartId}/totals`),
        this.http.get<CartPaymentMethod>(`${this.uri}/guest-carts/${cartId}/selected-payment-method`)
      )),
      map(([cart, totals, paymentMethod]) => {
        // probably need to deep merge
        const mergedCart = {
          ...cart,
          ...totals,
          ...paymentMethod,
          // merge item totals in
          items: cart.items.map((item, index) => ({
            ...item,
            // don't assume items are in same order
            ...totals.items.find(e => e.item_id === item.item_id)
          }))
        }

        return this.cartTransformer.transform(mergedCart)
      })
    )
  }

  addToCart(productId: string, qty: number): Observable<DaffCart> {
    // fetch product from product service
    const product = this.product.get(productId).pipe(
      // transform into a magento `CartItem`
      map(ProductToCartItemTransformer)
    )

    return zip(product, this.cartId).pipe(
      mergeMap(([item, cartId]) =>
        this.http.post<CartItem>(
          `${this.uri}/guest-carts/${cartId}/items`,
          {
            ...item,
            qty
          })
      ),
      mergeMapTo(this.get())
    )
  }

  clear(): Observable<void> {
    return this.getItems().pipe(
      mergeMap(items =>
        // collect each item deletion observable into a single one
        forkJoin(items.map(item =>
          this.deleteItem(item.item_id)
        )),
      ),
      // make type system happy, return void
      map(() => {})
    )
  }
}
