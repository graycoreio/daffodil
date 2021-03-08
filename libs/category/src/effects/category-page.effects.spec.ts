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
  Observable ,
  of,
} from 'rxjs';

import {
  DaffCategoryFactory,
  DaffCategoryPageConfigurationStateFactory,
  DaffCategoryTestingDriverModule,
} from '@daffodil/category/testing';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductGridLoadSuccess,
  daffProductReducers,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import {
  DaffCategoryPageLoad,
  DaffCategoryPageLoadFailure,
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageChangePageSize,
  DaffCategoryPageChangeCurrentPage,
  DaffCategoryPageChangeFilters,
  DaffCategoryPageToggleFilter,
  DaffCategoryPageChangeSortingOption,
} from '../actions/category-page.actions';
import { DaffCategoryDriver } from '../drivers/injection-tokens/category-driver.token';
import { DaffCategoryServiceInterface } from '../drivers/interfaces/category-service.interface';
import { DaffCategory } from '../models/category';
import { DaffCategoryFilterType } from '../models/category-filter-base';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import {
  DaffSortDirectionEnum,
  DaffCategoryRequest,
} from '../models/requests/category-request';
import { DaffCategoryFilterEqualRequest } from '../models/requests/filter-request';
import { daffCategoryReducers } from '../reducers/category-reducers';
import { DaffCategoryPageEffects } from './category-page.effects';

