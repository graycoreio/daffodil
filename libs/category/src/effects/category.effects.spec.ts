import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable ,  of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';

import { DaffProduct, DaffProductGridLoadSuccess, daffProductReducers } from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';

import { DaffCategoryEffects } from './category.effects';
import {
	DaffCategoryLoad,
	DaffCategoryLoadSuccess,
	DaffCategoryLoadFailure,
} from '../actions/category.actions';
import { DaffCategory } from '../models/category';
import { DaffCategoryServiceInterface } from '../drivers/interfaces/category-service.interface';
import { DaffCategoryDriver } from '../drivers/injection-tokens/category-driver.token';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffCategoryRequest } from '../models/requests/category-request';
import { daffCategoryReducers } from '../reducers/category-reducers';

class MockCategoryDriver implements DaffCategoryServiceInterface<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>, DaffProduct> {
	get(categoryRequest: any): Observable<any> {
		return null;
	}
}

describe('DaffCategoryEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCategoryEffects<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>, DaffProduct>;
  let stubCategory: DaffCategory;
  let stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState<DaffCategoryRequest>;
  let stubProducts: DaffProduct[];
  let daffCategoryDriver: DaffCategoryServiceInterface<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>, DaffProduct>;
  const daffCategoryDriverSpy = jasmine.createSpyObj('DaffCategoryDriver', ['get']);
  let store: MockStore<any>;

  let categoryFactory: DaffCategoryFactory;
  let categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory;
	let productFactory: DaffProductFactory;
	let categoryLoadSuccessAction: DaffCategoryLoadSuccess<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>, DaffProduct>;
	let productGridLoadSuccessAction: DaffProductGridLoadSuccess<DaffProduct>;

  beforeEach(() => {

    TestBed.configureTestingModule({
			imports: [
        StoreModule.forRoot({
          category: combineReducers(daffCategoryReducers),
          product: combineReducers(daffProductReducers)
        })
			],
      providers: [
        DaffCategoryEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCategoryDriver,
          useClass: MockCategoryDriver
        }
      ]
    });

    effects = TestBed.get(DaffCategoryEffects);
    store = TestBed.get(Store);
    categoryFactory = TestBed.get(DaffCategoryFactory);
    categoryPageConfigurationStateFactory = TestBed.get(DaffCategoryPageConfigurationStateFactory);
    productFactory = new DaffProductFactory();

		stubCategory = categoryFactory.create();
		stubCategoryPageConfigurationState = categoryPageConfigurationStateFactory.create();
		stubCategory.id = stubCategoryPageConfigurationState.id;
		stubProducts = productFactory.createMany(3);

    daffCategoryDriver = TestBed.get(DaffCategoryDriver);

		daffCategoryDriverSpy.get.and.returnValue(of({
			category: stubCategory,
			categoryPageConfigurationState: stubCategoryPageConfigurationState,
			products: stubProducts
		}));

		categoryLoadSuccessAction = new DaffCategoryLoadSuccess({
			category: stubCategory,
			categoryPageConfigurationState: stubCategoryPageConfigurationState,
			products: stubProducts
		});
		productGridLoadSuccessAction = new DaffProductGridLoadSuccess(stubProducts);
		store.dispatch(categoryLoadSuccessAction);
		store.dispatch(productGridLoadSuccessAction);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CategoryLoadAction is triggered', () => {
    let categoryPageLoadSuccessAction: DaffCategoryLoadSuccess;
		let expected;
		let categoryPageLoadAction;

		beforeEach(() => {
       categoryPageLoadAction = new DaffCategoryLoad({id: stubCategory.id});
       categoryPageLoadSuccessAction = new DaffCategoryLoadSuccess({
        category: stubCategory,
        categoryPageConfigurationState: stubCategoryPageConfigurationState,
        products: stubProducts
      });

      actions$ = hot('--a', { a: categoryPageLoadAction });
		});

    describe('when the call to CategoryService is successful', () => {
      it('should dispatch a DaffCategoryLoadSuccess and a DaffProductGridLoadSuccess action', () => {
				spyOn(daffCategoryDriver, 'get').and.returnValue(of({
					category: stubCategory,
					categoryPageConfigurationState: stubCategoryPageConfigurationState,
					products: stubProducts
				}));

        expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryPageLoadSuccessAction });
        expect(effects.loadCategory$).toBeObservable(expected);
      });
    });

    describe('when the call to CategoryService fails', () => {

      beforeEach(() => {
        const error = 'Failed to load the category';
				const response = cold('#', {}, error);
				spyOn(daffCategoryDriver, 'get').and.returnValue(response);
        const categoryPageLoadFailureAction = new DaffCategoryLoadFailure(error);
        expected = cold('--b', { b: categoryPageLoadFailureAction });
      });

      it('should dispatch a CategoryLoadFailure action', () => {
        expect(effects.loadCategory$).toBeObservable(expected);
      });
    });

    it('should call get category with only an id', () => {
			spyOn(daffCategoryDriver, 'get').and.returnValue(of({
				category: stubCategory,
				categoryPageConfigurationState: stubCategoryPageConfigurationState,
				products: stubProducts
			}));

      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryPageLoadSuccessAction });
      expect(effects.loadCategory$).toBeObservable(expected);

      expect(daffCategoryDriver.get).toHaveBeenCalledWith({ id: stubCategory.id });
    });
  });
});
