import { Injectable } from '@angular/core';

import { CartFactory } from '../../testing/factories/cart.factory';
import { InMemoryDbService, STATUS } from 'angular-in-memory-web-api';
import { CartItem } from '@daffodil/core';

@Injectable()
export class CartTestingService implements InMemoryDbService {

  private cart;

  constructor(private cartFactory: CartFactory) { 
    this.cart = this.cartFactory.create();
  }

  post(reqInfo: any) {
    return reqInfo.utils.createResponse$(() => {

      if(reqInfo.id === "addToCart") {
        let cartItem: CartItem = this.cartFactory.createCartItem();
        this.cart.items.push(cartItem);
        this.cart.items[0].product_id = reqInfo.req.body.productId;
        this.cart.items[0].qty = reqInfo.req.body.qty;
      }
      
      return {
        body: this.cart,
        status: STATUS.OK
      }
    })
  }

  createDb() {
    return {
      cart: this.cart
    };
  }
}
