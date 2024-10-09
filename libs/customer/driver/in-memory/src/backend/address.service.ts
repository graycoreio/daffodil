import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS,
  RequestInfo,
} from 'angular-in-memory-web-api';

import { DaffCustomerAddress } from '@daffodil/customer';
import { DaffCustomerAddressFactory } from '@daffodil/customer/testing';
import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';

import { DAFF_CUSTOMER_ADDRESS_IN_MEMORY_COLLECTION_NAME } from '../collection-names/address.const';

/**
 * An in-memory service that handles customer address HTTP requests.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerAddressInMemoryBackendService implements InMemoryDbService, DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_CUSTOMER_ADDRESS_IN_MEMORY_COLLECTION_NAME;

  addresses: Record<DaffCustomerAddress['id'], DaffCustomerAddress> = {};

  constructor(
    private factory: DaffCustomerAddressFactory,
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
      addresses: this.addresses,
    };
  }

  /**
   * Gets a customer.
   *
   * @param reqInfo request object
   * @returns An http response object
   */
  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      if (reqInfo.id) {
        const address = this.addresses[reqInfo.id];
        return address
          ? {
            status: STATUS.OK,
            body: address,
          }
          : {
            status: STATUS.NOT_FOUND,
          };
      } else {
        return {
          status: STATUS.OK,
          body: Object.values(this.addresses),
        };
      }
    });
  }

  put(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      if (!reqInfo.id || !this.addresses[reqInfo.id]) {
        return {
          status: STATUS.NOT_FOUND,
        };
      }

      this.addresses[reqInfo.id] = {
        ...this.addresses[reqInfo.id],
        ...reqInfo.utils.getJsonBody(reqInfo.req),
      };

      return {
        status: STATUS.OK,
        body: Object.values(this.addresses),
      };
    });
  }

  post(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const address = this.factory.create(reqInfo.utils.getJsonBody(reqInfo.req));

      this.addresses[address.id] = address;

      return {
        status: STATUS.OK,
        body: Object.values(this.addresses),
      };
    });
  }

  delete(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      if (!reqInfo.id || !this.addresses[reqInfo.id]) {
        return {
          status: STATUS.NOT_FOUND,
        };
      }

      delete this.addresses[reqInfo.id];

      return {
        status: STATUS.OK,
        body: Object.values(this.addresses),
      };
    });
  }
}
