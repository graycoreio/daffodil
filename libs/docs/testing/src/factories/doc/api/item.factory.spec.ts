import { TestBed } from '@angular/core/testing';

import { DaffApiDoc } from '@daffodil/docs-utils';

import { DaffApiDocFactory } from './item.factory';

describe('@daffodil/docs | DaffApiDocFactory', () => {
  let result: DaffApiDoc;
  let factory: DaffApiDocFactory;

  beforeEach(() => {
    factory = TestBed.inject(DaffApiDocFactory);
  });

  it('should return an API doc', () => {
    result = factory.create();
    expect(result.role).toBeDefined();
  });
});
