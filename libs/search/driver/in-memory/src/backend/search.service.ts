import { HttpResponse } from '@angular/common/http';
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
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { DaffSearchResult } from '@daffodil/search';

import { DAFF_SEARCH_IN_MEMORY_BACKENDS } from '../injection-tokens/backends.token';
import { DaffSearchInMemoryChildBackend } from '../interfaces/public_api';

/**
 * An in-memory service that delegates search queries to child backends
 * via the {@link DAFF_SEARCH_IN_MEMORY_BACKENDS}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendSearchDriver implements InMemoryDbService {
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
      switchMap((respList: HttpResponse<DaffSearchResult[]>[]) => reqInfo.utils.createResponse$(() => ({
        status: STATUS.OK,
        body: [].concat(...respList.map(resp => resp.body)),
      }))),
    );
  }
}
