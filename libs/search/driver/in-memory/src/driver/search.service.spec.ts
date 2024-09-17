import {
 provideHttpClient,
withInterceptorsFromDi,
} from '@angular/common/http';
import {
 HttpTestingController,
provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from '@apollo/client/core';

import {
  DaffSearchResult,
  DaffSearchResultCollection,
  daffSearchTransformResultsToCollection,
} from '@daffodil/search';
import { DaffSearchDriverResponse } from '@daffodil/search/driver';
import { DaffSearchResultFactory } from '@daffodil/search/testing';

import { DaffInMemorySearchDriver } from './search.service';

describe('@daffodil/search/driver/in-memory | DaffInMemorySearchDriver', () => {
  let service: DaffInMemorySearchDriver;
  let httpMock: HttpTestingController;
  let searchResultFactory: DaffSearchResultFactory;
  let mockResponse: DaffSearchDriverResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [
        DaffInMemorySearchDriver,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
    ],
});

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DaffInMemorySearchDriver);
    searchResultFactory = TestBed.inject(DaffSearchResultFactory);

    mockResponse = {
      collection: daffSearchTransformResultsToCollection(searchResultFactory.createMany(4)),
      metadata: {},
    };
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('search', () => {
    let query: string;
    let url: string;
    let result: ReturnType<DaffInMemorySearchDriver['search']>;

    beforeEach(() => {
      query = 'query';
      url = `${service.url}?query=${query}`;
      result = service.search(query);
    });

    it('should send a get request and return a collection of search results', done => {
      result.subscribe((resp) => {
        expect(resp).toEqual(mockResponse);
        done();
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');

      req.flush(mockResponse);
    });
  });

  describe('incremental', () => {
    let query: string;
    let url: string;
    let result: ReturnType<DaffInMemorySearchDriver['incremental']>;

    beforeEach(() => {
      query = 'query';
      url = `${service.url}?query=${query}`;
      result = service.incremental(query);
    });

    it('should send a get request and return a collection of search results', done => {
      result.subscribe((resp) => {
        expect(resp).toEqual(mockResponse.collection);
        done();
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');

      req.flush(mockResponse);
    });
  });
});
