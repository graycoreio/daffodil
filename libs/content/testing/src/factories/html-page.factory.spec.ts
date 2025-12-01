import { TestBed } from '@angular/core/testing';

import { DaffContentHtmlPage } from '@daffodil/content';

import { DaffContentHtmlPageFactory } from './html-page.factory';

describe('@daffodil/content/testing | DaffContentPageFactory', () => {
  let factory: DaffContentHtmlPageFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffContentHtmlPageFactory],
    });

    factory = TestBed.inject(DaffContentHtmlPageFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffContentHtmlPage;

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
