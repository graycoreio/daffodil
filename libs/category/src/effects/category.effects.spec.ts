import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable ,  of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { DaffProduct, DaffProductGridLoadSuccess, daffProductReducers } from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory, DaffCategoryTestingDriverModule } from '@daffodil/category/testing';

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

describe('DaffCategoryEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCategoryEffects<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>, DaffProduct>;
  let stubCategory: DaffCategory;
  let stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState;
  let stubProducts: DaffProduct[];
  let daffCategoryDriver: DaffCategoryServiceInterface;
  let store: Store<any>;
  let driverGetSpy: jasmine.Spy;

  let categoryFactory: DaffCategoryFactory;
  let categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory;
	let productFactory: DaffProductFactory;
  let productGridLoadSuccessAction: DaffProductGridLoadSuccess;
  let categoryLoadSuccessAction: DaffCategoryLoadSuccess;
  let categoryLoadAction;
  let categoryRequest: DaffCategoryRequest;

  beforeEach(() => {

    TestBed.configureTestingModule({
			imports: [
        StoreModule.forRoot({
          category: combineReducers(daffCategoryReducers),
          product: combineReducers(daffProductReducers)
        }),
        DaffCategoryTestingDriverModule.forRoot()
			],
      providers: [
        DaffCategoryEffects,
        provideMockActions(() => actions$),
      ]
    });

    store = TestBed.inject(Store);
    effects = TestBed.inject(DaffCategoryEffects);
    categoryFactory = TestBed.inject(DaffCategoryFactory);
    daffCategoryDriver = TestBed.inject<DaffCategoryServiceInterface>(DaffCategoryDriver);
    categoryPageConfigurationStateFactory = TestBed.inject(DaffCategoryPageConfigurationStateFactory);
    productFactory = TestBed.inject(DaffProductFactory);

		stubCategory = categoryFactory.create();
		stubCategoryPageConfigurationState = categoryPageConfigurationStateFactory.create();
		stubCategory.id = stubCategoryPageConfigurationState.id;
		stubProducts = productFactory.createMany(3);


    driverGetSpy = spyOn(daffCategoryDriver, 'get');
		driverGetSpy.and.returnValue(of({
			category: stubCategory,
			categoryPageConfigurationState: stubCategoryPageConfigurationState,
			products: stubProducts
		}));

    productGridLoadSuccessAction = new DaffProductGridLoadSuccess(stubProducts);
    categoryRequest = {id: stubCategory.id};
    categoryLoadAction = new DaffCategoryLoad(categoryRequest);
    categoryLoadSuccessAction = new DaffCategoryLoadSuccess({
      category: stubCategory,
      categoryPageConfigurationState: stubCategoryPageConfigurationState,
      products: stubProducts
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
					products: stubProducts
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
				products: stubProducts
			}));

      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
      expect(effects.loadCategory$).toBeObservable(expected);

      expect(daffCategoryDriver.get).toHaveBeenCalledWith(categoryRequest);
    });
  });
});
