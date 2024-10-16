import { TestBed } from '@angular/core/testing';

import { DaffProductCollection } from '@daffodil/product';
import {
  provideDaffProductExtraFactoryTypes,
  DaffDefaultProductFactory,
} from '@daffodil/product/testing';

import { DaffProductCollectionFactory } from './collection.factory';

describe('@daffodil/product/testing | DaffProductCollectionFactory', () => {
  let factory: DaffProductCollectionFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffProductCollectionFactory,
        provideDaffProductExtraFactoryTypes(DaffDefaultProductFactory),
      ],
    });

    factory = TestBed.inject(DaffProductCollectionFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffProductCollection;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a DaffProductCollection with all required fields defined', () => {
      expect(result.metadata).toBeDefined();
      expect(result.data).toBeDefined();
    });
  });
});
