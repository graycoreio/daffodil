import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, take } from 'rxjs/operators';
import { Product } from '@core/product/model/product';
import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl, RequestInfo, STATUS } from 'angular-in-memory-web-api';
import { ProductFactory } from '@core/product/testing/factories/product.factory';

@Injectable()
export class ProductTestingService implements InMemoryDbService {

  constructor(private productFactory: ProductFactory) { }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb() {
    return {
      products: [
        this.productFactory.create('10'),
        this.productFactory.create('20')
      ]
    };
  }
}
