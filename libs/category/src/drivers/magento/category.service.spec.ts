import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

import { DaffCategoryFactory } from '@daffodil/category/testing';

import { DaffMagentoCategoryService, GetACategory } from './category.service';

describe('Driver | Magento | Category | CategoryService', () => {
  let categoryService: DaffMagentoCategoryService;
  let categoryFactory: DaffCategoryFactory;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoCategoryService
      ]
    });

    controller = TestBed.get(ApolloTestingController);

    categoryService = TestBed.get(DaffMagentoCategoryService);
    categoryFactory = TestBed.get(DaffCategoryFactory);
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });

  describe('get | getting a single category', () => {
    it('should return an observable single category', () => {
      const category = categoryFactory.create();

      categoryService.get(category.id).subscribe((result) => {
        expect(result.id).toEqual(category.id);
        expect(result.name).toEqual(category.name);
        expect(result.total_products).toEqual(category.total_products);
        expect(result.children_count).toEqual(category.children_count);
      });

      const op = controller.expectOne(GetACategory);

      expect(op.operation.variables.id).toEqual(category.id);

      op.flush({
        data: {
          category: {
            id: category.id,
            name: category.name,
            products: {
              total_count: category.total_products
            },
            children_count: category.children_count,
            children: {
              id: null,
              level: null,
              name: null,
              path: null
            }
          }
        }
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
