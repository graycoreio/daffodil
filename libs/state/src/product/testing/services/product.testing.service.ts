import { Injectable } from '@angular/core';

import { ProductFactory } from '@daffodil/core';

import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl } from 'angular-in-memory-web-api';


@Injectable()
export class ProductTestingService implements InMemoryDbService {

  constructor(private productFactory: ProductFactory) { }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb(): any {
    return {
      products: this.productFactory.createStyleTestingList()
    };
  }
}
