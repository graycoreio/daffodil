import { TestBed } from '@angular/core/testing';

import { DaffProductReviews } from '@daffodil/reviews';
import { DaffProductReviewsFactory } from '@daffodil/reviews/testing';

import { DaffReviewsInMemoryBackendService } from './reviews.service';

describe('@daffodil/reviews/driver/in-memory | DaffReviewsInMemoryBackendService', () => {
  let service: DaffReviewsInMemoryBackendService;

  let countryFactory: DaffProductReviewsFactory;

  let mockReviews: DaffProductReviews;
  let reqInfoStub;
  let baseUrl;
  let collection: DaffProductReviews;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffReviewsInMemoryBackendService,
      ],
    });
    service = TestBed.inject(DaffReviewsInMemoryBackendService);

    countryFactory = TestBed.inject(DaffProductReviewsFactory);

    mockReviews = countryFactory.create();
    collection = mockReviews;
    service.reviews = mockReviews;
    baseUrl = 'api/reviews/';
    reqInfoStub = {
      resourceUrl: baseUrl,
      collection,
      req: {
        body: {},
      },
      utils: {
        createResponse$: func => func(),
        getJsonBody: req => req.body,
        findById: (ary, id) => ary.find(e => e.id === id),
      },
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('processing a list request', () => {
    let result;

    beforeEach(() => {
      reqInfoStub.url = baseUrl;

      result = service.get(reqInfoStub);
    });

    it('should return the reviews', () => {
      expect(result.body).toEqual(mockReviews);
    });
  });

  describe('createDb', () => {
    let result;

    beforeEach(() => {
      result = service.createDb(reqInfoStub);
    });

    it('should return a object with an array of reviews', () => {
      expect(Array.isArray(result.reviews)).toEqual(true);
      expect(result.reviews.length).toBeGreaterThan(2);
    });
  });
});
