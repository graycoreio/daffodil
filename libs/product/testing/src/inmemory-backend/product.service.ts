import { Injectable } from '@angular/core';

import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS
} from 'angular-in-memory-web-api';

import { DaffProduct } from '@daffodil/product';
import { DaffProductFactory } from '../factories/product.factory';
import { DaffProductImageFactory } from '../factories/product-image.factory';
import { IN_MEMORY_PRODUCT_IDS } from '../helpers/in-memory-product-ids';

/**
 * An in-memory service that stubs out the backend services for getting products.
 * 
 * @Param productFactory: DaffProductFactory instance
 * @Param productImageFactory: DaffProductImageFactory instance
 * @Param products: An array of Products
 */
@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendProductService implements InMemoryDbService {
  products: DaffProduct[];
  
  constructor(
    private productFactory: DaffProductFactory,
    private productImageFactory: DaffProductImageFactory) { 
    this.products = [
      this.productFactory.create({id: IN_MEMORY_PRODUCT_IDS[0], images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({id: IN_MEMORY_PRODUCT_IDS[1], images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({id: IN_MEMORY_PRODUCT_IDS[2], images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({id: IN_MEMORY_PRODUCT_IDS[3], images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({id: IN_MEMORY_PRODUCT_IDS[4], images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({id: IN_MEMORY_PRODUCT_IDS[5], images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({id: IN_MEMORY_PRODUCT_IDS[6], images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({id: IN_MEMORY_PRODUCT_IDS[7], images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({id: IN_MEMORY_PRODUCT_IDS[8], images: this.productImageFactory.createMany(5)})
    ]
  }

  /**
   * Automatically called as part of the InMemoryDbService to parse incoming urls to match the InMemory backend urls.
   * 
   * @param url initial url
   * @param utils utility to parse url
   * @returns ParsedRequestUrl
   */
  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  /**
   * Creates a fake database of products for the product inmemory backend service.
   * 
   * @returns A fake database of an array of products
   */
  createDb(): any {
    return {
      products: this.products
    };
  }

  /**
   * Returns products based on the url given.
   * 
   * @param reqInfo request object
   * @returns An http response object
   */
  get(reqInfo: any) {
    if(reqInfo.id === 'best-sellers') {
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
