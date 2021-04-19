// import { TestBed } from '@angular/core/testing';
// import {
//   ApolloTestingModule,
//   ApolloTestingController,
// } from 'apollo-angular/testing';
// import { Observable } from 'rxjs';

// import {
//   DaffCategoryRequest,
//   DaffCategory,
//   DaffCategoryFilterEqualRequest,
//   DaffCategoryFilterRangeRequest,
//   DaffCategoryFilterRangeRequestOption,
//   daffCategoryComputeFilterRangePairLabel,
//   DaffGetCategoryResponse,
//   DaffCategoryPageMetadata,
//   DaffCategoryPageRequestKind,
// } from '@daffodil/category';
// import { DaffMagentoCategoryTransformerService } from '@daffodil/category/driver/magento';
// import {
//   DaffCategoryFactory,
//   DaffCategoryPageMetadataFactory,
//   DaffCategoryFilterRequestEqualFactory,
//   DaffCategoryFilterRequestRangeNumericFactory,
//   DaffCategoryFilterRangeNumericRequestOptionFactory,
// } from '@daffodil/category/testing';
// import { DaffProduct } from '@daffodil/product';
// import { DaffProductFactory } from '@daffodil/product/testing';

// import { DaffMagentoCategoryService } from './category.service';

// xdescribe('Driver | Magento | Category | CategoryService', () => {
//   let categoryService: DaffMagentoCategoryService;
//   let categoryFactory: DaffCategoryFactory;
//   let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;
//   let controller: ApolloTestingController;
//   let productFactory: DaffProductFactory;
//   let equalFilterRequestFactory: DaffCategoryFilterRequestEqualFactory;
//   let rangeFilterRequestFactory: DaffCategoryFilterRequestRangeNumericFactory;
//   let rangeFilterRequestOptionFactory: DaffCategoryFilterRangeNumericRequestOptionFactory;

//   let mockCategoryRequest: DaffCategoryRequest;
//   let mockCategory: DaffCategory;
//   let equalFilterRequest: DaffCategoryFilterEqualRequest;
//   let rangeFilterRequest: DaffCategoryFilterRangeRequest;
//   let rangeFilterRequestOption: DaffCategoryFilterRangeRequestOption<number>;
//   let rangeFilterRequestOptionLabel: string;

//   let transformedCategory: DaffCategory;
//   let transformedCategoryPageMetadata: DaffCategoryPageMetadata;
//   let transformedProducts: DaffProduct[];
//   // const productTransformService = jasmine.createSpyObj('DaffMagentoProductTransformerService', ['transformMany']);
//   // productTransformService.transformMany.and.returnValue(transformedProducts);
//   // const magentoCategoryResponseTransformerService = jasmine.createSpyObj('DaffMagentoCategoryTransformerService', ['transform']);
//   // magentoCategoryResponseTransformerService.transform.and.returnValue(transformedCategory);
//   // const categoryPageConfigTransformService = jasmine.createSpyObj('DaffMagentoCategoryPageConfigTransformerService', ['transform']);
//   // categoryPageConfigTransformService.transform.and.returnValue(transformedCategoryPageMetadata);

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         ApolloTestingModule,
//       ],
//       providers: [
//         DaffMagentoCategoryService,
//         // { provide: DaffMagentoCategoryTransformerService, useValue: magentoCategoryResponseTransformerService },
//       ],
//     });

//     categoryService = TestBed.inject(DaffMagentoCategoryService);
//     controller = TestBed.inject(ApolloTestingController);

//     categoryFactory = TestBed.inject(DaffCategoryFactory);
//     categoryPageMetadataFactory = TestBed.inject(DaffCategoryPageMetadataFactory);
//     productFactory = TestBed.inject(DaffProductFactory);
//     equalFilterRequestFactory = TestBed.inject(DaffCategoryFilterRequestEqualFactory);
//     rangeFilterRequestFactory = TestBed.inject(DaffCategoryFilterRequestRangeNumericFactory);
//     rangeFilterRequestOptionFactory = TestBed.inject(DaffCategoryFilterRangeNumericRequestOptionFactory);

//     mockCategory = categoryFactory.create();
//     // mockCategoryRequest = {
//     //   id: mockCategory.id,
//     // };

//     transformedCategory = categoryFactory.create();
//     transformedCategoryPageMetadata =  categoryPageMetadataFactory.create();
//     transformedProducts =  productFactory.createMany(3);
//   });

//   it('should be created', () => {
//     expect(categoryService).toBeTruthy();
//   });

//   describe('get | getting a category', () => {
//     let result: Observable<DaffGetCategoryResponse>;

//     describe('when filters are requested', () => {
//       beforeEach(() => {
//         equalFilterRequest = equalFilterRequestFactory.create();
//         rangeFilterRequestOption = rangeFilterRequestOptionFactory.create();
//         rangeFilterRequest = rangeFilterRequestFactory.create({
//           value: rangeFilterRequestOption,
//         });
//         rangeFilterRequestOptionLabel = daffCategoryComputeFilterRangePairLabel(rangeFilterRequestOption.min, rangeFilterRequestOption.max);
//         mockCategoryRequest = {
//           ...mockCategoryRequest,
//           kind: DaffCategoryPageRequestKind.ID,
//           filter_requests: [
//             equalFilterRequest,
//             rangeFilterRequest,
//           ],
//         };

//         result = categoryService.get(mockCategoryRequest);
//       });

//       it('should apply those filters', done => {
//         const unsub = result.subscribe(res => {
//           equalFilterRequest.value.forEach(option => {
//             expect(res.categoryPageMetadata.filters[equalFilterRequest.name].options[option].applied).toBeTrue();
//           });
//           expect(res.categoryPageMetadata.filters[rangeFilterRequest.name].options[rangeFilterRequestOptionLabel].applied).toBeTrue();
//           unsub.unsubscribe();
//           done();
//         });
//       });
//     });
//   });

//   afterEach(() => {
//     controller.verify();
//   });
// });
