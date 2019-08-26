import { TestBed } from '@angular/core/testing';

import { DaffioDocFactory } from './doc.factory';

describe('DaffioDocFactory', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const factory: DaffioDocFactory = TestBed.get(DaffioDocFactory);
    expect(factory).toBeTruthy();
  });

  it('should be able to create a new doc', () => {
    const factory: DaffioDocFactory = TestBed.get(DaffioDocFactory);
    const doc = factory.create();

    expect(Object.keys(doc)).toContain('id');
    expect(Object.keys(doc)).toContain('title');
    expect(Object.keys(doc)).toContain('contents');
  });
});
