import {
  Injectable,
  Type,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DaffSearchDriverKindedInterface } from '@daffodil/search/driver';

import {
  provideDaffSearchFederatedDrivers,
  DAFF_SEARCH_FEDERATED_DRIVERS,
} from './drivers.token';

@Injectable({
  providedIn: 'root',
})
class TestDriver1 implements DaffSearchDriverKindedInterface {
  kind = 'TestDriver1';
  search(query: string) {
    return of({
      collection: {},
      metadata: {},
    });
  }
  incremental(query: string) {
    return of({});
  }
}

@Injectable({
  providedIn: 'root',
})
class TestDriver2 implements DaffSearchDriverKindedInterface {
  kind = 'TestDriver2';
  search(query: string) {
    return of({
      collection: {},
      metadata: {},
    });
  }
  incremental(query: string) {
    return of({});
  }
}

describe('@daffodil/search/driver/federated | provideDaffSearchFederatedDrivers', () => {
  let drivers: Type<DaffSearchDriverKindedInterface>[];
  let result: DaffSearchDriverKindedInterface[];

  beforeEach(() => {
    drivers = [
      TestDriver1,
      TestDriver2,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...provideDaffSearchFederatedDrivers(...drivers),
      ],
    });

    result = TestBed.inject(DAFF_SEARCH_FEDERATED_DRIVERS);
  });

  it('should provide driver instances to the token', () => {
    expect(result).toContain(jasmine.any(TestDriver1));
    expect(result).toContain(jasmine.any(TestDriver2));
  });
});
