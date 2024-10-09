import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';
import { DaffNewsletterUnion } from '@daffodil/newsletter';
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
export class DaffInMemoryNewsletterService extends DaffInMemoryDriverBase implements DaffNewsletterServiceInterface<DaffNewsletterUnion, DaffNewsletterUnion>{
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_NEWSLETTER_IN_MEMORY_COLLECTION_NAME);
  }

  /**
   * Sends your newsletter submission data.
   *
   * @param payload DaffNewsletterUnion
   * @returns An Observable of DaffNewsletterUnion
   */
  send(payload: DaffNewsletterUnion): Observable<DaffNewsletterUnion> {
    return this.http.post<DaffNewsletterUnion>(this.url, payload);
  }

}
