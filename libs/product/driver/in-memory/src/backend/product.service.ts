import { isPlatformBrowser } from '@angular/common';
import {
  inject,
  Injectable,
  PLATFORM_ID,
  TransferState,
} from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  RequestInfo,
  STATUS,
} from 'angular-in-memory-web-api';

import { daffUriTruncateLeadingSlash } from '@daffodil/core/routing';
import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';
import { DaffProduct } from '@daffodil/product';
import { DaffProductExtensionFactory } from '@daffodil/product/testing';

import { DAFF_PRODUCT_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';
import { TRANSFER_STATE_KEY } from './transfer-state-key';
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

  constructor(){
    const transferState = inject(TransferState);
    const platform = inject(PLATFORM_ID);
    const productFactory = inject(DaffProductExtensionFactory);

    if(isPlatformBrowser(platform)) {
      this._products = transferState.get(TRANSFER_STATE_KEY, productFactory.createMany(35));
    } else {
      this._products = productFactory.createMany(35);
      transferState.set(TRANSFER_STATE_KEY, this._products);
    }
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
  get(reqInfo: RequestInfo) {
    if (reqInfo.id?.includes('.html')) {
      const product =  this._products.find((p) => daffUriTruncateLeadingSlash(p.url)  === reqInfo.id);

      if(!product) {
        return undefined;
      }

      return reqInfo.utils.createResponse$(() => ({
        body: product,
        status: STATUS.OK,
      }));
    }
    return undefined;
  }
}
