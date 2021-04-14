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
  DaffCategoryPageRequestKind,
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
    categoryRequest = { id: stubCategory.id, kind: DaffCategoryPageRequestKind.ID };
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
    let expected;

    beforeEach(() => {
      actions$ = hot('--a', { a: categoryLoadAction });
    });

    describe('when the call to CategoryService is successful', () => {
      it('should dispatch a DaffCategoryLoadSuccess and a DaffProductGridLoadSuccess action', () => {
        driverGetSpy.and.returnValue(of({
          category: stubCategory,
          categoryPageMetadata: stubCategoryPageMetadata,
          products: stubProducts,
        }));

        expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
        expect(effects.loadCategory$).toBeObservable(expected);
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
        const categoryLoadFailureAction = new DaffCategoryLoadFailure(error);
        expected = cold('--b', { b: categoryLoadFailureAction });
      });

      it('should dispatch a CategoryLoadFailure action', () => {
        expect(effects.loadCategory$).toBeObservable(expected);
      });
    });

    it('should call get category with the category request from the action payload', () => {
      driverGetSpy.and.returnValue(of({
        category: stubCategory,
        categoryPageMetadata: stubCategoryPageMetadata,
        products: stubProducts,
      }));

      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
      expect(effects.loadCategory$).toBeObservable(expected);

      expect(daffCategoryDriver.get).toHaveBeenCalledWith(categoryRequest);
    });

    describe('multiple times in quick succession', () => {
      let otherCategoryLoadAction: DaffCategoryLoad;
      let otherCategoryRequest: DaffCategoryIdRequest;

      beforeEach(() => {
        otherCategoryRequest = { id: 'someOtherCategory', kind: DaffCategoryPageRequestKind.ID };
        otherCategoryLoadAction = new DaffCategoryLoad(otherCategoryRequest);
        actions$ = hot('--(ab)', { a: categoryLoadAction, b: otherCategoryLoadAction });
      });

      it('should call get category with the category request from the action payload twice', () => {
        const resp = {
          category: null,
          categoryPageMetadata: null,
          products: [],
        };
        driverGetSpy.withArgs(categoryRequest).and.returnValue(cold('--a', { a: {
          category: stubCategory,
          categoryPageMetadata: stubCategoryPageMetadata,
          products: stubProducts,
        }}));
        driverGetSpy.withArgs(otherCategoryRequest).and.returnValue(cold('--a', { a: resp }));
        const otherCategoryLoadSuccessAction = new DaffCategoryLoadSuccess(resp);
        const otherProductGridLoadSuccess = new DaffProductGridLoadSuccess(resp.products);

        expected = cold('----(abdc)', {
          a: productGridLoadSuccessAction,
          b: categoryLoadSuccessAction,
          c: otherCategoryLoadSuccessAction,
          d: otherProductGridLoadSuccess,
        });
        expect(effects.loadCategory$).toBeObservable(expected);

        expect(daffCategoryDriver.get).toHaveBeenCalledWith(categoryRequest);
        expect(daffCategoryDriver.get).toHaveBeenCalledWith(otherCategoryRequest);
      });
    });
  });
});
