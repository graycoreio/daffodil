import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS,
} from 'angular-in-memory-web-api';

import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductImageFactory,
  DaffProductExtensionFactory,
} from '@daffodil/product/testing';

import { DAFF_PRODUCT_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

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
export class DaffInMemoryBackendProductService implements InMemoryDbService, DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_PRODUCT_IN_MEMORY_COLLECTION_NAME;

  protected _products: DaffProduct[] = [];

  /**
   * The collection of products in the backend.
   */
  get products(): DaffProduct[] {
    return this._products;
  };

  constructor(
    private productFactory: DaffProductExtensionFactory,
    private productImageFactory: DaffProductImageFactory) {
    this._products = [
      '1001',
      '1002',
      '1003',
      '1004',
      '1005',
      '1006',
      '1007',
      '1008',
      '1009',
      '1010',
      '1011',
      '1012',
      '1013',
      '1014',
      '1015',
      '1016',
      '1017',
      '1018',
      '1019',
      '1020',
      '1021',
      '1022',
      '1023',
      '1024',
      '1025',
      '1026',
      '1027',
      '1028',
      '1029',
      '1030',
      '1031',
      '1032',
      '1033',
      '1034',
      '1035',
    ].map(id => this.productFactory.create({ id, url: `/${id}` }));
  }

  /**
   * Automatically called as part of the InMemoryDbService to parse incoming urls to match the InMemory backend urls.
   *
   * @param url initial url
   * @param utils utility to parse url
   * @returns ParsedRequestUrl
   * @docs-private
   */
  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  /**
   * Creates a fake database of products for the product inmemory backend service.
   *
   * @returns A fake database of an array of products
   * @docs-private
   */
  createDb(): any {
    return {
      products: this._products,
    };
  }

  /**
   * Returns products based on the url given.
   *
   * @param reqInfo request object
   * @returns An http response object
   */
  get(reqInfo: any) {
    if (reqInfo.id === 'best-sellers') {
      return reqInfo.utils.createResponse$(() => ({
        body: this._products.slice(0,4),
        status: STATUS.OK,
      }));
    }

    return undefined;
  }
}
