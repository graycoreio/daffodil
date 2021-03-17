import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffCategory,
  DaffCategoryFilterType,
} from '@daffodil/category';
import {
  daffCategoryReducers,
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoad,
  DaffCategoryPageLoadFailure,
  DAFF_CATEGORY_STORE_FEATURE_KEY,
  DaffStatefulCategoryPageConfigurationState,
} from '@daffodil/category/state';
import { DaffStatefulCategoryPageConfigurationStateFactory } from '@daffodil/category/state/testing';
import { DaffCategoryFactory } from '@daffodil/category/testing';
import { DaffState } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductGridLoadSuccess,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffCategoryFacade } from './category.facade';

describe('DaffCategoryFacade', () => {
  let store: Store<any>;
  let facade: DaffCategoryFacade<DaffCategory, DaffProduct>;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const categoryPageConfigurationFactory: DaffStatefulCategoryPageConfigurationStateFactory = new DaffStatefulCategoryPageConfigurationStateFactory();
  const productFactory: DaffProductFactory = new DaffProductFactory();
  let category: DaffCategory;
  let categoryPageConfigurationState: DaffStatefulCategoryPageConfigurationState;
  let product: DaffProduct;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CATEGORY_STORE_FEATURE_KEY]: combineReducers(daffCategoryReducers),
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
      ],
      providers: [
        DaffCategoryFacade,
      ],
    });

    category = categoryFactory.create();
    categoryPageConfigurationState = categoryPageConfigurationFactory.create();
    categoryPageConfigurationState.filters = [
      {
        name: 'name',
        label: 'label',
        type: DaffCategoryFilterType.Equal,
        options: [{
          value: 'value',
          label: 'option_label',
          count: 2,
        }],
      },
    ];
    product = productFactory.create();
    categoryPageConfigurationState.id = category.id;
    categoryPageConfigurationState.product_ids = [product.id];
    category.product_ids = [product.id];
    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffCategoryFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('category$', () => {
    it('should be undefined initially', () => {
      const expected = cold('a', { a: undefined });
      expect(facade.category$).toBeObservable(expected);
    });

    it('should be a category after a category is loaded successfully', () => {
      const expected = cold('a', { a: category });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: [product]}));
      expect(facade.category$).toBeObservable(expected);
    });
  });

  describe('pageConfigurationState$', () => {

    it('should return an observable of the CategoryPageConfigurationState', () => {
      const expected = cold('a', { a: categoryPageConfigurationState });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: [product]}));
      expect(facade.pageConfigurationState$).toBeObservable(expected);
    });
  });

  describe('pageLoadingState$', () => {

    it('should return an observable of the CategoryPageConfigurationState\'s daffState', () => {
      const expected = cold('a', { a: categoryPageConfigurationState.daffState });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: [product]}));
      expect(facade.pageLoadingState$).toBeObservable(expected);
    });
  });

  describe('currentPage$', () => {
    it('should be null initially', () => {
      const expected = cold('a', { a: null });
      expect(facade.currentPage$).toBeObservable(expected);
    });

    it('should return an observable of the current page for the selected category', () => {
      const expected = cold('a', { a: categoryPageConfigurationState.current_page });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: [product]}));
      expect(facade.currentPage$).toBeObservable(expected);
    });
  });

  describe('totalPages$', () => {
    it('should be null initially', () => {
      const expected = cold('a', { a: null });
      expect(facade.totalPages$).toBeObservable(expected);
    });

    it('should return an observable of the total number of pages for the selected category', () => {
      const expected = cold('a', { a: categoryPageConfigurationState.total_pages });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: [product]}));
      expect(facade.totalPages$).toBeObservable(expected);
    });
  });

  describe('totalProducts$', () => {
    it('should be null initially', () => {
      const expected = cold('a', { a: null });
      expect(facade.totalProducts$).toBeObservable(expected);
    });

    it('should return an observable of the total number of pages for the selected category', () => {
      const expected = cold('a', { a: categoryPageConfigurationState.total_products });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: [product]}));
      expect(facade.totalProducts$).toBeObservable(expected);
    });
  });

  describe('pageSize$', () => {
    it('should be null initially', () => {
      const expected = cold('a', { a: null });
      expect(facade.pageSize$).toBeObservable(expected);
    });

    it('should return an observable of the page size for the selected category page configuration', () => {
      const expected = cold('a', { a: categoryPageConfigurationState.page_size });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: [product]}));
      expect(facade.pageSize$).toBeObservable(expected);
    });
  });

  describe('filters$', () => {
    it('should be an empty array initially', () => {
      const expected = cold('a', { a: []});
      expect(facade.filters$).toBeObservable(expected);
    });

    it('should return an observable of the filters for the selected category', () => {
      const expected = cold('a', { a: categoryPageConfigurationState.filters });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: [product]}));
      expect(facade.filters$).toBeObservable(expected);
    });
  });

  describe('sortOptions$', () => {
    it('should be an empty array initially', () => {
      const expected = cold('a', { a: []});
      expect(facade.sortOptions$).toBeObservable(expected);
    });

    it('should return an observable of the sort options for the selected category', () => {
      const expected = cold('a', { a: categoryPageConfigurationState.sort_options.options });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: [product]}));
      expect(facade.sortOptions$).toBeObservable(expected);
    });
  });

  describe('appliedFilters$', () => {

    it('should return an observable of the applied filters on the selected category', () => {
      store.dispatch(new DaffCategoryPageLoad({
        id: categoryPageConfigurationState.id, filter_requests: [{
          name: 'name',
          value: ['value'],
          type: DaffCategoryFilterType.Equal,
        }],
      }));
      const expected = cold('a', {
        a: [{
          name: 'name',
          label: 'label',
          type: DaffCategoryFilterType.Equal,
          options: [{
            value: 'value',
            label: 'option_label',
          }],
        }],
      });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: [product]}));
      expect(facade.appliedFilters$).toBeObservable(expected);
    });
  });

  describe('appliedSortOption$', () => {
    it('should be null initially', () => {
      const expected = cold('a', { a: null });
      expect(facade.appliedSortOption$).toBeObservable(expected);
    });

    it('should return an observable of the applied sort option on the selected category', () => {
      const expected = cold('a', { a: categoryPageConfigurationState.applied_sort_option });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: [product]}));
      expect(facade.appliedSortOption$).toBeObservable(expected);
    });
  });

  describe('appliedSortDirection$', () => {
    it('should be null initially', () => {
      const expected = cold('a', { a: null });
      expect(facade.appliedSortDirection$).toBeObservable(expected);
    });

    it('should return an observable of the applied sort direction on the selected category', () => {
      const expected = cold('a', { a: categoryPageConfigurationState.applied_sort_direction });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: [product]}));
      expect(facade.appliedSortDirection$).toBeObservable(expected);
    });
  });

  describe('products$', () => {
    it('should be undefined initially', () => {
      const expected = cold('a', { a: []});
      expect(facade.products$).toBeObservable(expected);
    });

    it('should return an observable of the selectCategoryProducts state', () => {
      const expected = cold('a', { a: [product]});
      store.dispatch(new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: [product]}));
      store.dispatch(new DaffProductGridLoadSuccess([product]));
      expect(facade.products$).toBeObservable(expected);
    });
  });

  describe('categoryLoading$', () => {
    it('should be false if the category state is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.categoryLoading$).toBeObservable(expected);
    });

    it('should be true if the category state is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffCategoryPageLoad({ id: '1' }));
      expect(facade.categoryLoading$).toBeObservable(expected);
    });
  });

  describe('productsLoading$', () => {
    it('should be false if the category products are not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.productsLoading$).toBeObservable(expected);
    });

    it('should be true if the category products are loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffCategoryPageLoad({ id: '1' }));
      expect(facade.productsLoading$).toBeObservable(expected);
    });
  });

  describe('errors$', () => {

    it('should be an empty array initially', () => {
      const initial = cold('a', { a: []});
      expect(facade.errors$).toBeObservable(initial);
    });

    it('should be an observable of an array of the current errors', () => {
      const error = 'error1';
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffCategoryPageLoad({ id: 'id' }));
      store.dispatch(new DaffCategoryPageLoadFailure(error));
      expect(facade.errors$).toBeObservable(expected);
    });
  });

  describe('getCategoryById', () => {

    it('should be an observable of a category that matches the provided id', () => {
      const expected = cold('a', { a: category });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: [product]}));
      store.dispatch(new DaffProductGridLoadSuccess([product]));
      expect(facade.getCategoryById(category.id)).toBeObservable(expected);
    });
  });

  describe('getProductsByCategory', () => {

    it('should be an observable of an array of products that are filtered by the provided category id', () => {
      const expected = cold('a', { a: [product]});
      store.dispatch(new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: [product]}));
      store.dispatch(new DaffProductGridLoadSuccess([product]));
      expect(facade.getProductsByCategory(category.id)).toBeObservable(expected);
    });
  });

  describe('getTotalProductsByCategory', () => {

    it('should be an observable of an array of products that are filtered by the provided category id', () => {
      const expected = cold('a', { a: 1 });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: [product]}));
      store.dispatch(new DaffProductGridLoadSuccess([product]));
      expect(facade.getTotalProductsByCategory(category.id)).toBeObservable(expected);
    });
  });

  describe('isCategoryEmpty$', () => {

    it('should return false when the category has products', () => {
      const expected = cold('a', { a: false });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: [product]}));
      expect(facade.isCategoryEmpty$).toBeObservable(expected);
    });

    it('should return true when the category has no products', () => {
      const expected = cold('a', { a: true });
      categoryPageConfigurationState.product_ids = [];
      categoryPageConfigurationState.total_products = 0;
      store.dispatch(new DaffCategoryPageLoadSuccess({ category, categoryPageConfigurationState, products: []}));
      expect(facade.isCategoryEmpty$).toBeObservable(expected);
    });
  });

  describe('isPageMutating$', () => {

    it('should return whether the category page is mutating', () => {
      const expected = cold('a', { a: categoryPageConfigurationState.daffState === DaffState.Mutating });
      expect(facade.isPageMutating$).toBeObservable(expected);
    });
  });

  describe('isPageResolving$', () => {

    it('should return whether the category page is resolving', () => {
      const expected = cold('a', { a: categoryPageConfigurationState.daffState === DaffState.Resolving });
      expect(facade.isPageResolving$).toBeObservable(expected);
    });
  });
});
