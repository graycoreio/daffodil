import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

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

  beforeEach(() => {
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
      const expected = cold('(a|)', { a: [mockBlock]});
      expect(service.getBlocks(contentId)).toBeObservable(expected);
    });
  });
});
