import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, take } from 'rxjs/operators';

import { Product } from '../../model/product';
import { ProductFactory } from '../../testing/factories/product.factory';

import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl, RequestInfo, STATUS } from 'angular-in-memory-web-api';


@Injectable()
export class ProductTestingService implements InMemoryDbService {

  constructor(private productFactory: ProductFactory) { }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    console.log('parseRequestUrl');
    return utils.parseRequestUrl(url);
  }

  createDb() {
    return {
      products: [
        this.productFactory.create(),
        this.productFactory.create()
      ]
    };
  }
}
