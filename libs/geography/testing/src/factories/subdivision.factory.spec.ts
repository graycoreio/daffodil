import { TestBed } from '@angular/core/testing';

import { DaffSubdivision } from '@daffodil/geography';

import { DaffSubdivisionFactory } from './subdivision.factory';

describe('Geography | Testing | Factories | DaffSubdivisionFactory', () => {
  let factory: DaffSubdivisionFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffSubdivisionFactory]
    });

    factory = TestBed.get(DaffSubdivisionFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffSubdivision;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a Subdivision with all required fields defined', () => {
      expect(result.id).not.toBeNull();
      expect(result.name).not.toBeNull();
      expect(result.iso_3166_2).not.toBeNull();
    });
  });
});
