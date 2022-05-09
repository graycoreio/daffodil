import { TestBed } from '@angular/core/testing';

import { MagentoContentBlock } from '@daffodil/content/driver/magento';

import { MagentoContentBlockFactory } from './block.factory';

describe('@daffodil/content/driver/magento | MagentoContentBlockFactory', () => {
  let factory: MagentoContentBlockFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoContentBlockFactory],
    });

    factory = TestBed.inject(MagentoContentBlockFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoContentBlock;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return something', () => {
      expect(result).toBeDefined();
    });

    it('should return an object with all the required fields defined', () => {
      expect(result.identifier).toBeDefined();
      expect(result.title).toBeDefined();
      expect(result.content).toBeDefined();
    });
  });
});
