import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS,
  RequestInfo,
} from 'angular-in-memory-web-api';

import { DaffCustomerStoreCredit } from '@daffodil/customer-store-credit';
import { DaffCustomerStoreCreditFactory } from '@daffodil/customer-store-credit/testing';
import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';

import { DAFF_CUSTOMER_STORE_CREDIT_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

/**
 * An in-memory service that handles customer store credit HTTP requests.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerStoreCreditInMemoryBackendService implements InMemoryDbService, DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_CUSTOMER_STORE_CREDIT_IN_MEMORY_COLLECTION_NAME;

  storeCredit: DaffCustomerStoreCredit;

  constructor(
    private factory: DaffCustomerStoreCreditFactory,
  ) {
    this.storeCredit = this.factory.create();
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
    return {
      storeCredit: this.storeCredit,
    };
  }

  /**
   * Gets the customer's store credit.
   *
   * @param reqInfo request object
   * @returns An http response object
   */
  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      status: STATUS.OK,
      body: this.storeCredit,
    }));
  }
}
