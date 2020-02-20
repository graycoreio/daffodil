import { Injectable } from '@angular/core';
import { STATUS, InMemoryDbService } from 'angular-in-memory-web-api';

import { DaffProductImageFactory } from '@daffodil/product/testing';
import { DaffCartItem, DaffCart } from '@daffodil/cart';

import { DaffCartFactory } from '../factories/cart.factory';
import { DaffCartItemFactory } from '../factories/cart-item.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendCartService implements InMemoryDbService {
  public carts: DaffCart[] = [];

  constructor(
    private cartFactory: DaffCartFactory,
    private cartItemFactory: DaffCartItemFactory,
    private productImageFactory: DaffProductImageFactory
  ) {}

  post(reqInfo: any) {
    return reqInfo.utils.createResponse$(() => {
      let body: any = this.findCart(reqInfo.req.body.cartId);

      if (reqInfo.id === 'addToCart') {
        const matchedProductIndex = this.getMatchedProductIndex(
          reqInfo.req.body.cartId,
          reqInfo.req.body.productId
        );
        if (matchedProductIndex > -1) {
          this.addQtyToCartProduct(
            reqInfo.req.body.cartId,
            reqInfo.req.body.qty,
            matchedProductIndex
          );
        } else {
          this.addProductToCart(
            reqInfo.req.body.cartId,
            reqInfo.req.body
          );
        }
      } else if (reqInfo.id === 'clear') {
        this.clearCart(reqInfo.req.body.cartId);
      } else if (reqInfo.id === 'create') {
        body = this.create();
      }

      return {
        body,
        status: STATUS.OK
      };
    });
  }

  createDb() {
    return {
      cart: this.carts
    };
  }

  private findCart(cartId: string): DaffCart {
    return this.carts.find(cart => cart.id === cartId)
  }

  private getMatchedProductIndex(cartId: string, productId: string) {
    const cart = this.findCart(cartId);
    for (let i = 0; i < cart.items.length; i++) {
      if (productId === cart.items[i].product_id.toString()) {
        return i;
      }
    }

    return -1;
  }

  private addQtyToCartProduct(cartId: string, qty: number, matchedProductIndex: number) {
    this.findCart(cartId).items[matchedProductIndex].qty += qty;
  }

  private addProductToCart(cartId: string, reqBody) {
    const cartItem: DaffCartItem = this.cartItemFactory.create({image: this.productImageFactory.create()});
    cartItem.product_id = reqBody.productId;
    cartItem.qty = reqBody.qty;
    this.findCart(cartId).items.push(cartItem);
  }

  private clearCart(cartId: string): void {
    this.findCart(cartId).items = [];
  }

  private create(): Partial<DaffCart> {
    const cart = this.cartFactory.create();

    this.carts.push(cart);

    return {
      id: cart.id
    };
  }
}
