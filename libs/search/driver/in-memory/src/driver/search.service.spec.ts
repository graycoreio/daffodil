import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from '@apollo/client/core';

import {
  DaffSearchResult,
  DaffSearchResultCollection,
} from '@daffodil/search';
import { DaffGeneralSearchResultFactory } from '@daffodil/search/testing';

import { DaffInMemorySearchDriver } from './search.service';

describe('@daffodil/search/driver/in-memory | DaffInMemorySearchDriver', () => {
  let service: DaffInMemorySearchDriver;
  let httpMock: HttpTestingController;
  let searchResultFactory: DaffGeneralSearchResultFactory;
  let mockResponse: DaffSearchResult[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        DaffInMemorySearchDriver,
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DaffInMemorySearchDriver);
    searchResultFactory = TestBed.inject(DaffGeneralSearchResultFactory);

    mockResponse = searchResultFactory.createMany(4);
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
      result.subscribe((resp: DaffSearchResultCollection) => {
        mockResponse.forEach(res => {
          expect(resp[res.kind]).toContain(res);
        });
        done();
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');

      req.flush(mockResponse);
    });
  });
});
