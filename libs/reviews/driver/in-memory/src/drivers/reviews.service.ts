import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';
import { DaffProductReviews } from '@daffodil/reviews';
import { DaffProductReviewsServiceInterface } from '@daffodil/reviews/driver';

import { DAFF_REVIEWS_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffReviewsInMemoryService extends DaffInMemoryDriverBase implements DaffProductReviewsServiceInterface {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_REVIEWS_IN_MEMORY_COLLECTION_NAME);
  }

  list(): Observable<DaffProductReviews> {
    return this.http.get<DaffProductReviews>(`${this.url}/`);
  }
}
