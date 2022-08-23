import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffProductReviews } from '@daffodil/reviews';
import { DaffProductReviewsServiceInterface } from '@daffodil/reviews/driver';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffReviewsInMemoryService implements DaffProductReviewsServiceInterface {
  url = '/api/reviews';

  constructor(private http: HttpClient) {}

  list(): Observable<DaffProductReviews> {
    return this.http.get<DaffProductReviews>(`${this.url}/`);
  }
}
