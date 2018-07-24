import { Injectable } from '@angular/core';

import { ProductTestingService } from '../../product/testing/services/product.testing.service';

import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl } from 'angular-in-memory-web-api';
import { Product } from '@daffodil/core';
import { CartTestingService } from '../../cart/testing/services/cart.testing.service';
import { Cart } from '@daffodil/core';

@Injectable()
export class MockService implements InMemoryDbService{
  constructor(
    private productTestingService: ProductTestingService,
    private cartTestingService: CartTestingService
  ) {}

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  post(reqInfo: any) {
    const collectionName = reqInfo.collectionName;
    if (collectionName === 'cart') {
      return this.cartTestingService.post(reqInfo);
    }

    return undefined;
  }

  createDb() : MockDatabase {
    return {
      ...this.productTestingService.createDb(),
      ...this.cartTestingService.createDb()
    };
  }
}

export interface MockDatabase {
  products: Product[],
  cart: Cart
}
