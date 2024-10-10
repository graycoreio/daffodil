import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
  RequestInfo,
  STATUS,
} from 'angular-in-memory-web-api';

import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';
import { DaffNewsletterSubmission } from '@daffodil/newsletter';

import { DAFF_NEWSLETTER_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

/**
 * An in-memory service that handles newsletter requests.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendNewsletterService implements InMemoryDbService, DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_NEWSLETTER_IN_MEMORY_COLLECTION_NAME;

  newsletters: Array<DaffNewsletterSubmission> = [];

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb(): any {
    return {
      newsletters: this.newsletters,
    };
  }

  post(reqInfo: RequestInfo) {
    const body = reqInfo.utils.getJsonBody(reqInfo.req);

    return reqInfo.utils.createResponse$(() => {
      // validate that its not empty
      if (body === undefined) {
        return {
          status: STATUS.BAD_REQUEST,
          statusText: 'Payload is undefined',
        };
      // validate that it doesn't already exist
      } else if (this.newsletters.includes(body)) {
        return {
          status: STATUS.BAD_REQUEST,
          statusText: 'Already contains submission',
        };
      } else {
        this.newsletters.push(body);
        return {
          status: STATUS.OK,
          body: true,
        };
      }
    });
  }
}
