import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import { DaffContentPage } from '@daffodil/content';
import { DaffContentHtmlPageFactory } from '@daffodil/content/testing';

import { DaffContentPageTestingService } from './page.service';

describe('@daffodil/content/driver/testing | DaffContentPageTestingService', () => {
  let service: DaffContentPageTestingService;

  let contentCreateSpy: jasmine.Spy;
  let contentCreateManySpy: jasmine.Spy;
  let contentFactoryService: DaffContentHtmlPageFactory;

  let contentFactory: DaffContentHtmlPageFactory;

  let mockPage: DaffContentPage;
  let contentId: DaffContentPage['id'];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffContentPageTestingService,
      ],
    });

    service = TestBed.inject(DaffContentPageTestingService);
    contentFactoryService = TestBed.inject(DaffContentHtmlPageFactory);

    contentFactory = new DaffContentHtmlPageFactory();

    mockPage = contentFactory.create();
    contentId = mockPage.id;

    contentCreateSpy = spyOn(contentFactoryService, 'create');
    contentCreateManySpy = spyOn(contentFactoryService, 'createMany');
    contentCreateSpy.and.returnValue(mockPage);
    contentCreateManySpy.and.returnValue([mockPage]);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    it('should return a DaffContent', () => {
      const expected = cold('(a|)', { a: mockPage });
      expect(service.get(contentId)).toBeObservable(expected);
    });
  });
});
