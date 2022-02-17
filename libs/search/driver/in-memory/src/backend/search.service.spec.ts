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

import { DaffSearchResult } from '@daffodil/search';
import {
  DaffSearchInMemoryChildBackend,
  daffProvideSearchInMemoryBackends,
} from '@daffodil/search/driver/in-memory';
import {
  DaffGeneralSearchResultFactory,
  DaffSearchTestingModule,
} from '@daffodil/search/testing';

import { DaffInMemoryBackendSearchDriver } from './search.service';

describe('@daffodil/search/driver/in-memory | DaffInMemoryBackendSearchDriver', () => {
  let service: DaffInMemoryBackendSearchDriver;
  let resultFactory: DaffGeneralSearchResultFactory;
  let mockResults1: DaffSearchResult[];
  let mockResults2: DaffSearchResult[];

  @Injectable({
    providedIn: 'root',
  })
  class TestBackend1 implements DaffSearchInMemoryChildBackend {
    get(reqInfo: RequestInfo) {
      return reqInfo.utils.createResponse$(() => ({
        body: mockResults1,
        status: STATUS.OK,
      }));
    }
  }

  @Injectable({
    providedIn: 'root',
  })
  class TestBackend2 implements DaffSearchInMemoryChildBackend {
    get(reqInfo: RequestInfo) {
      return reqInfo.utils.createResponse$(() => ({
        body: mockResults2,
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
        ...daffProvideSearchInMemoryBackends(TestBackend1, TestBackend2),
      ],
    });

    service = TestBed.inject(DaffInMemoryBackendSearchDriver);
    resultFactory = TestBed.inject(DaffGeneralSearchResultFactory);

    mockResults1 = resultFactory.createMany(3);
    mockResults2 = resultFactory.createMany(3);
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
        expect(res.body).toEqual(jasmine.arrayContaining([...mockResults1, ...mockResults2]));
        done();
      });
    });
  });
});
