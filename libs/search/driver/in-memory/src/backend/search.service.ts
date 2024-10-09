import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS,
  RequestInfo,
} from 'angular-in-memory-web-api';
import {
  combineLatest,
  Observable,
} from 'rxjs';
import {
  map,
  switchMap,
} from 'rxjs/operators';

import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';
import { DaffSearchDriverResponse } from '@daffodil/search/driver';

import { DAFF_SEARCH_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';
import { DAFF_SEARCH_IN_MEMORY_BACKENDS } from '../injection-tokens/backends.token';
import { DaffSearchInMemoryChildBackend } from '../interfaces/public_api';

/**
 * An in-memory service that delegates search queries to child backends
 * via the {@link DAFF_SEARCH_IN_MEMORY_BACKENDS}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendSearchDriver implements InMemoryDbService, DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_SEARCH_IN_MEMORY_COLLECTION_NAME;

  constructor(
    @Inject(DAFF_SEARCH_IN_MEMORY_BACKENDS) private backends: DaffSearchInMemoryChildBackend[],
  ) {}

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
   * Searches for entities in child backends.
   *
   * @param reqInfo request object
   * @returns An http response object
   */
  get(reqInfo: RequestInfo) {
    const responses = this.backends.map(backend => backend.get(reqInfo));
    return combineLatest(responses).pipe(
      map(resps =>
        resps.reduce((acc, resp) => {
          acc.collection = {
            ...acc.collection,
            ...resp.body.collection,
          };
          return acc;
        }, <DaffSearchDriverResponse>{
          metadata: {},
        }),
      ),
      switchMap(resp => reqInfo.utils.createResponse$(() => ({
        status: STATUS.OK,
        body: resp,
      }))),
    );
  }
}
