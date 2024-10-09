import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfo,
  STATUS,
} from 'angular-in-memory-web-api';

import { DaffInMemorySingleRouteableBackend } from '@daffodil/driver/in-memory';
import { DaffProductReviews } from '@daffodil/reviews';
import { DaffProductReviewsFactory } from '@daffodil/reviews/testing';

import { DAFF_REVIEWS_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

/**
 * An in-memory service that stubs out the backend services for getting reviews.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffReviewsInMemoryBackendService implements InMemoryDbService, DaffInMemorySingleRouteableBackend {
  readonly collectionName = DAFF_REVIEWS_IN_MEMORY_COLLECTION_NAME;

  reviews: DaffProductReviews;

  constructor(
    private reviewsFactory: DaffProductReviewsFactory,
  ) {
    this.reviews = this.reviewsFactory.create();
  }

  /**
   * Creates a fake database of reviews for the reviews inmemory backend service.
   *
   * @docs-private
   * @returns A fake database of an array of reviews
   */
  createDb(reqInfo: RequestInfo): any {
    if (reqInfo) {
      const seedData = reqInfo.utils.getJsonBody(reqInfo.req).reviews;
      if (seedData) {
        this.reviews = seedData;
      }
    }

    return {
      reviews: Object.values(this.reviews.data),
    };
  }

  /**
   * Responds to GET requests.
   */
  get(reqInfo: RequestInfo): any {
    return reqInfo.utils.createResponse$(() => ({
      body: this.listReviews(reqInfo),
      status: STATUS.OK,
    }));
  }

  private listReviews(reqInfo: RequestInfo) {
    return this.reviews;
  }
}
