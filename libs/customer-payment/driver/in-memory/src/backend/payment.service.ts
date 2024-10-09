import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS,
  RequestInfo,
} from 'angular-in-memory-web-api';

import { DaffCustomerPayment } from '@daffodil/customer-payment';
import { DaffCustomerPaymentFactory } from '@daffodil/customer-payment/testing';
import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';

import { DAFF_CUSTOMER_PAYMENT_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

/**
 * An in-memory service that handles customer payment HTTP requests.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCustomerPaymentInMemoryBackendService implements InMemoryDbService, DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_CUSTOMER_PAYMENT_IN_MEMORY_COLLECTION_NAME;

  payments: Record<DaffCustomerPayment['id'], DaffCustomerPayment> = {};

  constructor(
    private factory: DaffCustomerPaymentFactory,
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
      payments: this.payments,
    };
  }

  /**
   * Gets a customer payment.
   *
   * @param reqInfo request object
   * @returns An http response object
   */
  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      if (reqInfo.id) {
        const payment = this.payments[reqInfo.id];
        return payment
          ? {
            status: STATUS.OK,
            body: payment,
          }
          : {
            status: STATUS.NOT_FOUND,
          };
      } else {
        return {
          status: STATUS.OK,
          body: Object.values(this.payments),
        };
      }
    });
  }

  put(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      if (!reqInfo.id || !this.payments[reqInfo.id]) {
        return {
          status: STATUS.NOT_FOUND,
        };
      }

      this.payments[reqInfo.id] = {
        ...this.payments[reqInfo.id],
        ...reqInfo.utils.getJsonBody(reqInfo.req),
      };

      return {
        status: STATUS.OK,
        body: Object.values(this.payments),
      };
    });
  }

  post(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const payment = this.factory.create(reqInfo.utils.getJsonBody(reqInfo.req));

      this.payments[payment.id] = payment;

      return {
        status: STATUS.OK,
        body: Object.values(this.payments),
      };
    });
  }

  delete(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      if (!reqInfo.id || !this.payments[reqInfo.id]) {
        return {
          status: STATUS.NOT_FOUND,
        };
      }

      delete this.payments[reqInfo.id];

      return {
        status: STATUS.OK,
        body: Object.values(this.payments),
      };
    });
  }
}
