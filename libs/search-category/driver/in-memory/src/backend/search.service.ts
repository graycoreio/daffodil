import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS,
  RequestInfo,
} from 'angular-in-memory-web-api';

import { DaffCategory } from '@daffodil/category';
import { DaffInMemoryBackendCategoryService } from '@daffodil/category/driver/in-memory';
import { daffTransformCategoriesToSearchResults } from '@daffodil/search-category';
import { DaffSearchInMemoryChildBackend } from '@daffodil/search/driver/in-memory';

/**
 * An in-memory service that stubs out the backend services for searching categories.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffSearchCategoryInMemoryBackendService implements InMemoryDbService, DaffSearchInMemoryChildBackend {
  constructor(
    private categoryBackend: DaffInMemoryBackendCategoryService,
  ) {}

  private matchCategory(category: DaffCategory, query: string): boolean {
    return category.name.includes(query)
      || category.description?.includes(query)
      || category.id.includes(query);
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
   * Searches the category in-memory backend with the query.
   * The search query is passed as the `query` URL query parameter.
   *
   * @param reqInfo request object
   * @returns An http response object
   */
  get(reqInfo: RequestInfo) {
    const query = reqInfo.query.get('query')[0];
    return reqInfo.utils.createResponse$(() => ({
      body: daffTransformCategoriesToSearchResults(
        this.categoryBackend.categories.filter(category => this.matchCategory(category, query)),
      ),
      status: STATUS.OK,
    }));
  }
}
