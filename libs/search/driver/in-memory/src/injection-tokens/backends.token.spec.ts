import {
  Injectable,
  Type,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  RequestInfo,
  STATUS,
} from 'angular-in-memory-web-api';

import { DaffSearchInMemoryChildBackend } from '@daffodil/search/driver/in-memory';

import {
  provideDaffSearchInMemoryBackends,
  DAFF_SEARCH_IN_MEMORY_BACKENDS,
} from './backends.token';

@Injectable({
  providedIn: 'root',
})
class TestBackend1 implements DaffSearchInMemoryChildBackend {
  kind = 'TestBackend1';

  get(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => ({
      body: [],
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
      body: [],
      status: STATUS.OK,
    }));
  }
}

describe('@daffodil/search/driver/in-memory | provideDaffSearchInMemoryBackends', () => {
  let backends: Type<DaffSearchInMemoryChildBackend>[];
  let result: DaffSearchInMemoryChildBackend[];

  beforeEach(() => {
    backends = [
      TestBackend1,
      TestBackend2,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffSearchInMemoryBackends(...backends),
      ],
    });

    result = TestBed.inject(DAFF_SEARCH_IN_MEMORY_BACKENDS);
  });

  it('should provide driver instances to the token', () => {
    expect(result).toContain(jasmine.any(TestBackend1));
    expect(result).toContain(jasmine.any(TestBackend2));
  });
});