describe('DaffCategoryPageEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCategoryPageEffects<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>, DaffProduct>;
  let stubCategory: DaffCategory;
  let stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState<DaffCategoryRequest>;
  let stubProducts: DaffProduct[];
  let daffCategoryDriver: DaffCategoryServiceInterface;
  let store: Store<any>;
  let driverGetSpy: jasmine.Spy;

  let categoryFactory: DaffCategoryFactory;
  let categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory;
  let productFactory: DaffProductFactory;
  let categoryLoadSuccessAction: DaffCategoryPageLoadSuccess<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>, DaffProduct>;
  let productGridLoadSuccessAction: DaffProductGridLoadSuccess<DaffProduct>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          category: combineReducers(daffCategoryReducers),
          product: combineReducers(daffProductReducers),
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
    categoryPageConfigurationStateFactory = TestBed.inject(DaffCategoryPageConfigurationStateFactory);
    productFactory = new DaffProductFactory();

    stubCategory = categoryFactory.create();
    stubCategoryPageConfigurationState = categoryPageConfigurationStateFactory.create();
    stubCategory.id = stubCategoryPageConfigurationState.id;
    stubProducts = productFactory.createMany(3);

    daffCategoryDriver = TestBed.inject<DaffCategoryServiceInterface>(DaffCategoryDriver);

    driverGetSpy = spyOn(daffCategoryDriver, 'get');
    driverGetSpy.and.returnValue(of({
      category: stubCategory,
      categoryPageConfigurationState: stubCategoryPageConfigurationState,
      products: stubProducts,
    }));

    categoryLoadSuccessAction = new DaffCategoryPageLoadSuccess({
      category: stubCategory,
      categoryPageConfigurationState: stubCategoryPageConfigurationState,
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
 		  categoryLoadAction = new DaffCategoryPageLoad({ id: stubCategory.id });
    });

    describe('when the call to CategoryService is successful', () => {

      beforeEach(() => {
        actions$ = hot('--a', { a: categoryLoadAction });
      });

      it('should dispatch a DaffCategoryPageLoadSuccess and a DaffProductGridLoadSuccess action', () => {
        driverGetSpy.and.returnValue(of({
          category: stubCategory,
          categoryPageConfigurationState: stubCategoryPageConfigurationState,
          products: stubProducts,
        }));

        expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
        expect(effects.loadCategoryPage$).toBeObservable(expected);
      });
    });

    describe('when the call to CategoryService fails', () => {

      beforeEach(() => {
        const error = 'Failed to load the category';
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
    let categoryRequest: DaffCategoryRequest;

    beforeEach(() => {
      categoryRequest = { id: stubCategory.id };
      categoryPageLoadAction = new DaffCategoryPageLoad(categoryRequest);
      categoryPageLoadSuccessAction = new DaffCategoryPageLoadSuccess({
        category: stubCategory,
        categoryPageConfigurationState: stubCategoryPageConfigurationState,
        products: stubProducts,
      });

      actions$ = hot('--a', { a: categoryPageLoadAction });
    });

    describe('when the call to CategoryService is successful', () => {
      it('should dispatch a DaffCategoryPageLoadSuccess and a DaffProductGridLoadSuccess action', () => {
        driverGetSpy.and.returnValue(of({
          category: stubCategory,
          categoryPageConfigurationState: stubCategoryPageConfigurationState,
          products: stubProducts,
        }));

        expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryPageLoadSuccessAction });
        expect(effects.loadCategoryPage$).toBeObservable(expected);
      });
    });

    describe('when the call to CategoryService fails', () => {

      beforeEach(() => {
        const error = 'Failed to load the category';
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
        categoryPageConfigurationState: stubCategoryPageConfigurationState,
        products: stubProducts,
      }));

      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryPageLoadSuccessAction });
      expect(effects.loadCategoryPage$).toBeObservable(expected);

      expect(daffCategoryDriver.get).toHaveBeenCalledWith(categoryRequest);
    });
  });

  describe('when ChangeCategoryPageSize action is triggered', () => {

    let expected;

    it('should call get category with an id, page size, applied filters, and an applied sort option', () => {
      driverGetSpy.and.returnValue(of({
        category: stubCategory,
        categoryPageConfigurationState: stubCategoryPageConfigurationState,
        products: stubProducts,
      }));
      const changeCategoryPageSizeAction = new DaffCategoryPageChangePageSize(3);
      actions$ = hot('--a', { a: changeCategoryPageSizeAction });

      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
      expect(effects.changeCategoryPageSize$).toBeObservable(expected);
      expect(daffCategoryDriver.get).toHaveBeenCalledWith({
        ...stubCategoryPageConfigurationState,
        page_size: 3,
      });
    });
  });

  describe('when ChangeCategoryCurrentPage action is triggered', () => {

    let expected;

    it('should call get category with every available parameter', () => {
      driverGetSpy.and.returnValue(of({
        category: stubCategory,
        categoryPageConfigurationState: stubCategoryPageConfigurationState,
        products: stubProducts,
      }));
      const changeCategoryCurrentPageAction = new DaffCategoryPageChangeCurrentPage(3);
      actions$ = hot('--a', { a: changeCategoryCurrentPageAction });

      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
      expect(effects.changeCategoryCurrentPage$).toBeObservable(expected);
      expect(daffCategoryDriver.get).toHaveBeenCalledWith({
        ...stubCategoryPageConfigurationState,
        current_page: 3,
      });
    });
  });

  describe('when ChangeCategoryFiltersAction is triggered', () => {

    let expected;

    it('should call get category with an id, page size, applied filters, and an applied sorting option', () => {
      driverGetSpy.and.returnValue(of({
        category: stubCategory,
        categoryPageConfigurationState: stubCategoryPageConfigurationState,
        products: stubProducts,
      }));
      const changeCategoryFiltersAction = new DaffCategoryPageChangeFilters([{
        name: 'name',
        type: DaffCategoryFilterType.Equal,
        value: ['value'],
      }]);
      actions$ = hot('--a', { a: changeCategoryFiltersAction });

      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
      expect(effects.changeCategoryFilters$).toBeObservable(expected);
      expect(daffCategoryDriver.get).toHaveBeenCalledWith({
        ...stubCategoryPageConfigurationState,
        filter_requests: [{
          name: 'name',
          type: DaffCategoryFilterType.Equal,
          value: ['value'],
        }],
      });
    });
  });

  describe('when ToggleCategoryFilterAction is triggered', () => {

    let expected;

    it('should call get category with an id, page size, applied filters, and an applied sorting option', () => {
      driverGetSpy.and.returnValue(of({
        category: stubCategory,
        categoryPageConfigurationState: stubCategoryPageConfigurationState,
        products: stubProducts,
      }));
      const appliedFilter: DaffCategoryFilterEqualRequest = {
        name: 'name',
        type: DaffCategoryFilterType.Equal,
        value: ['value'],
      };
      const toggleCategoryFilterAction = new DaffCategoryPageToggleFilter({
        name: 'name',
        type: DaffCategoryFilterType.Equal,
        value: 'value',
      });
      store.dispatch(toggleCategoryFilterAction);
      actions$ = hot('--a', { a: toggleCategoryFilterAction });

      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
      expect(effects.toggleCategoryFilter$).toBeObservable(expected);
      expect(daffCategoryDriver.get).toHaveBeenCalledWith({
        ...stubCategoryPageConfigurationState,
        filter_requests: [appliedFilter],
      });
    });
  });

  describe('when ChangeCategorySortAction is triggered', () => {

    let expected;

    it('should call get category with an id, page size, applied filters, and an applied sorting option', () => {
      driverGetSpy.and.returnValue(of({
        category: stubCategory,
        categoryPageConfigurationState: stubCategoryPageConfigurationState,
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
        ...stubCategoryPageConfigurationState,
        applied_sort_direction: DaffSortDirectionEnum.Ascending,
        applied_sort_option: 'option',
      });
    });
  });
});
