import { Injectable } from '@angular/core';

import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS
} from 'angular-in-memory-web-api';

import { DaffProductFactory } from '@daffodil/productTesting';
import { Product } from '@daffodil/productCore';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryProductTestingService implements InMemoryDbService {
  products: Product[];
  
  constructor(private productFactory: DaffProductFactory) { 
    this.products = [
      this.productFactory.create({id: '1001'}),
      this.productFactory.create({id: '1002'}),
      this.productFactory.create({id: '1003'}),
      this.productFactory.create({id: '1004'}),
      this.productFactory.create({id: '1005'}),
      this.productFactory.create({id: '1006'}),
      this.productFactory.create({id: '1007'}),
      this.productFactory.create({id: '1008'}),
      this.productFactory.create({id: '1009'})
    ]
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
