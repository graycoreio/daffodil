import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

import { DaffMagentoProductTransformerService } from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffCategoryFactory } from '@daffodil/category/testing';

import { DaffMagentoCategoryService } from './category.service';
import { DaffMagentoCategoryGraphQlQueryManagerService } from './queries/category-query-manager.service';
import { DaffMagentoCategoryTransformerService } from './transformers/category-transformer.service';
import { DaffCategory } from '../../models/category';

describe('Driver | Magento | Category | CategoryService', () => {
  let categoryService: DaffMagentoCategoryService;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const productFactory: DaffProductFactory = new DaffProductFactory();
  let controller: ApolloTestingController;

  const transformedCategory = categoryFactory.create();
  const transformedProducts = productFactory.createMany(3);
  const productTransformService = jasmine.createSpyObj('DaffMagentoProductTransformerService', ['transformMany']);
  productTransformService.transformMany.and.returnValue(transformedProducts);
  const categoryTransformService = jasmine.createSpyObj('DaffMagentoCategoryTransformerService', ['transform']);
  categoryTransformService.transform.and.returnValue(transformedCategory);

  let categoryGraphQlQueryManagerService: DaffMagentoCategoryGraphQlQueryManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoCategoryService,
        { provide: DaffMagentoCategoryTransformerService, useValue: categoryTransformService },
        { provide: DaffMagentoProductTransformerService, useValue: productTransformService },
        DaffMagentoCategoryGraphQlQueryManagerService
      ]
    });

    categoryService = TestBed.get(DaffMagentoCategoryService);
    controller = TestBed.get(ApolloTestingController);
    categoryGraphQlQueryManagerService = TestBed.get(DaffMagentoCategoryGraphQlQueryManagerService);
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });

  describe('get | getting a single category', () => {
    let stubCategory: DaffCategory;
    let response;

    afterEach(() => {
      controller.verify();
    });

    beforeEach(() => {
      stubCategory = categoryFactory.create();
      response = {
        category: {
          id: stubCategory.id,
          name: stubCategory.name,
          breadcrumbs: [],
          products: {
            total_count: stubCategory.total_products,
            items: []
          },
          children_count: stubCategory.children_count
        }
      };
    });

    it('should return an observable single category', () => {
      categoryService.get(stubCategory.id).subscribe((category) => {
        expect(category.category).toEqual(transformedCategory);
        expect(category.products).toEqual(transformedProducts);
      });
      
      const op = controller.expectOne(categoryGraphQlQueryManagerService.getACategoryQuery(parseInt(stubCategory.id, 10)).query);
      expect(op.operation.variables.id).toEqual(parseInt(stubCategory.id, 10));

      op.flush({
        data: response
      });
    });

    it('should call the DaffMagentoCategoryTransformerService', () => {
      categoryService.get(stubCategory.id).subscribe(() => {
        expect(categoryTransformService.transform).toHaveBeenCalledWith(response.category);
      });
      
      const op = controller.expectOne(categoryGraphQlQueryManagerService.getACategoryQuery(parseInt(stubCategory.id, 10)).query);
      expect(op.operation.variables.id).toEqual(parseInt(stubCategory.id, 10));

      op.flush({
        data: response
      });
    });

    it('should call the DaffMagentoProductTransformerService', () => {      
      categoryService.get(stubCategory.id).subscribe(() => {
        expect(productTransformService.transformMany).toHaveBeenCalledWith([]);
      });
      
      const op = controller.expectOne(categoryGraphQlQueryManagerService.getACategoryQuery(parseInt(stubCategory.id, 10)).query);
      expect(op.operation.variables.id).toEqual(parseInt(stubCategory.id, 10));

      op.flush({
        data: response
      });
    });
  });
});
