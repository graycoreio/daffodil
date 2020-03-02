import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';

import { DaffMagentoCategoryService } from './category.service';
import { DaffCategory } from '../../models/category';
import { DaffMagentoCategoryTransformerService } from './transformers/category-transformer.service';
import { GetACategoryQuery } from './queries/get-a-category';

// Because ApolloTestingModule doesn't support multiple apollo queries in the same get call, this file is difficult to test.
// Maybe one of us can make a pull request to apollo-angular if we get the time.
xdescribe('Driver | Magento | Category | CategoryService', () => {
  let categoryService: DaffMagentoCategoryService;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory = new DaffCategoryPageConfigurationStateFactory();
  const productFactory: DaffProductFactory = new DaffProductFactory();
  let controller: ApolloTestingController;

  const transformedCategory = categoryFactory.create();
  const transformedCategoryPageConfigurationState = categoryPageConfigurationStateFactory.create();
  const transformedProducts = productFactory.createMany(3);
  const productTransformService = jasmine.createSpyObj('DaffMagentoProductTransformerService', ['transformMany']);
  productTransformService.transformMany.and.returnValue(transformedProducts);
  const magentoCategoryResponseTransformerService = jasmine.createSpyObj('DaffMagentoCategoryTransformerService', ['transform']);
  magentoCategoryResponseTransformerService.transform.and.returnValue(transformedCategory);
  const categoryPageConfigTransformService = jasmine.createSpyObj('DaffMagentoCategoryPageConfigTransformerService', ['transform']);
  categoryPageConfigTransformService.transform.and.returnValue(transformedCategoryPageConfigurationState);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffMagentoCategoryService,
        { provide: DaffMagentoCategoryTransformerService, useValue: magentoCategoryResponseTransformerService }
      ]
    });

    categoryService = TestBed.get(DaffMagentoCategoryService);
    controller = TestBed.get(ApolloTestingController);
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
            page_info: {
              current_page: transformedCategoryPageConfigurationState.current_page,
              page_size: transformedCategoryPageConfigurationState.page_size,
              total_pages: transformedCategoryPageConfigurationState.total_pages
            },
            items: []
          },
          children_count: stubCategory.children_count
        },
        products: {
          sort_fields: {
            default: null,
            options: [{
              label: transformedCategoryPageConfigurationState.sort_options[0].label,
              value: transformedCategoryPageConfigurationState.sort_options[0].value
            }]
          },
          filters: null
        }
      };
    });

    it('should return the correct observable', () => {
      categoryService.get({ id: stubCategory.id }).subscribe((category) => {
        expect(category.category).toEqual(transformedCategory);
        expect(category.products).toEqual(transformedProducts);
      });
      
      const op = controller.expectOne(GetACategoryQuery)

      op.flush({
        data: response
      });
    });

    it('should call the DaffCategoryResponseTransformerInterface', () => {
      categoryService.get({ id: stubCategory.id }).subscribe(() => {
        expect(magentoCategoryResponseTransformerService.transform).toHaveBeenCalledWith(response.category);
      });
      
      const op = controller.expectOne(GetACategoryQuery);
      expect(op.operation.variables.id).toEqual(parseInt(stubCategory.id, 10));

      op.flush({
        data: response
      });
    });
  });
});
