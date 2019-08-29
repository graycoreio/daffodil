import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

import { DaffMagentoProductTransformerService } from '@daffodil/product';
import { DaffCategoryFactory } from '@daffodil/category/testing';

import { DaffMagentoCategoryService } from './category.service';
import { DaffGetCategoryResponse } from '../../models/get-category-response';
import { DaffMagentoCategoryGraphQlQueryManagerService } from './queries/category-query-manager.service';

describe('Driver | Magento | Category | CategoryService', () => {
  let categoryService: DaffMagentoCategoryService;
  let categoryFactory: DaffCategoryFactory;
  let controller: ApolloTestingController;
  let productTransformService: DaffMagentoProductTransformerService;
  let categoryGraphQlQueryManagerService: DaffMagentoCategoryGraphQlQueryManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoCategoryService,
        DaffMagentoProductTransformerService,
        DaffMagentoCategoryGraphQlQueryManagerService
      ]
    });

    productTransformService = TestBed.get(DaffMagentoProductTransformerService);
    controller = TestBed.get(ApolloTestingController);

    categoryService = TestBed.get(DaffMagentoCategoryService);
    categoryFactory = TestBed.get(DaffCategoryFactory);
    categoryGraphQlQueryManagerService = TestBed.get(DaffMagentoCategoryGraphQlQueryManagerService);
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });

  describe('get | getting a single category', () => {

    afterEach(() => {
      controller.verify();
    });

    it('should return an observable single category', () => {
      const category = categoryFactory.create();

      categoryService.get(category.id).subscribe((result: DaffGetCategoryResponse) => {
        expect(result.category.id).toEqual(category.id);
        expect(result.category.name).toEqual(category.name);
        expect(result.category.total_products).toEqual(category.total_products);
        expect(result.category.children_count).toEqual(category.children_count);
      });
      
      const op = controller.expectOne(categoryGraphQlQueryManagerService.getACategoryQuery(category.id).query);

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
            children: []
          }
        }
      });
    });
  });
});
