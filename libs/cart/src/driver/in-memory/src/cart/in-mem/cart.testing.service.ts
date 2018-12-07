import { Injectable } from '@angular/core';
import { InMemoryDbService, STATUS } from 'angular-in-memory-web-api';

import { CartItem, CartFactory } from '../../../../../index';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryCartTestingService implements InMemoryDbService {
  private cart;

  constructor(private cartFactory: CartFactory) {
    this.cart = this.cartFactory.create();
  }

  post(reqInfo: any) {
    return reqInfo.utils.createResponse$(() => {
      if (reqInfo.id === 'addToCart') {
        let matchedProductIndex = this.getMatchedProductIndex(
          reqInfo.req.body.productId
        );
        if (matchedProductIndex > -1) {
          this.addQtyToCartProduct(reqInfo.req.body.qty, matchedProductIndex);
        } else {
          this.addProductToCart(reqInfo.req.body);
        }
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
    let cartItem: CartItem = this.cartFactory.createCartItem();
    cartItem.product_id = reqBody.productId;
    cartItem.qty = reqBody.qty;
    this.cart.items.push(cartItem);
  }
}
