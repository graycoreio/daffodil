import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  RequestInfo,
  STATUS,
} from 'angular-in-memory-web-api';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffSearchResult,
  daffSearchTransformResultsToCollection,
} from '@daffodil/search';
import {
  DaffSearchInMemoryChildBackend,
  provideDaffSearchInMemoryBackends,
} from '@daffodil/search/driver/in-memory';
import {
  DaffSearchResultFactory,
  DaffSearchTestingModule,
} from '@daffodil/search/testing';

import { DaffInMemoryBackendSearchDriver } from './search.service';

describe('@daffodil/search/driver/in-memory | DaffInMemoryBackendSearchDriver', () => {
  let service: DaffInMemoryBackendSearchDriver;
  let resultFactory: DaffSearchResultFactory;
  let mockResults1: DaffSearchResult[];
  let mockResults2: DaffSearchResult[];

  @Injectable({
    providedIn: 'root',
  })
  class TestBackend1 implements DaffSearchInMemoryChildBackend {
    kind = 'TestBackend1';

    get(reqInfo: RequestInfo) {
      return reqInfo.utils.createResponse$(() => ({
        body: {
          collection: daffSearchTransformResultsToCollection(mockResults1),
          metadata: {},
        },
        status: STATUS.OK,
      }));
    }
  }

  @Injectable({
    providedIn: 'root',
  })
  class TestBackend2 implements DaffSearchInMemoryChildBackend {
    kind = 'TestBackend2';

    get(reqInfo: RequestInfo) {
      return reqInfo.utils.createResponse$(() => ({
        body: {
          collection: daffSearchTransformResultsToCollection(mockResults2),
          metadata: {},
        },
        status: STATUS.OK,
      }));
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffSearchTestingModule,
      ],
      providers: [
        DaffInMemoryBackendSearchDriver,
        ...provideDaffSearchInMemoryBackends(TestBackend1, TestBackend2),
      ],
    });

    service = TestBed.inject(DaffInMemoryBackendSearchDriver);
    resultFactory = TestBed.inject(DaffSearchResultFactory);

    mockResults1 = resultFactory.createMany(3, { kind: 'TestBackend1' });
    mockResults2 = resultFactory.createMany(3, { kind: 'TestBackend2' });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    let reqInfoStub;
    let result: Observable<any>;

    beforeEach(() => {
      reqInfoStub = {
        utils: {
          createResponse$: (func) => of(func()),
        },
      };

      result = service.get(reqInfoStub);
    });

    it('should return results from all of the provided backends', done => {
      result.subscribe(res => {
        expect(res.body.collection['TestBackend1']).toEqual(jasmine.arrayContaining(mockResults1));
        expect(res.body.collection['TestBackend2']).toEqual(jasmine.arrayContaining(mockResults2));
        done();
      });
    });
  });
});
