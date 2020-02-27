import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';

import { DaffMagentoCategoryService } from './category.service';
import { DaffMagentoCategoryTransformerService } from './transformers/category-transformer.service';

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
});
