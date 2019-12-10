import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable ,  of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { DaffProduct, DaffProductGridLoadSuccess } from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';

import { DaffCategoryEffects } from './category.effects';
import { DaffCategoryLoad, DaffCategoryLoadSuccess, DaffCategoryLoadFailure, DaffChangeCategoryPageSize, DaffChangeCategoryCurrentPage } from '../actions/category.actions';
import { DaffCategory } from '../models/category';
import { DaffCategoryServiceInterface } from '../drivers/interfaces/category-service.interface';
import { DaffCategoryDriver } from '../drivers/injection-tokens/category-driver.token';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { selectSelectedCategoryId, selectCategoryPageSize } from '../selectors/category.selector';

describe('DaffCategoryEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCategoryEffects;
  let stubCategory: DaffCategory;
  let stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState;
  let stubProducts: DaffProduct[];
  let daffCategoryDriver: DaffCategoryServiceInterface;
  const daffCategoryDriverSpy = jasmine.createSpyObj('DaffCategoryDriver', ['get']);
  let store: MockStore<any>;

  let categoryFactory: DaffCategoryFactory;
  let categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory;
  let categoryId;
  let productFactory: DaffProductFactory;
  const initialPageSize = 4;

  beforeEach(() => {
    categoryId = 'category id';

    TestBed.configureTestingModule({
      providers: [
        DaffCategoryEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCategoryDriver, 
          useValue: daffCategoryDriverSpy
        },
        provideMockStore({})
      ]
    });

    effects = TestBed.get(DaffCategoryEffects);
    store = TestBed.get(Store);
    categoryFactory = TestBed.get(DaffCategoryFactory);
    categoryPageConfigurationStateFactory = TestBed.get(DaffCategoryPageConfigurationStateFactory);
    productFactory = new DaffProductFactory();

    daffCategoryDriver = TestBed.get(DaffCategoryDriver);
    store.overrideSelector(selectSelectedCategoryId, categoryId);
    store.overrideSelector(selectCategoryPageSize, initialPageSize);

    stubCategory = categoryFactory.create();
    stubCategoryPageConfigurationState = categoryPageConfigurationStateFactory.create();
    stubProducts = productFactory.createMany(3);
  });

  afterAll(() => {
    store.resetSelectors();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('processCategoryGetRequest', () => {
    
    let expected;
    const categoryLoadAction = new DaffCategoryLoad(categoryId);
    
    describe('when the call to CategoryService is successful', () => {

      beforeEach(() => {
        daffCategoryDriverSpy.get.and.returnValue(of({
          category: stubCategory,
          categoryPageConfigurationState: stubCategoryPageConfigurationState,
          products: stubProducts
        }));
        actions$ = hot('--a', { a: categoryLoadAction });
      });
      
      it('should dispatch a DaffCategoryLoadSuccess and a DaffProductGridLoadSuccess action', () => {
        const categoryLoadSuccessAction = new DaffCategoryLoadSuccess({
          category: stubCategory,
          categoryPageConfigurationState: stubCategoryPageConfigurationState,
          products: stubProducts
        });
        const productGridLoadSuccessAction = new DaffProductGridLoadSuccess(stubProducts);
        expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
        expect(effects.loadCategory$).toBeObservable(expected);
      });
    });

    describe('when the call to CategoryService fails', () => {
      
      beforeEach(() => {
        const error = 'Failed to load the category';
        const response = cold('#', {}, error);
        daffCategoryDriverSpy.get.and.returnValue(response);
        const categoryLoadFailureAction = new DaffCategoryLoadFailure(error);
        actions$ = hot('--a', { a: categoryLoadAction });
        expected = cold('--b', { b: categoryLoadFailureAction });
      });
      
      it('should dispatch a CategoryLoadFailure action', () => {
        expect(effects.loadCategory$).toBeObservable(expected);
      });
    });
  });
  describe('when CategoryLoadAction is triggered', () => {

    let expected;
    
    it('should call get category with only an id', () => {
      daffCategoryDriverSpy.get.and.returnValue(of({
        category: stubCategory,
        categoryPageConfigurationState: stubCategoryPageConfigurationState,
        products: stubProducts
      }));
      const categoryLoadAction = new DaffCategoryLoad({ id: categoryId });
      actions$ = hot('--a', { a: categoryLoadAction });
      const categoryLoadSuccessAction = new DaffCategoryLoadSuccess({
        category: stubCategory,
        categoryPageConfigurationState: stubCategoryPageConfigurationState,
        products: stubProducts
      });
      const productGridLoadSuccessAction = new DaffProductGridLoadSuccess(stubProducts);
      
      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
      expect(effects.loadCategory$).toBeObservable(expected);

      expect(daffCategoryDriver.get).toHaveBeenCalledWith({ id: categoryId });
    });
  });

  describe('when ChangeCategoryPageSize action is triggered', () => {

    let expected;
    
    it('should call get category with an id and ', () => {
      daffCategoryDriverSpy.get.and.returnValue(of({
        category: stubCategory,
        categoryPageConfigurationState: stubCategoryPageConfigurationState,
        products: stubProducts
      }));
      const changeCategoryPageSizeAction = new DaffChangeCategoryPageSize(3);
      actions$ = hot('--a', { a: changeCategoryPageSizeAction });
      const categoryLoadSuccessAction = new DaffCategoryLoadSuccess({
        category: stubCategory,
        categoryPageConfigurationState: stubCategoryPageConfigurationState,
        products: stubProducts
      });
      const productGridLoadSuccessAction = new DaffProductGridLoadSuccess(stubProducts);
      
      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
      expect(effects.changeCategoryPageSize$).toBeObservable(expected);

      expect(daffCategoryDriver.get).toHaveBeenCalledWith({ 
        id: categoryId,
        page_size: 3
      });
    });
  });

  describe('when ChangeCategoryCurrentPage action is triggered', () => {

    let expected;
    
    it('should call get category with an id and ', () => {
      daffCategoryDriverSpy.get.and.returnValue(of({
        category: stubCategory,
        categoryPageConfigurationState: stubCategoryPageConfigurationState,
        products: stubProducts
      }));
      const changeCategoryCurrentPageAction = new DaffChangeCategoryCurrentPage(3);
      actions$ = hot('--a', { a: changeCategoryCurrentPageAction });
      const categoryLoadSuccessAction = new DaffCategoryLoadSuccess({
        category: stubCategory,
        categoryPageConfigurationState: stubCategoryPageConfigurationState,
        products: stubProducts
      });
      const productGridLoadSuccessAction = new DaffProductGridLoadSuccess(stubProducts);
      
      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
      expect(effects.changeCategoryCurrentPage$).toBeObservable(expected);

      expect(daffCategoryDriver.get).toHaveBeenCalledWith({ 
        id: categoryId,
        page_size: initialPageSize,
        current_page: 3
      });
    });
  });
});
