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
import { 
	DaffCategoryLoad, 
	DaffCategoryLoadSuccess, 
	DaffCategoryLoadFailure, 
	DaffChangeCategoryPageSize, 
	DaffChangeCategoryCurrentPage, 
	DaffChangeCategoryFilters, 
	DaffChangeCategorySortingOption, 
	DaffToggleCategoryFilter
} from '../actions/category.actions';
import { DaffCategory } from '../models/category';
import { DaffCategoryServiceInterface } from '../drivers/interfaces/category-service.interface';
import { DaffCategoryDriver } from '../drivers/injection-tokens/category-driver.token';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { 
	selectSelectedCategoryId, 
	selectCategoryPageSize,
	selectCategoryPageAppliedFilters, 
	selectCategoryPageAppliedSortOption, 
	selectCategoryPageAppliedSortDirection 
} from '../selectors/category.selector';
import { DaffSortDirectionEnum } from '../models/requests/category-request';
import { DaffCategoryFilterAction, DaffCategoryFilterActionEnum } from '../models/requests/filter-action';

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
	let categoryLoadSuccessAction: DaffCategoryLoadSuccess;
	let productGridLoadSuccessAction: DaffProductGridLoadSuccess;

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

    stubCategory = categoryFactory.create();
    stubCategoryPageConfigurationState = categoryPageConfigurationStateFactory.create();
		stubProducts = productFactory.createMany(3);
		
    daffCategoryDriver = TestBed.get(DaffCategoryDriver);
    store.overrideSelector(selectSelectedCategoryId, categoryId);
    store.overrideSelector(selectCategoryPageSize, stubCategoryPageConfigurationState.page_size);
    store.overrideSelector(selectCategoryPageAppliedFilters, stubCategoryPageConfigurationState.applied_filters);
    store.overrideSelector(selectCategoryPageAppliedSortOption, stubCategoryPageConfigurationState.applied_sort_option);
		store.overrideSelector(selectCategoryPageAppliedSortDirection, stubCategoryPageConfigurationState.applied_sort_direction);
		
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
		productGridLoadSuccessAction = new DaffProductGridLoadSuccess(stubProducts)
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
        actions$ = hot('--a', { a: categoryLoadAction });
      });
      
      it('should dispatch a DaffCategoryLoadSuccess and a DaffProductGridLoadSuccess action', () => {
        
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
      const categoryLoadAction = new DaffCategoryLoad({ id: categoryId });
      actions$ = hot('--a', { a: categoryLoadAction });
      
      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
      expect(effects.loadCategory$).toBeObservable(expected);

      expect(daffCategoryDriver.get).toHaveBeenCalledWith({ id: categoryId });
    });
  });

  describe('when ChangeCategoryPageSize action is triggered', () => {

    let expected;
    
    it('should dispatch a category load with an id, page size, applied filters, and an applied sort option', () => {
      const changeCategoryPageSizeAction = new DaffChangeCategoryPageSize(3);
      actions$ = hot('--a', { a: changeCategoryPageSizeAction });
      
			const categoryLoadAction = new DaffCategoryLoad({ 
        id: categoryId,
				page_size: 3,
				applied_filters: stubCategoryPageConfigurationState.applied_filters,
				applied_sort_option: stubCategoryPageConfigurationState.applied_sort_option,
				applied_sort_direction: stubCategoryPageConfigurationState.applied_sort_direction
      });
			expected = cold('--(a)', { a: categoryLoadAction });
      expect(effects.changeCategoryPageSize$).toBeObservable(expected);
    });
  });

  describe('when ChangeCategoryCurrentPage action is triggered', () => {

    let expected;
    
    it('should dispatch a category load with every available parameter', () => {
      const changeCategoryCurrentPageAction = new DaffChangeCategoryCurrentPage(3);
      actions$ = hot('--a', { a: changeCategoryCurrentPageAction });
			
			const categoryLoadAction = new DaffCategoryLoad({ 
        id: categoryId,
        page_size: stubCategoryPageConfigurationState.page_size,
				current_page: 3,
				applied_sort_direction: stubCategoryPageConfigurationState.applied_sort_direction,
				applied_sort_option: stubCategoryPageConfigurationState.applied_sort_option,
				applied_filters: stubCategoryPageConfigurationState.applied_filters
      });
      expected = cold('--(a)', { a: categoryLoadAction });
      expect(effects.changeCategoryCurrentPage$).toBeObservable(expected);
    });
  });

  describe('when ChangeCategoryFiltersAction is triggered', () => {

    let expected;
    
    it('should dispatch a category load with an id, page size, applied filters, and an applied sorting option', () => {
      const changeCategoryFiltersAction = new DaffChangeCategoryFilters([{
				name: 'name',
				action: DaffCategoryFilterActionEnum.Equal,
				value: 'value'
			}]);
      actions$ = hot('--a', { a: changeCategoryFiltersAction });
			
			const categoryLoadAction = new DaffCategoryLoad({ 
				id: categoryId,
        page_size: stubCategoryPageConfigurationState.page_size,
				applied_sort_direction: stubCategoryPageConfigurationState.applied_sort_direction,
				applied_sort_option: stubCategoryPageConfigurationState.applied_sort_option,
				applied_filters: [{
					name: 'name',
					action: DaffCategoryFilterActionEnum.Equal,
					value: 'value'
				}]
      });
      expected = cold('--(a)', { a: categoryLoadAction });
      expect(effects.changeCategoryFilters$).toBeObservable(expected);
    });
  });

  describe('when ToggleCategoryFilterAction is triggered', () => {

		let expected;
		// We need the filters to exist in separate memory to simulate a true object to object comparison.
		let existingFilter: DaffCategoryFilterAction;
		let newFilter: DaffCategoryFilterAction;

		beforeEach(() => {
			existingFilter = {
				name: 'name',
				action: DaffCategoryFilterActionEnum.Equal,
				value: 'value'
			};
			newFilter = {
				name: 'name',
				action: DaffCategoryFilterActionEnum.Equal,
				value: 'value'
			};
		});
		
		describe('and the toggled filter is not an applied filter', () => {

			beforeEach(() => {
				store.overrideSelector(selectCategoryPageAppliedFilters, []);
			});
			
			it('should dispatch a category load with the toggled filter', () => {
				const toggleCategoryFilterAction = new DaffToggleCategoryFilter(newFilter);
				actions$ = hot('--a', { a: toggleCategoryFilterAction });
				
				const categoryLoadAction = new DaffCategoryLoad({ 
					id: categoryId,
					page_size: stubCategoryPageConfigurationState.page_size,
					applied_sort_direction: stubCategoryPageConfigurationState.applied_sort_direction,
					applied_sort_option: stubCategoryPageConfigurationState.applied_sort_option,
					applied_filters: [newFilter]
				});
				expected = cold('--(a)', { a: categoryLoadAction });
				expect(effects.toggleCategoryFilter$).toBeObservable(expected);
			});
		});

		describe('and toggled filter is an applied filter', () => {

			beforeEach(() => {
				store.overrideSelector(selectCategoryPageAppliedFilters, [existingFilter]);
			});
			
			it('should not dispatch a category load with the toggled filter', () => {
				const toggleCategoryFilterAction = new DaffToggleCategoryFilter(newFilter);
				actions$ = hot('--a', { a: toggleCategoryFilterAction });
				
				const categoryLoadAction = new DaffCategoryLoad({ 
					id: categoryId,
					page_size: stubCategoryPageConfigurationState.page_size,
					applied_sort_direction: stubCategoryPageConfigurationState.applied_sort_direction,
					applied_sort_option: stubCategoryPageConfigurationState.applied_sort_option,
					applied_filters: []
				});
				expected = cold('--(a)', { a: categoryLoadAction });
				expect(effects.toggleCategoryFilter$).toBeObservable(expected);
			});
		});
  });

  describe('when ChangeCategorySortAction is triggered', () => {

    let expected;
    
    it('should dispatch a category load with an id, page size, applied filters, and an applied sorting option', () => {
      const changeCategorySortingOption = new DaffChangeCategorySortingOption({
				option: 'option',
				direction: DaffSortDirectionEnum.Ascending
			});
      actions$ = hot('--a', { a: changeCategorySortingOption });
			
			const categoryLoadAction = new DaffCategoryLoad({ 
				id: categoryId,
        page_size: stubCategoryPageConfigurationState.page_size,
				applied_sort_direction: DaffSortDirectionEnum.Ascending,
				applied_sort_option: 'option',
				applied_filters: stubCategoryPageConfigurationState.applied_filters
      });
      expected = cold('--(a)', { a: categoryLoadAction });
      expect(effects.changeCategorySort$).toBeObservable(expected);
    });
  });
});
