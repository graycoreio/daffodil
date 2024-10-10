import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfoUtilities,
  ParsedRequestUrl,
} from 'angular-in-memory-web-api';

import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';
import { DaffNewsletterUnion } from '@daffodil/newsletter';

import { DAFF_NEWSLETTER_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryBackendNewsletterService implements InMemoryDbService, DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_NEWSLETTER_IN_MEMORY_COLLECTION_NAME;

  newsletters: DaffNewsletterUnion[] = [];

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    return utils.parseRequestUrl(url);
  }

  createDb(): any {
    return {
      newsletters: this.newsletters,
    };
  }
  //validate that its not empty
  //validate that it doesn't already exist
  post(reqInfo: any) {
    if (reqInfo === undefined) {
      return Error('Payload is undefined');
    } else if (this.newsletters.indexOf(reqInfo) > -1) {
      return Error('Already contains submission');
    } else {
      this.newsletters.push(reqInfo);
      return reqInfo;
    }
  }
}
