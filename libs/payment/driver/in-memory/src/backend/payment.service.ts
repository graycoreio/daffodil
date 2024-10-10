import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS,
  RequestInfo,
} from 'angular-in-memory-web-api';

import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';
import { DaffPaymentResponseKindFactory } from '@daffodil/payment/testing';

import { DAFF_PAYMENT_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

/**
 * An in-memory service that delegates payment queries to child backends
 * via the {@link DAFF_PAYMENT_IN_MEMORY_BACKENDS}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffPaymentInMemoryBackendService implements InMemoryDbService, DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_PAYMENT_IN_MEMORY_COLLECTION_NAME;

  constructor(
    private factory: DaffPaymentResponseKindFactory,
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
   * Generates a token from a processor backend.
   *
   * @param reqInfo request object
   * @returns An http response object
   */
  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      status: STATUS.OK,
      body: this.factory.create(),
    }));
  }
}
