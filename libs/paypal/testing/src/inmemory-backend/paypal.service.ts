import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  STATUS
} from 'angular-in-memory-web-api';

import { DaffPaypalTokenResponse } from '@daffodil/paypal';

import { DaffPaypalTokenResponseFactory } from '../factories/paypal-token-response.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendPaypalService implements InMemoryDbService {
  paypalTokenResponse: DaffPaypalTokenResponse;

  constructor(private paypalTokenResponseFactory: DaffPaypalTokenResponseFactory) {
    this.paypalTokenResponse = this.paypalTokenResponseFactory.create();
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb(): any {
    return {
      paypalTokenResponse: this.paypalTokenResponse
    };
  }

  get(reqInfo: any) {
    return reqInfo.utils.createResponse$(() => {
      return {
        body: this.paypalTokenResponse,
        status: STATUS.OK
      };
    });
  }
}
