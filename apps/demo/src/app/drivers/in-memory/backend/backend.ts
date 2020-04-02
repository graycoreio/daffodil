import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
	RequestInfo
} from 'angular-in-memory-web-api';

import { DaffProduct } from '@daffodil/product';
import { DaffCart } from '@daffodil/cart';
import { Order } from '@daffodil/checkout';
import { DaffInMemoryBackendProductService } from '@daffodil/product/testing';
import { DaffInMemoryBackendCartRootService } from '@daffodil/cart/testing';
import { DaffInMemoryBackendCheckoutService } from '@daffodil/checkout/testing';
import { DaffInMemoryBackendNavigationService } from '@daffodil/navigation/testing';
import { DaffNavigationTree } from '@daffodil/navigation';

@Injectable({
  providedIn: 'root'
})
export class DemoInMemoryService implements InMemoryDbService {
  constructor(
    private productTestingService: DaffInMemoryBackendProductService,
    private cartTestingService: DaffInMemoryBackendCartRootService,
    private checkoutTestingService: DaffInMemoryBackendCheckoutService,
    private navigationTestingService: DaffInMemoryBackendNavigationService
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
    } else if (collectionName === 'navigation') {
      return this.navigationTestingService.get(reqInfo);
    }
  }

  createDb(reqInfo: RequestInfo): MockDaffDatabase {
    return {
      ...this.productTestingService.createDb(),
      ...this.cartTestingService.createDb(reqInfo),
      ...this.checkoutTestingService.createDb(),
      ...this.navigationTestingService.createDb()
    };
  }
}

export interface MockDaffDatabase {
  products: DaffProduct[];
  cart: DaffCart;
  order: Order;
  navigation: DaffNavigationTree;
}
