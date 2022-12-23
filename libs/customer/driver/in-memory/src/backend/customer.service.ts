import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS,
  RequestInfo,
} from 'angular-in-memory-web-api';

import { DaffCustomer } from '@daffodil/customer';
import { DaffCustomerFactory } from '@daffodil/customer/testing';

/**
 * An in-memory service that delegates customer queries to child backends
 * via the {@link DAFF_CUSTOMER_IN_MEMORY_BACKENDS}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerInMemoryBackendService implements InMemoryDbService {
  customers: DaffCustomer[] = [];

  constructor(
    private factory: DaffCustomerFactory,
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
    return {
      customers: this.customers,
    };
  }

  /**
   * Generates a token from a processor backend.
   *
   * @param reqInfo request object
   * @returns An http response object
   */
  get(reqInfo: RequestInfo) {
    const customer = this.factory.create();
    this.customers.push(customer);

    return reqInfo.utils.createResponse$(() => ({
      status: STATUS.OK,
      body: customer,
    }));
  }
}
