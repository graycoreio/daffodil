import { TestBed } from '@angular/core/testing';

import { DaffContentBlock } from '@daffodil/content';

import { DaffContentBlockFactory } from './block.factory';

describe('@daffodil/content/testing | DaffContentBlockFactory', () => {
  let factory: DaffContentBlockFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffContentBlockFactory],
    });

    factory = TestBed.inject(DaffContentBlockFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffContentBlock;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return something', () => {
      expect(result).toBeDefined();
    });

    it('should return an object with all the required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.title).toBeDefined();
      expect(result.content).toBeDefined();
    });
  });
});
