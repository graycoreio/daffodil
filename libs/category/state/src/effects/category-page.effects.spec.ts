import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffCategory,
  DaffCategoryPageMetadata,
  DaffCategoryRequestKind,
  DaffCategoryIdRequest,
  DaffCategoryUriRequest,
} from '@daffodil/category';
import {
  DaffCategoryServiceInterface,
  DaffCategoryDriver,
} from '@daffodil/category/driver';
import { DaffCategoryTestingDriverModule } from '@daffodil/category/driver/testing';
import {
  DaffCategoryPageLoadSuccess,
  daffCategoryReducers,
  DaffCategoryPageLoad,
  DaffCategoryPageLoadFailure,
  DaffCategoryPageChangePageSize,
  DaffCategoryPageChangeCurrentPage,
  DaffCategoryPageChangeSortingOption,
  DAFF_CATEGORY_STORE_FEATURE_KEY,
  DaffCategoryPageLoadByUri,
} from '@daffodil/category/state';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import {
  DaffSortDirectionEnum,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductGridLoadSuccess,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffCategoryPageEffects } from './category-page.effects';

describe('DaffCategoryPageEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCategoryPageEffects<DaffCategory, DaffProduct>;
  let stubCategory: DaffCategory;
  let stubcategoryPageMetadata: DaffCategoryPageMetadata;
  let stubProducts: DaffProduct[];
  let daffCategoryDriver: DaffCategoryServiceInterface;
  let store: Store<any>;
  let driverGetSpy: jasmine.Spy;
  let driverGetByUrlSpy: jasmine.Spy;

  let categoryFactory: DaffCategoryFactory;
  let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;
  let productFactory: DaffProductFactory;
  let categoryLoadSuccessAction: DaffCategoryPageLoadSuccess<DaffCategory, DaffProduct>;
  let productGridLoadSuccessAction: DaffProductGridLoadSuccess<DaffProduct>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CATEGORY_STORE_FEATURE_KEY]: combineReducers(daffCategoryReducers),
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
        DaffCategoryTestingDriverModule.forRoot(),
      ],
      providers: [
        DaffCategoryPageEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffCategoryPageEffects);
    store = TestBed.inject(Store);
    categoryFactory = TestBed.inject(DaffCategoryFactory);
    categoryPageMetadataFactory = TestBed.inject(DaffCategoryPageMetadataFactory);
    productFactory = new DaffProductFactory();

    stubCategory = categoryFactory.create();
    stubcategoryPageMetadata = categoryPageMetadataFactory.create();
    stubCategory.id = stubcategoryPageMetadata.id;
    stubProducts = productFactory.createMany(3);

    daffCategoryDriver = TestBed.inject<DaffCategoryServiceInterface>(DaffCategoryDriver);

    driverGetSpy = spyOn(daffCategoryDriver, 'get');
    driverGetByUrlSpy = spyOn(daffCategoryDriver, 'getByUri');
    driverGetSpy.and.returnValue(of({
      category: stubCategory,
      categoryPageMetadata: stubcategoryPageMetadata,
      products: stubProducts,
    }));

    categoryLoadSuccessAction = new DaffCategoryPageLoadSuccess({
      category: stubCategory,
      categoryPageMetadata: stubcategoryPageMetadata,
      products: stubProducts,
    });
    productGridLoadSuccessAction = new DaffProductGridLoadSuccess(stubProducts);
    store.dispatch(categoryLoadSuccessAction);
    store.dispatch(productGridLoadSuccessAction);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('processCategoryGetRequest', () => {

    let expected;
    let categoryLoadAction;

    beforeEach(() => {
 		  categoryLoadAction = new DaffCategoryPageLoad({ id: stubCategory.id, kind: DaffCategoryRequestKind.ID });
    });

    describe('when the call to CategoryService is successful', () => {

      beforeEach(() => {
        actions$ = hot('--a', { a: categoryLoadAction });
      });

      it('should dispatch a DaffCategoryPageLoadSuccess and a DaffProductGridLoadSuccess action', () => {
        driverGetSpy.and.returnValue(of({
          category: stubCategory,
          categoryPageMetadata: stubcategoryPageMetadata,
          products: stubProducts,
        }));

        expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
        expect(effects.loadCategoryPage$).toBeObservable(expected);
      });
    });

    describe('when the call to CategoryService fails', () => {

      beforeEach(() => {
        const error: DaffStateError = {
          code: 'error code',
          message: 'Failed to load the category',
        };
        const response = cold('#', {}, error);
        driverGetSpy.and.returnValue(response);
        const categoryLoadFailureAction = new DaffCategoryPageLoadFailure(error);
        actions$ = hot('--a', { a: categoryLoadAction });
        expected = cold('--b', { b: categoryLoadFailureAction });
      });

      it('should dispatch a CategoryPageLoadFailure action', () => {
        expect(effects.loadCategoryPage$).toBeObservable(expected);
      });
    });
  });

  describe('when CategoryPageLoadAction is triggered', () => {
    let categoryPageLoadSuccessAction: DaffCategoryPageLoadSuccess;
    let expected;
    let categoryPageLoadAction;
    let categoryRequest: DaffCategoryIdRequest;

    beforeEach(() => {
      categoryRequest = { id: stubCategory.id, kind: DaffCategoryRequestKind.ID };
      categoryPageLoadAction = new DaffCategoryPageLoad(categoryRequest);
      categoryPageLoadSuccessAction = new DaffCategoryPageLoadSuccess({
        category: stubCategory,
        categoryPageMetadata: stubcategoryPageMetadata,
        products: stubProducts,
      });

      actions$ = hot('--a', { a: categoryPageLoadAction });
    });

    describe('when the call to CategoryService is successful', () => {
      it('should dispatch a DaffCategoryPageLoadSuccess and a DaffProductGridLoadSuccess action', () => {
        driverGetSpy.and.returnValue(of({
          category: stubCategory,
          categoryPageMetadata: stubcategoryPageMetadata,
          products: stubProducts,
        }));

        expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryPageLoadSuccessAction });
        expect(effects.loadCategoryPage$).toBeObservable(expected);
      });
    });

    describe('when the call to CategoryService fails', () => {

      beforeEach(() => {
        const error: DaffStateError = {
          code: 'error code',
          message: 'Failed to load the category',
        };
        const response = cold('#', {}, error);
        driverGetSpy.and.returnValue(response);
        const categoryPageLoadFailureAction = new DaffCategoryPageLoadFailure(error);
        expected = cold('--b', { b: categoryPageLoadFailureAction });
      });

      it('should dispatch a CategoryPageLoadFailure action', () => {
        expect(effects.loadCategoryPage$).toBeObservable(expected);
      });
    });

    it('should call get category with the category request from the action payload', () => {
      driverGetSpy.and.returnValue(of({
        category: stubCategory,
        categoryPageMetadata: stubcategoryPageMetadata,
        products: stubProducts,
      }));

      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryPageLoadSuccessAction });
      expect(effects.loadCategoryPage$).toBeObservable(expected);

      expect(daffCategoryDriver.get).toHaveBeenCalledWith(categoryRequest);
    });
  });

  describe('when CategoryPageLoadByUriAction is triggered', () => {
    let categoryPageLoadSuccessAction: DaffCategoryPageLoadSuccess;
    let expected;
    let categoryPageLoadAction: DaffCategoryPageLoadByUri;
    let categoryRequest: DaffCategoryUriRequest;

    beforeEach(() => {
      categoryRequest = { uri: stubCategory.id, kind: DaffCategoryPageRequestKind.URI };
      categoryPageLoadAction = new DaffCategoryPageLoadByUri(categoryRequest);
      categoryPageLoadSuccessAction = new DaffCategoryPageLoadSuccess({
        category: stubCategory,
        categoryPageMetadata: stubcategoryPageMetadata,
        products: stubProducts,
      });

      actions$ = hot('--a', { a: categoryPageLoadAction });
    });

    describe('when the call to CategoryService is successful', () => {
      it('should dispatch a DaffCategoryPageLoadSuccess and a DaffProductGridLoadSuccess action', () => {
        driverGetByUrlSpy.and.returnValue(of({
          category: stubCategory,
          categoryPageMetadata: stubcategoryPageMetadata,
          products: stubProducts,
        }));

        expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryPageLoadSuccessAction });
        expect(effects.loadCategoryPageByUri$).toBeObservable(expected);
      });
    });

    describe('when the call to CategoryService fails', () => {

      beforeEach(() => {
        const error: DaffStateError = {
          code: 'error code',
          message: 'Failed to load the category',
        };
        const response = cold('#', {}, error);
        driverGetByUrlSpy.and.returnValue(response);
        const categoryPageLoadFailureAction = new DaffCategoryPageLoadFailure(error);
        expected = cold('--b', { b: categoryPageLoadFailureAction });
      });

      it('should dispatch a CategoryPageLoadFailure action', () => {
        expect(effects.loadCategoryPageByUri$).toBeObservable(expected);
      });
    });

    it('should call get category with the category request from the action payload', () => {
      driverGetByUrlSpy.and.returnValue(of({
        category: stubCategory,
        categoryPageMetadata: stubcategoryPageMetadata,
        products: stubProducts,
      }));

      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryPageLoadSuccessAction });
      expect(effects.loadCategoryPageByUri$).toBeObservable(expected);

      expect(daffCategoryDriver.getByUri).toHaveBeenCalledWith(categoryRequest);
    });
  });

  describe('when ChangeCategoryPageSize action is triggered', () => {

    let expected;

    it('should call get category with an id, page size, applied filters, and an applied sort option', () => {
      driverGetSpy.and.returnValue(of({
        category: stubCategory,
        categoryPageMetadata: stubcategoryPageMetadata,
        products: stubProducts,
      }));
      const changeCategoryPageSizeAction = new DaffCategoryPageChangePageSize(3);
      actions$ = hot('--a', { a: changeCategoryPageSizeAction });

      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
      expect(effects.changeCategoryPageSize$).toBeObservable(expected);
      expect(daffCategoryDriver.get).toHaveBeenCalledWith({
        ...stubcategoryPageMetadata,
        kind: DaffCategoryRequestKind.ID,
        page_size: 3,
      });
    });
  });

  describe('when ChangeCategoryCurrentPage action is triggered', () => {

    let expected;

    it('should call get category with every available parameter', () => {
      driverGetSpy.and.returnValue(of({
        category: stubCategory,
        categoryPageMetadata: stubcategoryPageMetadata,
        products: stubProducts,
      }));
      const changeCategoryCurrentPageAction = new DaffCategoryPageChangeCurrentPage(3);
      actions$ = hot('--a', { a: changeCategoryCurrentPageAction });

      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
      expect(effects.changeCategoryCurrentPage$).toBeObservable(expected);
      expect(daffCategoryDriver.get).toHaveBeenCalledWith({
        ...stubcategoryPageMetadata,
        kind: DaffCategoryRequestKind.ID,
        current_page: 3,
      });
    });
  });

  describe('when ChangeCategorySortAction is triggered', () => {

    let expected;

    it('should call get category with an id, page size, applied filters, and an applied sorting option', () => {
      driverGetSpy.and.returnValue(of({
        category: stubCategory,
        categoryPageMetadata: stubcategoryPageMetadata,
        products: stubProducts,
      }));
      const changeCategorySortingOption = new DaffCategoryPageChangeSortingOption({
        option: 'option',
        direction: DaffSortDirectionEnum.Ascending,
      });
      actions$ = hot('--a', { a: changeCategorySortingOption });

      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
      expect(effects.changeCategorySort$).toBeObservable(expected);
      expect(daffCategoryDriver.get).toHaveBeenCalledWith({
        ...stubcategoryPageMetadata,
        kind: DaffCategoryRequestKind.ID,
        applied_sort_direction: DaffSortDirectionEnum.Ascending,
        applied_sort_option: 'option',
      });
    });
  });
});
