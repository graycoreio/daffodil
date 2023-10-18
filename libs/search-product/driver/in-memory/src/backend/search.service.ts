import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS,
  RequestInfo,
} from 'angular-in-memory-web-api';

import { DaffProduct } from '@daffodil/product';
import { DaffInMemoryBackendProductService } from '@daffodil/product/driver/in-memory';
import { daffSearchTransformResultsToCollection } from '@daffodil/search';
import { DaffSearchDriverResponse } from '@daffodil/search/driver';
import { DaffSearchInMemoryChildBackend } from '@daffodil/search/driver/in-memory';
import {
  daffTransformProductsToSearchResults,
  DAFF_SEARCH_PRODUCT_RESULT_KIND,
} from '@daffodil/search-product';

/**
 * An in-memory service that stubs out the backend services for searching products.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffSearchProductInMemoryBackendService implements InMemoryDbService, DaffSearchInMemoryChildBackend {
  readonly kind = DAFF_SEARCH_PRODUCT_RESULT_KIND;

  constructor(
    private productBackend: DaffInMemoryBackendProductService,
  ) {}

  private matchProduct(product: DaffProduct, query: string): boolean {
    return product.name.includes(query)
      || product.description?.includes(query)
      || product.id.includes(query);
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
   * @docs-private
   */
  createDb(): any {
    return {};
  }

  /**
   * Searches the product in-memory backend with the query.
   * The search query is passed as the `query` URL query parameter.
   *
   * @param reqInfo request object
   * @returns An http response object
   */
  get(reqInfo: RequestInfo) {
    const query = reqInfo.query.get('query')[0];
    return reqInfo.utils.createResponse$(() => ({
      body: <DaffSearchDriverResponse>{
        collection: daffSearchTransformResultsToCollection(daffTransformProductsToSearchResults(
          this.productBackend.products.filter(product => this.matchProduct(product, query)),
        )),
        metadata: {},
      },
      status: STATUS.OK,
    }));
  }
}
