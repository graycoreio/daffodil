import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, take } from 'rxjs/operators';

import { Cart } from '../../model/cart';
import { CartFactory } from '../../testing/factories/cart.factory';

import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl, RequestInfo, STATUS } from 'angular-in-memory-web-api';

@Injectable()
export class CartTestingService implements InMemoryDbService {

  constructor(private cartFactory: CartFactory) { }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb() {
    return {
      cart: this.cartFactory.create()
    };
  }
}
