import { TestBed } from '@angular/core/testing';

import { DaffCategory } from '@daffodil/category';
import { DaffInMemoryBackendCategoryService } from '@daffodil/category/driver/in-memory';
import { DaffCategoryFactory } from '@daffodil/category/testing';
import { DAFF_SEARCH_CATEGORY_RESULT_KIND } from '@daffodil/search-category';
import { DaffSearchTestingModule } from '@daffodil/search/testing';

import { DaffSearchCategoryInMemoryBackendService } from './search.service';

describe('@daffodil/search-category/driver/in-memory | DaffSearchCategoryInMemoryBackendService', () => {
  let service: DaffSearchCategoryInMemoryBackendService;
  let categoryBackendSpy: jasmine.SpyObj<DaffInMemoryBackendCategoryService>;

  let categoryFactory: DaffCategoryFactory;
  let mockCategories: DaffCategory[];

  beforeEach(() => {
    categoryBackendSpy = jasmine.createSpyObj('DaffInMemoryBackendCategoryService', [], ['categories']);

    TestBed.configureTestingModule({
      imports: [
        DaffSearchTestingModule,
      ],
      providers: [
        DaffSearchCategoryInMemoryBackendService,
        {
          provide: DaffInMemoryBackendCategoryService,
          useValue: categoryBackendSpy,
        },
      ],
    });

    service = TestBed.inject(DaffSearchCategoryInMemoryBackendService);
    categoryFactory = TestBed.inject(DaffCategoryFactory);

    mockCategories = categoryFactory.createMany(3, {
      name: 'name',
    });
    (<jasmine.Spy>Object.getOwnPropertyDescriptor(categoryBackendSpy, 'categories').get).and.returnValue(mockCategories);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting category search results', () => {
    let reqInfoStub;
    let result;

    beforeEach(() => {
      const query = new Map();
      query.set('query', 'name');
      reqInfoStub = {
        utils: {
          createResponse$: (func) => func(),
        },
        query,
      };

      result = service.get(reqInfoStub);
    });

    it('should return a search result driver reponse', () => {
      mockCategories.forEach(category => {
        expect(result.body.collection[DAFF_SEARCH_CATEGORY_RESULT_KIND]).toContain(jasmine.objectContaining({
          id: category.id,
        }));
      });
    });
  });
});
