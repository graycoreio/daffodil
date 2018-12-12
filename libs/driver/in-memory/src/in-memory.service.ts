import { Injectable } from '@angular/core';

import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl
} from 'angular-in-memory-web-api';
import { Cart } from '@daffodil/core';

import { DaffInMemoryCartTestingService } from './cart/in-mem/cart.testing.service';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryService implements InMemoryDbService {
  constructor(
    private cartTestingService: DaffInMemoryCartTestingService
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

  createDb(): MockDaffDatabase {
    return {
      ...this.cartTestingService.createDb()
    };
  }
}

export interface MockDaffDatabase {
  cart: Cart;
}
