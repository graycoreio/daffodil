import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DaffProduct } from '@daffodil/product';
import { DaffProductReviews } from '@daffodil/reviews';
import { DaffProductReviewsFactory } from '@daffodil/reviews/testing';

import { DaffReviewsInMemoryBackendService } from './reviews.service';

describe('@daffodil/reviews/driver/in-memory | DaffReviewsInMemoryBackendService', () => {
  let httpClient: HttpClient;

  let reviewFactory: DaffProductReviewsFactory;

  let mockReviews: DaffProductReviews;

  beforeEach(done => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(DaffReviewsInMemoryBackendService, { delay: 0 })),
      ],
    });

    httpClient = TestBed.inject(HttpClient);

    reviewFactory = TestBed.inject(DaffProductReviewsFactory);

    mockReviews = reviewFactory.create();

    httpClient.post<any>('commands/resetDb', { reviews: mockReviews }).subscribe(() => done());
  });

  describe('processing a list request', () => {
    it('should return product reviews', done => {
      httpClient.get<any>(`/api/reviews/`).subscribe(result => {
        expect(result).toEqual(mockReviews);
        done();
      });
    });
  });
});
