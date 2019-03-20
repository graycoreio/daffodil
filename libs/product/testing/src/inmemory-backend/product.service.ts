import { Injectable } from '@angular/core';

import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS
} from 'angular-in-memory-web-api';

import { Product } from '@daffodil/product';
import { DaffProductFactory } from '../factories/product.factory';
import { DaffProductImageFactory } from '../factories/product-image.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendProductService implements InMemoryDbService {
  products: Product[];
  
  constructor(
    private productFactory: DaffProductFactory,
    private productImageFactory: DaffProductImageFactory) { 
    this.products = [
      this.productFactory.create({id: '1001', images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({id: '1002', images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({id: '1003', images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({id: '1004', images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({id: '1005', images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({id: '1006', images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({id: '1007', images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({id: '1008', images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({id: '1009', images: this.productImageFactory.createMany(5)})
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
