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
  DaffCategory,
  DaffCategoryFilterType,
  DaffCategoryFilterEqualRequest,
} from '@daffodil/category';
import {
  DaffCategoryServiceInterface,
  DaffCategoryDriver,
} from '@daffodil/category/driver';
import { DaffCategoryTestingDriverModule } from '@daffodil/category/driver/testing';
import {
  DaffCategoryPageLoadSuccess,
  daffCategoryReducers,
  DaffCategoryPageLoad,
  DaffCategoryPageLoadFailure,
  DaffCategoryPageChangeFilters,
  DaffCategoryPageToggleFilter,
  DAFF_CATEGORY_STORE_FEATURE_KEY,
  DaffStatefulCategoryPageConfigurationState,
} from '@daffodil/category/state';
import { DaffStatefulCategoryPageConfigurationStateFactory } from '@daffodil/category/state/testing';
import { DaffCategoryFactory } from '@daffodil/category/testing';
import {
  DaffSortDirectionEnum,
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductGridLoadSuccess,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffCategoryPageFilterEffects } from './category-page-filter.effects';

describe('DaffCategoryPageFilterEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCategoryPageFilterEffects<DaffCategory, DaffProduct>;
  let stubCategory: DaffCategory;
  let stubCategoryPageConfigurationState: DaffStatefulCategoryPageConfigurationState;
  let stubProducts: DaffProduct[];
  let daffCategoryDriver: DaffCategoryServiceInterface;
  let store: Store<any>;
  let driverGetSpy: jasmine.Spy;

  let categoryFactory: DaffCategoryFactory;
  let categoryPageConfigurationStateFactory: DaffStatefulCategoryPageConfigurationStateFactory;
  let productFactory: DaffProductFactory;
  let categoryLoadSuccessAction: DaffCategoryPageLoadSuccess<DaffCategory, DaffProduct>;
  let productGridLoadSuccessAction: DaffProductGridLoadSuccess<DaffProduct>;

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
        DaffCategoryPageFilterEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffCategoryPageFilterEffects);
    store = TestBed.inject(Store);
    categoryFactory = TestBed.inject(DaffCategoryFactory);
    categoryPageConfigurationStateFactory = TestBed.inject(DaffStatefulCategoryPageConfigurationStateFactory);
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
        ...{
          ...stubCategoryPageConfigurationState,
          daffState: DaffState.Mutating,
        },
        filter_requests: [appliedFilter],
      });
    });
  });
});
