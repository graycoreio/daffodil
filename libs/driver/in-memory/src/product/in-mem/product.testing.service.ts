import { Injectable } from '@angular/core';

import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl
} from 'angular-in-memory-web-api';

import { ProductFactory } from '@daffodil/core/testing';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryProductTestingService implements InMemoryDbService {
  constructor(private productFactory: ProductFactory) {}

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb(): any {
    return {
      products: this.productFactory.createStyleTestingList()
    };
  }
}
