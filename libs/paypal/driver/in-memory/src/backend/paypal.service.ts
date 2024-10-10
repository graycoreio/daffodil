import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS,
} from 'angular-in-memory-web-api';

import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';
import { DaffPaypalExpressTokenResponse } from '@daffodil/paypal';
import { DaffPaypalExpressTokenResponseFactory } from '@daffodil/paypal/testing';

import { DAFF_PAYPAL_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendPaypalService implements InMemoryDbService, DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_PAYPAL_IN_MEMORY_COLLECTION_NAME;

  paypalTokenResponse: DaffPaypalExpressTokenResponse;

  constructor(private paypalTokenResponseFactory: DaffPaypalExpressTokenResponseFactory) {
    this.paypalTokenResponse = this.paypalTokenResponseFactory.create();
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb(): any {
    return {
      paypalTokenResponse: this.paypalTokenResponse,
    };
  }

  get(reqInfo: any) {
    return reqInfo.utils.createResponse$(() => ({
      body: this.paypalTokenResponse,
      status: STATUS.OK,
    }));
  }
}
