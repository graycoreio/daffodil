import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  STATUS,
} from 'angular-in-memory-web-api';

import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';

import { DAFF_AUTHORIZE_NET_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';
import { DAFF_IN_MEMORY_AUTHORIZE_NET_PAYMENT_ID } from '../drivers/authorize-net-payment-id';

@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendAuthorizenetService implements InMemoryDbService, DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_AUTHORIZE_NET_IN_MEMORY_COLLECTION_NAME;

  createDb(): any {
    return {};
  }

  get(reqInfo: any) {
    return reqInfo.utils.createResponse$(() => ({
      body: {
        code: DAFF_IN_MEMORY_AUTHORIZE_NET_PAYMENT_ID,
      },
      status: STATUS.OK,
    }));
  }
}
