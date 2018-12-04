import { Injectable } from '@angular/core';

import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS
} from 'angular-in-memory-web-api';

import { ProductFactory, Product } from '../../../../../index';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryProductTestingService implements InMemoryDbService {
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
            body: this.products.slice(0,4),
            status: STATUS.OK
          };
      });
    }

    return undefined;
  }
}
