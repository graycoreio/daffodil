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
import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';

import { DAFF_CUSTOMER_IN_MEMORY_COLLECTION_NAME } from '../collection-names/customer.const';

/**
 * An in-memory service that delegates customer queries to child backends
 * via the {@link DAFF_CUSTOMER_IN_MEMORY_BACKENDS}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerInMemoryBackendService implements InMemoryDbService, DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_CUSTOMER_IN_MEMORY_COLLECTION_NAME;

  customers: Record<DaffCustomer['id'], DaffCustomer> = {};

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
   * Gets a customer.
   *
   * @param reqInfo request object
   * @returns An http response object
   */
  get(reqInfo: RequestInfo) {
    const customer = this.factory.create();
    this.customers[customer.id] = customer;

    return reqInfo.utils.createResponse$(() => ({
      status: STATUS.OK,
      body: customer,
    }));
  }

  put(reqInfo: RequestInfo) {
    switch (reqInfo.id) {
      case 'email':
        return this.changeEmail(reqInfo);

      case 'password':
        return this.changePassword(reqInfo);

      case 'customer':
        return this.updateCustomer(reqInfo);

      default:
        return reqInfo.utils.createResponse$(() => ({
          status: STATUS.NOT_FOUND,
        }));
    }
  }

  private updateCustomer(reqInfo: RequestInfo) {
    // TODO: fix bug where id can be nully
    // interface with auth to actually find logged in customer?
    const body = reqInfo.utils.getJsonBody(reqInfo.req);
    const customer = this.customers[body.id];

    if (!customer) {
      return reqInfo.utils.createResponse$(() => ({
        status: STATUS.NOT_FOUND,
      }));
    }

    this.customers[body.id] = {
      ...customer,
      ...body,
    };

    return reqInfo.utils.createResponse$(() => ({
      status: STATUS.OK,
      body: this.customers[body.id],
    }));
  }

  private changeEmail(reqInfo: RequestInfo) {
    // interface with auth to actually find logged in customer?
    // const customer = this.factory.create(reqInfo.utils.getJsonBody(reqInfo.req));
    // this.customers.push(customer);

    return reqInfo.utils.createResponse$(() => ({
      status: STATUS.OK,
      body: {},
    }));
  }

  private changePassword(reqInfo: RequestInfo) {
    // interface with auth to actually find logged in customer?
    // const customer = this.factory.create(reqInfo.utils.getJsonBody(reqInfo.req));
    // this.customers.push(customer);

    return reqInfo.utils.createResponse$(() => ({
      status: STATUS.OK,
      body: {},
    }));
  }
}
