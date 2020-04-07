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
import { DaffSortDirectionEnum, DaffCategoryRequest } from '../models/requests/category-request';
import { DaffCategoryFilterEqualRequest } from '../models/requests/filter-request';
import { DaffCategoryFilterType } from '../models/category-filter-base';
import { daffCategoryReducers } from '../reducers/category-reducers';

class MockCategoryDriver implements DaffCategoryServiceInterface<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState> {
	get(categoryRequest: any): Observable<any> {
		return null;
	}
}

describe('DaffCategoryEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCategoryEffects<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState>;
  let stubCategory: DaffCategory;
  let stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState;
  let stubProducts: DaffProduct[];
  let daffCategoryDriver: DaffCategoryServiceInterface<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState>;
  const daffCategoryDriverSpy = jasmine.createSpyObj('DaffCategoryDriver', ['get']);
  let store: MockStore<any>;

  let categoryFactory: DaffCategoryFactory;
  let categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory;
	let productFactory: DaffProductFactory;
	let categoryLoadSuccessAction: DaffCategoryLoadSuccess<DaffCategory, DaffCategoryPageConfigurationState>;
	let productGridLoadSuccessAction: DaffProductGridLoadSuccess;

  beforeEach(() => {

    TestBed.configureTestingModule({
			imports: [
        StoreModule.forRoot({
          category: combineReducers(daffCategoryReducers()),
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

  describe('processCategoryGetRequest', () => {
    
		let expected;
		let categoryLoadAction;

		beforeEach(() => {
 			categoryLoadAction = new DaffCategoryLoad({id: stubCategory.id});
		})
    
    describe('when the call to CategoryService is successful', () => {

      beforeEach(() => {
        actions$ = hot('--a', { a: categoryLoadAction });
      });
      
      it('should dispatch a DaffCategoryLoadSuccess and a DaffProductGridLoadSuccess action', () => {
				spyOn(daffCategoryDriver, 'get').and.returnValue(of({
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

	describe('validateFilters', () => {
		
		it('should throw an error when an invalid range type format is given', () => {
			expect(() => {
				effects.validateFilters([{
					name: 'price',
					value: ['invalidFormat'],
					type: DaffCategoryFilterType.Range
				}])
			}).toThrowError('Category range filter is in an invalid format. Should be **-**');
		});

		it('should throw an error when two filters share the same name', () => {
			expect(() => {
				effects.validateFilters([{
					name: 'name',
					value: ['value'],
					type: DaffCategoryFilterType.Equal
				},
				{
					name: 'name',
					value: ['value2'],
					type: DaffCategoryFilterType.Equal
				}
			])
			}).toThrowError('More than one category filter of the same name exists. These should' +
						' be combined into a single filter action with multiple values.');
		});
	});

  describe('when CategoryLoadAction is triggered', () => {

    let expected;
    
    it('should call get category with only an id', () => {
			spyOn(daffCategoryDriver, 'get').and.returnValue(of({
				category: stubCategory,
				categoryPageConfigurationState: stubCategoryPageConfigurationState,
				products: stubProducts
			}));
      const categoryLoadAction = new DaffCategoryLoad({ id: stubCategory.id });
      actions$ = hot('--a', { a: categoryLoadAction });
      
      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
      expect(effects.loadCategory$).toBeObservable(expected);

      expect(daffCategoryDriver.get).toHaveBeenCalledWith({ id: stubCategory.id });
    });
	});

  describe('when ChangeCategoryPageSize action is triggered', () => {

    let expected;
    
    it('should call get category with an id, page size, applied filters, and an applied sort option', () => {
			spyOn(daffCategoryDriver, 'get').and.returnValue(of({
				category: stubCategory,
				categoryPageConfigurationState: stubCategoryPageConfigurationState,
				products: stubProducts
			}));
      const changeCategoryPageSizeAction = new DaffChangeCategoryPageSize(3);
      actions$ = hot('--a', { a: changeCategoryPageSizeAction });
      
      expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
			expect(effects.changeCategoryPageSize$).toBeObservable(expected);
      expect(daffCategoryDriver.get).toHaveBeenCalledWith({ 
        id: stubCategory.id,
				page_size: 3,
				filter_requests: stubCategoryPageConfigurationState.filter_requests,
				applied_sort_option: stubCategoryPageConfigurationState.applied_sort_option,
				applied_sort_direction: stubCategoryPageConfigurationState.applied_sort_direction
      });
    });
  });

  describe('when ChangeCategoryCurrentPage action is triggered', () => {

    let expected;
    
    it('should call get category with every available parameter', () => {
			spyOn(daffCategoryDriver, 'get').and.returnValue(of({
				category: stubCategory,
				categoryPageConfigurationState: stubCategoryPageConfigurationState,
				products: stubProducts
			}));
      const changeCategoryCurrentPageAction = new DaffChangeCategoryCurrentPage(3);
      actions$ = hot('--a', { a: changeCategoryCurrentPageAction });
			
			expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
			expect(effects.changeCategoryCurrentPage$).toBeObservable(expected);
			expect(daffCategoryDriver.get).toHaveBeenCalledWith({ 
        id: stubCategory.id,
        page_size: stubCategoryPageConfigurationState.page_size,
				current_page: 3,
				applied_sort_direction: stubCategoryPageConfigurationState.applied_sort_direction,
				applied_sort_option: stubCategoryPageConfigurationState.applied_sort_option,
				filter_requests: stubCategoryPageConfigurationState.filter_requests
      });
    });
  });

  describe('when ChangeCategoryFiltersAction is triggered', () => {

    let expected;
    
    it('should call get category with an id, page size, applied filters, and an applied sorting option', () => {
			spyOn(daffCategoryDriver, 'get').and.returnValue(of({
				category: stubCategory,
				categoryPageConfigurationState: stubCategoryPageConfigurationState,
				products: stubProducts
			}));
      const changeCategoryFiltersAction = new DaffChangeCategoryFilters([{
				name: 'name',
				type: DaffCategoryFilterType.Equal,
				value: ['value']
			}]);
      actions$ = hot('--a', { a: changeCategoryFiltersAction });
			
			expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
			expect(effects.changeCategoryFilters$).toBeObservable(expected);
			expect(daffCategoryDriver.get).toHaveBeenCalledWith({ 
				id: stubCategory.id,
        page_size: stubCategoryPageConfigurationState.page_size,
				applied_sort_direction: stubCategoryPageConfigurationState.applied_sort_direction,
				applied_sort_option: stubCategoryPageConfigurationState.applied_sort_option,
				filter_requests: [{
					name: 'name',
					type: DaffCategoryFilterType.Equal,
					value: ['value']
				}]
      });
    });
	});

  describe('when ToggleCategoryFilterAction is triggered', () => {

    let expected;
    
    it('should call get category with an id, page size, applied filters, and an applied sorting option', () => {
			spyOn(daffCategoryDriver, 'get').and.returnValue(of({
				category: stubCategory,
				categoryPageConfigurationState: stubCategoryPageConfigurationState,
				products: stubProducts
			}));
			const appliedFilter: DaffCategoryFilterEqualRequest = {
				name: 'name',
				type: DaffCategoryFilterType.Equal,
				value: ['value']
			}
      const toggleCategoryFilterAction = new DaffToggleCategoryFilter({
				name: 'name',
				type: DaffCategoryFilterType.Equal,
				value: 'value'
			});
			store.dispatch(toggleCategoryFilterAction);
      actions$ = hot('--a', { a: toggleCategoryFilterAction });
			
			expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
			expect(effects.toggleCategoryFilter$).toBeObservable(expected);
			expect(daffCategoryDriver.get).toHaveBeenCalledWith({ 
				id: stubCategory.id,
        page_size: stubCategoryPageConfigurationState.page_size,
				applied_sort_direction: stubCategoryPageConfigurationState.applied_sort_direction,
				applied_sort_option: stubCategoryPageConfigurationState.applied_sort_option,
				filter_requests: [appliedFilter]
      });
    });
	});

  describe('when ChangeCategorySortAction is triggered', () => {

    let expected;
    
    it('should call get category with an id, page size, applied filters, and an applied sorting option', () => {
			spyOn(daffCategoryDriver, 'get').and.returnValue(of({
				category: stubCategory,
				categoryPageConfigurationState: stubCategoryPageConfigurationState,
				products: stubProducts
			}));
      const changeCategorySortingOption = new DaffChangeCategorySortingOption({
				option: 'option',
				direction: DaffSortDirectionEnum.Ascending
			});
      actions$ = hot('--a', { a: changeCategorySortingOption });
			
			expected = cold('--(ab)', { a: productGridLoadSuccessAction, b: categoryLoadSuccessAction });
			expect(effects.changeCategorySort$).toBeObservable(expected);
			expect(daffCategoryDriver.get).toHaveBeenCalledWith({ 
				id: stubCategory.id,
        page_size: stubCategoryPageConfigurationState.page_size,
				applied_sort_direction: DaffSortDirectionEnum.Ascending,
				applied_sort_option: 'option',
				filter_requests: stubCategoryPageConfigurationState.filter_requests
      });
    });
  });
});
