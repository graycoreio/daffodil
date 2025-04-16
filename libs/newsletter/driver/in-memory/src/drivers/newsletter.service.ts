import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';
import {
  DaffNewsletterSubmission,
  DaffNewsletterResponse,
} from '@daffodil/newsletter';
import { DaffNewsletterServiceInterface } from '@daffodil/newsletter/driver';

import { DAFF_NEWSLETTER_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

/**
 * The newsletter inmemory driver to mock the newsletter backend service.
 *
 * @Param HttpClient
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryNewsletterService extends DaffInMemoryDriverBase implements DaffNewsletterServiceInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_NEWSLETTER_IN_MEMORY_COLLECTION_NAME);
  }

  /**
   * Sends your newsletter submission data.
   *
   * @param payload DaffNewsletterSubmission
   * @returns An Observable of DaffNewsletterResponse
   */
  send(payload: DaffNewsletterSubmission): Observable<DaffNewsletterResponse> {
    return this.http.post<DaffNewsletterResponse>(this.url, payload);
  }
}
