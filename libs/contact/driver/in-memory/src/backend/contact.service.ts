import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfo,
  STATUS,
} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { DaffContactRequest } from '@daffodil/contact/driver';
import { DaffContactResponse } from '@daffodil/contact/driver';
import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';

import { DAFF_CONTACT_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendContactService implements InMemoryDbService, DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_CONTACT_IN_MEMORY_COLLECTION_NAME;

  submissions: DaffContactRequest[] = [];

  createDb() {
    return {
      submissions: this.submissions,
    };
  }

  post(reqInfo: RequestInfo): Observable<DaffContactResponse> {
    const body = reqInfo.utils.getJsonBody(reqInfo.req);

    return reqInfo.utils.createResponse$(() => {
      // validate that its not empty
      if (body === undefined) {
        return {
          status: STATUS.BAD_REQUEST,
          statusText: 'Payload is undefined',
        };
      // validate that it doesn't already exist
      } else if (this.submissions.includes(body)) {
        return {
          status: STATUS.BAD_REQUEST,
          statusText: 'Already contains submission',
        };
      } else {
        this.submissions.push(body);
        return {
          status: STATUS.OK,
          body: { message: 'Success!' },
        };
      }
    });
  }
}
