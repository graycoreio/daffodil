import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable ,  of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

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
  let daffCategoryDriver: DaffCategoryServiceInterface;

  let categoryFactory: DaffCategoryFactory;
  let categoryId;

  beforeEach(() => {
    categoryId = "category id";

    TestBed.configureTestingModule({
      providers: [
        DaffCategoryEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCategoryDriver, 
          useValue: new DaffTestingCategoryService(new DaffCategoryFactory())
        },
      ]
    });

    effects = TestBed.get(DaffCategoryEffects);
    categoryFactory = TestBed.get(DaffCategoryFactory);

    daffCategoryDriver = TestBed.get(DaffCategoryDriver);

    mockCategory = categoryFactory.create();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CategoryLoadAction is triggered', () => {

    let expected;
    const categoryLoadAction = new DaffCategoryLoad(categoryId);
    
    describe('and the call to CategoryService is successful', () => {

      beforeEach(() => {
        spyOn(daffCategoryDriver, 'get').and.returnValue(of(mockCategory));
        const categoryLoadSuccessAction = new DaffCategoryLoadSuccess(mockCategory);
        actions$ = hot('--a', { a: categoryLoadAction });
        expected = cold('--b', { b: categoryLoadSuccessAction });
      });
      
      it('should dispatch a CategoryLoadSuccess action', () => {
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
