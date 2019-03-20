import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl
} from 'angular-in-memory-web-api';

import { Product } from '@daffodil/product';
import { Cart } from '@daffodil/cart';
import { Order } from '@daffodil/checkout';
import { DaffInMemoryBackendProductService } from '@daffodil/product/testing';
import { DaffInMemoryBackendCartService } from '@daffodil/cart/testing';
import { DaffInMemoryBackendCheckoutService } from '@daffodil/checkout/testing';

@Injectable({
  providedIn: 'root'
})
export class DemoInMemoryService implements InMemoryDbService {
  constructor(
    private productTestingService: DaffInMemoryBackendProductService,
    private cartTestingService: DaffInMemoryBackendCartService,
    private checkoutTestingService: DaffInMemoryBackendCheckoutService
  ) {}

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  post(reqInfo: any) {
    const collectionName = reqInfo.collectionName;
    if (collectionName === 'cart') {
      return this.cartTestingService.post(reqInfo);
    } else if (collectionName === 'checkout') {
      return this.checkoutTestingService.post(reqInfo);
    }

    return undefined;
  }

  get(reqInfo: any) {
    const collectionName = reqInfo.collectionName;
    if (collectionName === 'products') {
      return this.productTestingService.get(reqInfo);
    }
  }

  createDb(): MockDaffDatabase {
    return {
      ...this.productTestingService.createDb(),
      ...this.cartTestingService.createDb(),
      ...this.checkoutTestingService.createDb()
    };
  }
}

export interface MockDaffDatabase {
  products: Product[];
  cart: Cart;
  order: Order;
}
