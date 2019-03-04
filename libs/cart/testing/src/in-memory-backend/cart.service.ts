import { Injectable } from '@angular/core';
import { STATUS, InMemoryDbService } from 'angular-in-memory-web-api';

import { DaffProductImageFactory } from '@daffodil/product/testing';

import { CartItem } from '@daffodil/cart';
import { DaffCartFactory } from '../factories/cart.factory';
import { DaffCartItemFactory } from '../factories/cart-item.factory';

@Injectable()
export class DaffInMemoryBackendCartService implements InMemoryDbService {
  public cart;

  constructor(
    private cartFactory: DaffCartFactory,
    private cartItemFactory: DaffCartItemFactory,
    private productImageFactory: DaffProductImageFactory
  ) {
    this.cart = this.cartFactory.create();
  }

  post(reqInfo: any) {
    return reqInfo.utils.createResponse$(() => {
      if (reqInfo.id === 'addToCart') {
        const matchedProductIndex = this.getMatchedProductIndex(
          reqInfo.req.body.productId
        );
        if (matchedProductIndex > -1) {
          this.addQtyToCartProduct(reqInfo.req.body.qty, matchedProductIndex);
        } else {
          this.addProductToCart(reqInfo.req.body);
        }
      } else if (reqInfo.id === 'clear') {
        this.clearCart();
      }

      return {
        body: this.cart,
        status: STATUS.OK
      };
    });
  }

  createDb() {
    return {
      cart: this.cart
    };
  }

  private getMatchedProductIndex(productId: string) {
    for (let i = 0; i < this.cart.items.length; i++) {
      if (productId === this.cart.items[i].product_id) {
        return i;
      }
    }

    return -1;
  }

  private addQtyToCartProduct(qty: number, matchedProductIndex: number) {
    this.cart.items[matchedProductIndex].qty += qty;
  }

  private addProductToCart(reqBody) {
    const cartItem: CartItem = this.cartItemFactory.create({image: this.productImageFactory.create()});
    cartItem.product_id = reqBody.productId;
    cartItem.qty = reqBody.qty;
    this.cart.items.push(cartItem);
  }

  private clearCart(): void {
    this.cart.items = [];
  }
}
