import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable ,  of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffProduct, DaffProductGridLoadSuccess } from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffCategoryFactory, DaffTestingCategoryService } from '@daffodil/category/testing';

import { DaffCategoryEffects } from './category.effects';
import { DaffCategoryLoad, DaffCategoryLoadSuccess, DaffCategoryLoadFailure } from '../actions/category.actions';
import { DaffCategory } from '../models/category';
import { DaffCategoryServiceInterface } from '../drivers/interfaces/category-service.interface';
import { DaffCategoryDriver } from '../drivers/injection-tokens/category-driver.token';

describe('DaffCategoryEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCategoryEffects;
  let mockCategory: DaffCategory;
  let mockProducts: DaffProduct[];
  let daffCategoryDriver: DaffCategoryServiceInterface;

  let categoryFactory: DaffCategoryFactory;
  let categoryId;
  let productFactory: DaffProductFactory;

  beforeEach(() => {
    categoryId = "category id";

    TestBed.configureTestingModule({
      providers: [
        DaffCategoryEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCategoryDriver, 
          useValue: new DaffTestingCategoryService(new DaffCategoryFactory(), new DaffProductFactory())
        },
      ]
    });

    effects = TestBed.get(DaffCategoryEffects);
    categoryFactory = TestBed.get(DaffCategoryFactory);
    productFactory = new DaffProductFactory();

    daffCategoryDriver = TestBed.get(DaffCategoryDriver);

    mockCategory = categoryFactory.create();
    mockProducts = productFactory.createMany(3);
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
          category: mockCategory,
          products: mockProducts
        }));
        actions$ = hot('--a', { a: categoryLoadAction });
      });
      
      it('should dispatch a DaffCategoryLoadSuccess and a DaffProductGridLoadSuccess action', () => {
        const categoryLoadSuccessAction = new DaffCategoryLoadSuccess(mockCategory);
        const productGridLoadSuccessAction = new DaffProductGridLoadSuccess(mockProducts);
        expected = cold('--(bc)', { c: categoryLoadSuccessAction, b: productGridLoadSuccessAction });
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
