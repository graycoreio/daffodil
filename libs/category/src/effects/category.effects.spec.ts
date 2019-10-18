import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable ,  of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffProduct, DaffProductGridLoadSuccess } from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffCategoryFactory, DaffTestingCategoryService, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';

import { DaffCategoryEffects } from './category.effects';
import { DaffCategoryLoad, DaffCategoryLoadSuccess, DaffCategoryLoadFailure } from '../actions/category.actions';
import { DaffCategory } from '../models/category';
import { DaffCategoryServiceInterface } from '../drivers/interfaces/category-service.interface';
import { DaffCategoryDriver } from '../drivers/injection-tokens/category-driver.token';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';

describe('DaffCategoryEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCategoryEffects;
  let stubCategory: DaffCategory;
  let stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState;
  let stubProducts: DaffProduct[];
  let daffCategoryDriver: DaffCategoryServiceInterface;

  let categoryFactory: DaffCategoryFactory;
  let categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory;
  let categoryId;
  let productFactory: DaffProductFactory;

  beforeEach(() => {
    categoryId = 'category id';

    TestBed.configureTestingModule({
      providers: [
        DaffCategoryEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCategoryDriver, 
          useValue: new DaffTestingCategoryService(new DaffCategoryFactory(), new DaffCategoryPageConfigurationStateFactory(), new DaffProductFactory())
        },
      ]
    });

    effects = TestBed.get(DaffCategoryEffects);
    categoryFactory = TestBed.get(DaffCategoryFactory);
    categoryPageConfigurationStateFactory = TestBed.get(DaffCategoryPageConfigurationStateFactory);
    productFactory = new DaffProductFactory();

    daffCategoryDriver = TestBed.get(DaffCategoryDriver);

    stubCategory = categoryFactory.create();
    stubCategoryPageConfigurationState = categoryPageConfigurationStateFactory.create();
    stubProducts = productFactory.createMany(3);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CategoryLoadAction is triggered', () => {

    let expected;
    const categoryLoadAction = new DaffCategoryLoad(categoryId);
    
    describe('and the call to CategoryService is successful', () => {

      beforeEach(() => {
        spyOn(daffCategoryDriver, 'get').and.returnValue(of({
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

    describe('and the call to CategoryService fails', () => {
      
      beforeEach(() => {
        const error = 'Failed to load the category';
        const response = cold('#', {}, error);
        spyOn(daffCategoryDriver, 'get').and.returnValue(response);
        const categoryLoadFailureAction = new DaffCategoryLoadFailure(error);
        actions$ = hot('--a', { a: categoryLoadAction });
        expected = cold('--b', { b: categoryLoadFailureAction });
      });
      
      it('should dispatch a CategoryLoadFailure action', () => {
        expect(effects.loadCategory$).toBeObservable(expected);
      });
    });
  });
});
