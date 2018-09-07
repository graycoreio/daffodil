import { Injectable } from '@angular/core';

import { ProductFactory, Product } from '@daffodil/core';

import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl, STATUS } from 'angular-in-memory-web-api';


@Injectable()
export class ProductTestingService implements InMemoryDbService {

  products: Product[];

  constructor(private productFactory: ProductFactory) { 
    this.products = this.productFactory.createStyleTestingList();
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb(): any {
    return {
      products: this.products
    };
  }

  get(reqInfo: any) {
    if(reqInfo.id === "best-sellers") {
      return reqInfo.utils.createResponse$(() => {
          return {
            body: this.products.splice(1,4),
            status: STATUS.OK
          };
      });
    }

    return undefined;
  }
}
