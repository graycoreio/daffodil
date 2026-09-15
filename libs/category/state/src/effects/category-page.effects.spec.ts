import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

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
  DAFF_CATEGORY_STORE_FEATURE_KEY,
  DaffCategoryPageLoadByUrl,
} from '@daffodil/category/state';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import { DaffStateError } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductGridLoadSuccess,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffCategoryPageEffects } from './category-page.effects';

describe('@daffodil/category/state | DaffCategoryPageEffects', () => {
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

    let categoryLoadAction;

    beforeEach(() => {
      categoryLoadAction = new DaffCategoryPageLoad({ id: stubCategory.id, kind: DaffCategoryRequestKind.ID });
    });

    describe('when the call to CategoryService is successful', () => {

      it('should dispatch a DaffCategoryPageLoadSuccess and a DaffProductGridLoadSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: categoryLoadAction });
          driverGetSpy.and.returnValue(of({
            category: stubCategory,
            categoryPageMetadata: stubcategoryPageMetadata,
            products: stubProducts,
          }));

          helpers.expectObservable(effects.loadCategoryPage$).toBe('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
        });
      });
    });

    describe('when the call to CategoryService fails', () => {

      it('should dispatch a CategoryPageLoadFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: categoryLoadAction });
          const error: DaffStateError = {
            code: 'error code',
            recoverable: false,
            message: 'Failed to load the category',
          };
          const response = helpers.cold<any>('#', {}, error);
          driverGetSpy.and.returnValue(response);
          const categoryLoadFailureAction = new DaffCategoryPageLoadFailure(error);
          helpers.expectObservable(effects.loadCategoryPage$).toBe('--b', { b: categoryLoadFailureAction });
        });
      });
    });
  });

  describe('when CategoryPageLoadAction is triggered', () => {
    let categoryPageLoadSuccessAction: DaffCategoryPageLoadSuccess;
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
    });

    describe('when the call to CategoryService is successful', () => {
      it('should dispatch a DaffCategoryPageLoadSuccess and a DaffProductGridLoadSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: categoryPageLoadAction });
          driverGetSpy.and.returnValue(of({
            category: stubCategory,
            categoryPageMetadata: stubcategoryPageMetadata,
            products: stubProducts,
          }));

          helpers.expectObservable(effects.loadCategoryPage$).toBe('--(ab)', { a: productGridLoadSuccessAction, b: categoryPageLoadSuccessAction });
        });
      });
    });

    describe('when the call to CategoryService fails', () => {

      it('should dispatch a CategoryPageLoadFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: categoryPageLoadAction });
          const error: DaffStateError = {
            code: 'error code',
            recoverable: false,
            message: 'Failed to load the category',
          };
          const response = helpers.cold<any>('#', {}, error);
          driverGetSpy.and.returnValue(response);
          const categoryPageLoadFailureAction = new DaffCategoryPageLoadFailure(error);
          helpers.expectObservable(effects.loadCategoryPage$).toBe('--b', { b: categoryPageLoadFailureAction });
        });
      });
    });

    it('should call get category with the category request from the action payload', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(helpers => {
        actions$ = helpers.hot('--a', { a: categoryPageLoadAction });
        driverGetSpy.and.returnValue(of({
          category: stubCategory,
          categoryPageMetadata: stubcategoryPageMetadata,
          products: stubProducts,
        }));

        helpers.expectObservable(effects.loadCategoryPage$).toBe('--(ab)', { a: productGridLoadSuccessAction, b: categoryPageLoadSuccessAction });
      });

      expect(daffCategoryDriver.get).toHaveBeenCalledWith(categoryRequest);
    });
  });

  describe('when CategoryPageLoadByUrlAction is triggered', () => {
    let categoryPageLoadSuccessAction: DaffCategoryPageLoadSuccess;
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
    });

    describe('when the call to CategoryService is successful', () => {
      it('should dispatch a DaffCategoryPageLoadSuccess and a DaffProductGridLoadSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: categoryPageLoadAction });
          driverGetByUrlSpy.and.returnValue(of({
            category: stubCategory,
            categoryPageMetadata: stubcategoryPageMetadata,
            products: stubProducts,
          }));

          helpers.expectObservable(effects.loadCategoryPageByUrl$).toBe('--(ab)', { a: productGridLoadSuccessAction, b: categoryPageLoadSuccessAction });
        });
      });
    });

    describe('when the call to CategoryService fails', () => {

      it('should dispatch a CategoryPageLoadFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: categoryPageLoadAction });
          const error: DaffStateError = {
            code: 'error code',
            recoverable: false,
            message: 'Failed to load the category',
          };
          const response = helpers.cold<any>('#', {}, error);
          driverGetByUrlSpy.and.returnValue(response);
          const categoryPageLoadFailureAction = new DaffCategoryPageLoadFailure(error);
          helpers.expectObservable(effects.loadCategoryPageByUrl$).toBe('--b', { b: categoryPageLoadFailureAction });
        });
      });
    });

    it('should call get category with the category request from the action payload', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(helpers => {
        actions$ = helpers.hot('--a', { a: categoryPageLoadAction });
        driverGetByUrlSpy.and.returnValue(of({
          category: stubCategory,
          categoryPageMetadata: stubcategoryPageMetadata,
          products: stubProducts,
        }));

        helpers.expectObservable(effects.loadCategoryPageByUrl$).toBe('--(ab)', { a: productGridLoadSuccessAction, b: categoryPageLoadSuccessAction });
      });

      expect(daffCategoryDriver.getByUrl).toHaveBeenCalledWith(categoryRequest);
    });
  });
});
