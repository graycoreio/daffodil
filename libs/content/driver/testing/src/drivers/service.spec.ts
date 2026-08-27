import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { DaffContentBlock } from '@daffodil/content';
import { DaffContentBlockFactory } from '@daffodil/content/testing';

import { DaffTestingContentService } from './service';

describe('@daffodil/content/driver/testing | DaffTestingContentService', () => {
  let service: DaffTestingContentService;

  let contentCreateSpy: jasmine.Spy;
  let contentCreateManySpy: jasmine.Spy;
  let contentFactoryService: DaffContentBlockFactory;

  let contentFactory: DaffContentBlockFactory;

  let mockBlock: DaffContentBlock;
  let contentId: DaffContentBlock['id'];

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      providers: [
        DaffTestingContentService,
      ],
    });

    service = TestBed.inject(DaffTestingContentService);
    contentFactoryService = TestBed.inject(DaffContentBlockFactory);

    contentFactory = new DaffContentBlockFactory();

    mockBlock = contentFactory.create();
    contentId = mockBlock.id;

    contentCreateSpy = spyOn(contentFactoryService, 'create');
    contentCreateManySpy = spyOn(contentFactoryService, 'createMany');
    contentCreateSpy.and.returnValue(mockBlock);
    contentCreateManySpy.and.returnValue([mockBlock]);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get', () => {
    it('should return a DaffContent', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(service.getBlocks(contentId)).toBe('(a|)', { a: { [mockBlock.id]: mockBlock }});
      });
    });
  });
});
