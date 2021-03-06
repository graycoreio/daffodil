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
  DaffCategoryRequest,
  DaffCategory,
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
  DaffStatefulCategoryPageConfigurationState,
} from '@daffodil/category/state';
import { DaffStatefulCategoryPageConfigurationStateFactory } from '@daffodil/category/state/testing';
import { DaffCategoryFactory } from '@daffodil/category/testing';
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
  let stubCategoryPageConfigurationState: DaffStatefulCategoryPageConfigurationState;
  let stubProducts: DaffProduct[];
  let daffCategoryDriver: DaffCategoryServiceInterface;
  let store: Store<any>;
  let driverGetSpy: jasmine.Spy;

  let categoryFactory: DaffCategoryFactory;
  let categoryPageConfigurationStateFactory: DaffStatefulCategoryPageConfigurationStateFactory;
  let productFactory: DaffProductFactory;
  let productGridLoadSuccessAction: DaffProductGridLoadSuccess;
  let categoryLoadSuccessAction: DaffCategoryLoadSuccess;
  let categoryLoadAction;
  let categoryRequest: DaffCategoryRequest;

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
    categoryPageConfigurationStateFactory = TestBed.inject(DaffStatefulCategoryPageConfigurationStateFactory);
    productFactory = TestBed.inject(DaffProductFactory);

    stubCategory = categoryFactory.create();
    stubCategoryPageConfigurationState = categoryPageConfigurationStateFactory.create();
    stubCategory.id = stubCategoryPageConfigurationState.id;
    stubProducts = productFactory.createMany(3);


    driverGetSpy = spyOn(daffCategoryDriver, 'get');
    driverGetSpy.and.returnValue(of({
      category: stubCategory,
      categoryPageConfigurationState: stubCategoryPageConfigurationState,
      products: stubProducts,
    }));

    productGridLoadSuccessAction = new DaffProductGridLoadSuccess(stubProducts);
    categoryRequest = { id: stubCategory.id };
    categoryLoadAction = new DaffCategoryLoad(categoryRequest);
    categoryLoadSuccessAction = new DaffCategoryLoadSuccess({
      category: stubCategory,
      categoryPageConfigurationState: stubCategoryPageConfigurationState,
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
          categoryPageConfigurationState: stubCategoryPageConfigurationState,
          products: stubProducts,
        }));

        expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
        expect(effects.loadCategory$).toBeObservable(expected);
      });
    });

    describe('when the call to CategoryService fails', () => {

      beforeEach(() => {
        const error = 'Failed to load the category';
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
        categoryPageConfigurationState: stubCategoryPageConfigurationState,
        products: stubProducts,
      }));

      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
      expect(effects.loadCategory$).toBeObservable(expected);

      expect(daffCategoryDriver.get).toHaveBeenCalledWith(categoryRequest);
    });

    describe('multiple times in quick succession', () => {
      let otherCategoryLoadAction: DaffCategoryLoad;
      let otherCategoryRequest: DaffCategoryRequest;

      beforeEach(() => {
        otherCategoryRequest = { id: 'someOtherCategory' };
        otherCategoryLoadAction = new DaffCategoryLoad(otherCategoryRequest);
        actions$ = hot('--(ab)', { a: categoryLoadAction, b: otherCategoryLoadAction });
      });

      it('should call get category with the category request from the action payload twice', () => {
        const resp = {
          category: null,
          categoryPageConfigurationState: null,
          products: [],
        };
        driverGetSpy.withArgs(categoryRequest).and.returnValue(cold('--a', { a: {
          category: stubCategory,
          categoryPageConfigurationState: stubCategoryPageConfigurationState,
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
