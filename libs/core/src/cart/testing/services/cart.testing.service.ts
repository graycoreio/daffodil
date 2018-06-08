import { Injectable } from '@angular/core';

import { CartFactory } from '../../testing/factories/cart.factory';

import { InMemoryDbService, STATUS } from 'angular-in-memory-web-api';

@Injectable()
export class CartTestingService implements InMemoryDbService {

  constructor(private cartFactory: CartFactory) { }

  post(reqInfo: any) {
    return reqInfo.utils.createResponse$(() => {
      let cart = this.cartFactory.addCartItemToCart(reqInfo.req.body);
      
      return {
        body: cart,
        status: STATUS.OK
      }
    })
  }

  createDb() {
    return {
      cart: this.cartFactory.create()
    };
  }
}
