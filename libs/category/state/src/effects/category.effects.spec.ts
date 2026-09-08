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
} from '@daffodil/category';
import {
  DaffCategoryServiceInterface,
  DaffCategoryDriver,
} from '@daffodil/category/driver';
import { DaffCategoryTestingDriverModule } from '@daffodil/category/driver/testing';
import {
  daffCategoryReducers,
  DaffCategoryLoadSuccess,
  DaffCategoryLoad,
  DaffCategoryLoadFailure,
  DAFF_CATEGORY_STORE_FEATURE_KEY,
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

import { DaffCategoryEffects } from './category.effects';



describe('DaffCategoryEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCategoryEffects<DaffCategory, DaffProduct>;
  let stubCategory: DaffCategory;
  let stubCategoryPageMetadata: DaffCategoryPageMetadata;
  let stubProducts: DaffProduct[];
  let daffCategoryDriver: DaffCategoryServiceInterface;
  let store: Store<any>;
  let driverGetSpy: jasmine.Spy<DaffCategoryServiceInterface['get']>;

  let categoryFactory: DaffCategoryFactory;
  let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;
  let productFactory: DaffProductFactory;
  let productGridLoadSuccessAction: DaffProductGridLoadSuccess;
  let categoryLoadSuccessAction: DaffCategoryLoadSuccess;
  let categoryLoadAction;
  let categoryRequest: DaffCategoryIdRequest;

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
        DaffCategoryEffects,
        provideMockActions(() => actions$),
      ],
    });

    store = TestBed.inject(Store);
    effects = TestBed.inject(DaffCategoryEffects);
    categoryFactory = TestBed.inject(DaffCategoryFactory);
    daffCategoryDriver = TestBed.inject<DaffCategoryServiceInterface>(DaffCategoryDriver);
    categoryPageMetadataFactory = TestBed.inject(DaffCategoryPageMetadataFactory);
    productFactory = TestBed.inject(DaffProductFactory);

    stubCategory = categoryFactory.create();
    stubCategoryPageMetadata = categoryPageMetadataFactory.create();
    stubCategory.id = stubCategoryPageMetadata.id;
    stubProducts = productFactory.createMany(3);


    driverGetSpy = spyOn(daffCategoryDriver, 'get');
    driverGetSpy.and.returnValue(of({
      category: stubCategory,
      categoryPageMetadata: stubCategoryPageMetadata,
      products: stubProducts,
    }));

    productGridLoadSuccessAction = new DaffProductGridLoadSuccess(stubProducts);
    categoryRequest = { id: stubCategory.id, kind: DaffCategoryRequestKind.ID };
    categoryLoadAction = new DaffCategoryLoad(categoryRequest);
    categoryLoadSuccessAction = new DaffCategoryLoadSuccess({
      category: stubCategory,
      categoryPageMetadata: stubCategoryPageMetadata,
      products: stubProducts,
    });
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CategoryLoadAction is triggered', () => {

    describe('when the call to CategoryService is successful', () => {
      it('should dispatch a DaffCategoryLoadSuccess and a DaffProductGridLoadSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: categoryLoadAction });
          driverGetSpy.and.returnValue(of({
            category: stubCategory,
            categoryPageMetadata: stubCategoryPageMetadata,
            products: stubProducts,
          }));

          helpers.expectObservable(effects.loadCategory$).toBe('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
        });
      });
    });

    describe('when the call to CategoryService fails', () => {

      it('should dispatch a CategoryLoadFailure action', () => {
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
          const categoryLoadFailureAction = new DaffCategoryLoadFailure(error);
          helpers.expectObservable(effects.loadCategory$).toBe('--b', { b: categoryLoadFailureAction });
        });
      });
    });

    it('should call get category with the category request from the action payload', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(helpers => {
        actions$ = helpers.hot('--a', { a: categoryLoadAction });
        driverGetSpy.and.returnValue(of({
          category: stubCategory,
          categoryPageMetadata: stubCategoryPageMetadata,
          products: stubProducts,
        }));

        helpers.expectObservable(effects.loadCategory$).toBe('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
      });

      expect(daffCategoryDriver.get).toHaveBeenCalledWith(categoryRequest);
    });

    describe('multiple times in quick succession', () => {
      let otherCategoryLoadAction: DaffCategoryLoad;
      let otherCategoryRequest: DaffCategoryIdRequest;

      beforeEach(() => {
        otherCategoryRequest = { id: 'someOtherCategory', kind: DaffCategoryRequestKind.ID };
        otherCategoryLoadAction = new DaffCategoryLoad(otherCategoryRequest);
      });

      it('should call get category with the category request from the action payload twice', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--(ab)', { a: categoryLoadAction, b: otherCategoryLoadAction });
          const resp = {
            category: null,
            categoryPageMetadata: null,
            products: [],
          };
          driverGetSpy.withArgs(categoryRequest).and.returnValue(helpers.cold('--a', { a: {
            category: stubCategory,
            categoryPageMetadata: stubCategoryPageMetadata,
            products: stubProducts,
          }}));
          driverGetSpy.withArgs(otherCategoryRequest).and.returnValue(helpers.cold('--a', { a: resp }));
          const otherCategoryLoadSuccessAction = new DaffCategoryLoadSuccess(resp);
          const otherProductGridLoadSuccess = new DaffProductGridLoadSuccess(resp.products);

          helpers.expectObservable(effects.loadCategory$).toBe('----(abdc)', {
            a: productGridLoadSuccessAction,
            b: categoryLoadSuccessAction,
            c: otherCategoryLoadSuccessAction,
            d: otherProductGridLoadSuccess,
          });
        });

        expect(daffCategoryDriver.get).toHaveBeenCalledWith(categoryRequest);
        expect(daffCategoryDriver.get).toHaveBeenCalledWith(otherCategoryRequest);
      });
    });
  });
});
