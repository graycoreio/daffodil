import { TestBed } from '@angular/core/testing';

import { MagentoCmsPage } from '@daffodil/content/driver/magento';

import { MagentoCmsPageFactory } from './page.factory';

describe('@daffodil/content/driver/magento | MagentoCmsPageFactory', () => {
  let factory: MagentoCmsPageFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCmsPageFactory],
    });

    factory = TestBed.inject(MagentoCmsPageFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCmsPage;

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
      expect(result.meta_title).toBeDefined();
      expect(result.meta_description).toBeDefined();
    });
  });
});
