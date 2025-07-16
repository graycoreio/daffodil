import { TestBed } from '@angular/core/testing';

import { DaffContentPage } from '@daffodil/content';

import { DaffContentPageFactory } from './page.factory';

describe('@daffodil/content/testing | DaffContentPageFactory', () => {
  let factory: DaffContentPageFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffContentPageFactory],
    });

    factory = TestBed.inject(DaffContentPageFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffContentPage;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return something', () => {
      expect(result).toBeDefined();
    });

    it('should return an object with all the required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.title).toBeDefined();
      expect(result.htmlContent).toBeDefined();
    });
  });
});
