import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { DaffProduct } from '@daffodil/product';
import { DaffProductReviews } from '@daffodil/reviews';
import { DaffProductReviewsNotFoundError } from '@daffodil/reviews/driver';
import { DaffProductReviewsFactory } from '@daffodil/reviews/testing';

import { DaffReviewsInMemoryService } from './reviews.service';

describe('@daffodil/reviews/driver/in-memory | DaffReviewsInMemoryService', () => {
  let service: DaffReviewsInMemoryService;
  let httpMock: HttpTestingController;
  let reviewsFactory: DaffProductReviewsFactory;

  let mockReviews: DaffProductReviews;
  let productId: DaffProduct['id'];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffReviewsInMemoryService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    reviewsFactory = TestBed.inject(DaffProductReviewsFactory);
    service = TestBed.inject(DaffReviewsInMemoryService);

    mockReviews = reviewsFactory.create();
    productId = 'productId';
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list', () => {
    it('should send a get request and return the product reviews collection', done => {
      service.list().subscribe(res => {
        expect(res).toEqual(mockReviews);
        done();
      });

      const req = httpMock.expectOne(`${service.url}/`);

      expect(req.request.method).toBe('GET');
      req.flush(mockReviews);
    });
  });
});
