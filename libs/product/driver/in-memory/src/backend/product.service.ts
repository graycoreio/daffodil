import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS,
} from 'angular-in-memory-web-api';

import { DaffProduct } from '@daffodil/product';
import {
  DaffProductFactory,
  DaffProductImageFactory,
} from '@daffodil/product/testing';

/**
 * An in-memory service that stubs out the backend services for getting products.
 *
 * @Param productFactory: DaffProductFactory instance
 * @Param productImageFactory: DaffProductImageFactory instance
 * @Param products: An array of Products
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendProductService implements InMemoryDbService {
  products: DaffProduct[];

  constructor(
    private productFactory: DaffProductFactory,
    private productImageFactory: DaffProductImageFactory) {
    this.products = [
      this.productFactory.create({ id: '1001', url_key: '1001', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1002', url_key: '1002', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1003', url_key: '1003', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1004', url_key: '1004', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1005', url_key: '1005', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1006', url_key: '1006', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1007', url_key: '1007', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1008', url_key: '1008', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1009', url_key: '1009', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1010', url_key: '1010', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1011', url_key: '1011', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1012', url_key: '1012', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1013', url_key: '1013', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1014', url_key: '1014', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1015', url_key: '1015', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1016', url_key: '1016', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1017', url_key: '1017', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1018', url_key: '1018', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1019', url_key: '1019', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1020', url_key: '1020', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1021', url_key: '1021', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1022', url_key: '1022', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1023', url_key: '1023', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1024', url_key: '1024', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1025', url_key: '1025', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1026', url_key: '1026', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1027', url_key: '1027', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1028', url_key: '1028', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1029', url_key: '1029', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1030', url_key: '1030', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1031', url_key: '1031', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1032', url_key: '1032', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1033', url_key: '1033', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1034', url_key: '1034', images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ id: '1035', url_key: '1035', images: this.productImageFactory.createMany(5) }),
    ];
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
      products: this.products,
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
      return reqInfo.utils.createResponse$(() => ({
        body: this.products.slice(0,4),
        status: STATUS.OK,
      }));
    }

    return undefined;
  }
}
