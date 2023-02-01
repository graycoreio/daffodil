import {
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { DaffIdentifiable } from '@daffodil/core';

import { DaffIdentifiableFactory } from './identifiable.factory';

describe('@daffodil/core | DaffIdentifiableFactory', () => {
  let daffodilIdentifiableFactory: DaffIdentifiableFactory;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [DaffIdentifiableFactory],
    });

    daffodilIdentifiableFactory = TestBed.inject(DaffIdentifiableFactory);
  }));

  it('should be created', () => {
    expect(daffodilIdentifiableFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffIdentifiable;

    beforeEach(() => {
      result = daffodilIdentifiableFactory.create();
    });

    it('should set id', () => {
      expect(result.id).toBeDefined();
    });
  });
});
