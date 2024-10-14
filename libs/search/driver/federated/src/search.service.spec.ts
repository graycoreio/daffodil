import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffSearchResultCollection } from '@daffodil/search';
import {
  DaffSearchDriverKindedInterface,
  DaffSearchDriverResponse,
} from '@daffodil/search/driver';
import { daffProvideSearchFederatedDrivers } from '@daffodil/search/driver/federated';

import { DaffSearchFederatedDriver } from './search.service';

@Injectable({
  providedIn: 'root',
})
class TestDriver1 implements DaffSearchDriverKindedInterface {
  kind = 'TestDriver1';

  search(query: string) {
    return of({
      collection: {
        testDriver1: [],
      },
      metadata: {},
    });
  }

  incremental(query: string) {
    return of({
      testIncremental1: [],
    });
  }
}

@Injectable({
  providedIn: 'root',
})
class TestDriver2 implements DaffSearchDriverKindedInterface {
  kind = 'TestDriver2';

  search(query: string) {
    return of({
      collection: {
        testDriver2: [],
      },
      metadata: {},
    });
  }

  incremental(query: string) {
    return of({
      testIncremental2: [],
    });
  }
}

describe('@daffodil/search/driver/federated | DaffSearchFederatedDriver', () => {
  let service: DaffSearchFederatedDriver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffSearchFederatedDriver,
        ...daffProvideSearchFederatedDrivers<TestDriver1 | TestDriver2>(TestDriver1, TestDriver2),
      ],
    });

    service = TestBed.inject(DaffSearchFederatedDriver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('search | invoking injected drivers', () => {
    let result: Observable<DaffSearchDriverResponse>;

    beforeEach(() => {
      result = service.search('query');
    });

    it('should invoke and collect the result from the injected drivers', () => {
      const expected = cold('(a|)', { a: jasmine.objectContaining({
        collection: {
          testDriver1: jasmine.truthy(),
          testDriver2: jasmine.truthy(),
        },
      }) });

      expect(result).toBeObservable(expected);
    });
  });

  describe('incremental | invoking injected drivers', () => {
    let result: Observable<DaffSearchResultCollection>;

    beforeEach(() => {
      result = service.incremental('query');
    });

    it('should invoke and collect the result from the injected drivers', () => {
      const expected = cold('(a|)', { a: jasmine.objectContaining({
        testIncremental1: jasmine.truthy(),
        testIncremental2: jasmine.truthy(),
      }) });

      expect(result).toBeObservable(expected);
    });
  });
});
