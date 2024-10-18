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
  DaffCategoryUrlRequest,
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
  DaffCategoryPageLoadByUrl,
} from '@daffodil/category/state';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import {
  daffFiltersToRequests,
  DaffSortDirectionEnum,
} from '@daffodil/core';
import { DaffStateError } from '@daffodil/core/state';
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
    productFactory = TestBed.inject(DaffProductFactory);

    stubCategory = categoryFactory.create();
    stubcategoryPageMetadata = categoryPageMetadataFactory.create();
    stubCategory.id = stubcategoryPageMetadata.id;
    stubProducts = productFactory.createMany(3);

    daffCategoryDriver = TestBed.inject<DaffCategoryServiceInterface>(DaffCategoryDriver);

    driverGetSpy = spyOn(daffCategoryDriver, 'get');
    driverGetByUrlSpy = spyOn(daffCategoryDriver, 'getByUrl');
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
          recoverable: false,
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
          recoverable: false,
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

  describe('when CategoryPageLoadByUrlAction is triggered', () => {
    let categoryPageLoadSuccessAction: DaffCategoryPageLoadSuccess;
    let expected;
    let categoryPageLoadAction: DaffCategoryPageLoadByUrl;
    let categoryRequest: DaffCategoryUrlRequest;

    beforeEach(() => {
      categoryRequest = { url: stubCategory.id, kind: DaffCategoryRequestKind.URL };
      categoryPageLoadAction = new DaffCategoryPageLoadByUrl(categoryRequest);
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
        expect(effects.loadCategoryPageByUrl$).toBeObservable(expected);
      });
    });

    describe('when the call to CategoryService fails', () => {

      beforeEach(() => {
        const error: DaffStateError = {
          code: 'error code',
          recoverable: false,
          message: 'Failed to load the category',
        };
        const response = cold('#', {}, error);
        driverGetByUrlSpy.and.returnValue(response);
        const categoryPageLoadFailureAction = new DaffCategoryPageLoadFailure(error);
        expected = cold('--b', { b: categoryPageLoadFailureAction });
      });

      it('should dispatch a CategoryPageLoadFailure action', () => {
        expect(effects.loadCategoryPageByUrl$).toBeObservable(expected);
      });
    });

    it('should call get category with the category request from the action payload', () => {
      driverGetByUrlSpy.and.returnValue(of({
        category: stubCategory,
        categoryPageMetadata: stubcategoryPageMetadata,
        products: stubProducts,
      }));

      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryPageLoadSuccessAction });
      expect(effects.loadCategoryPageByUrl$).toBeObservable(expected);

      expect(daffCategoryDriver.getByUrl).toHaveBeenCalledWith(categoryRequest);
    });
  });
});
