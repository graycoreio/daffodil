import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { fromProduct, DaffProductGridLoadSuccess, DaffProductUnion } from '@daffodil/product';
import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffCategoryLoadSuccess } from '../actions/category.actions';
import { 
  selectCategoryLoading, 
  selectCategoryErrors, 
  selectCategoryIds, 
  selectCategoryEntities, 
  selectAllCategories, 
  selectCategoryTotal, 
  selectCategoryPageConfigurationState,
  selectCategoryState, 
  selectSelectedCategoryId,
  selectSelectedCategory,
  selectCategoryPageProducts,
  selectCategoryCurrentPage,
  selectCategoryTotalPages,
  selectCategoryPageSize,
  selectCategoryFilters,
  selectCategorySortOptions,
	selectCategory,
	selectProductsByCategory,
	selectCategoryPageProductIds
} from './category.selector';
import { CategoryReducersState } from '../reducers/category-reducers.interface';
import { categoryReducers } from '../reducers/category-reducers';
import { DaffCategory } from '../models/inputs/category';
import { DaffCategoryPageConfigurationState } from '../models/inputs/category-page-configuration-state';

describe('DaffCategorySelectors', () => {

  let store: Store<CategoryReducersState>;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const categoryPageConfigurationFactory: DaffCategoryPageConfigurationStateFactory = new DaffCategoryPageConfigurationStateFactory();
  const productFactory: DaffProductFactory = new DaffProductFactory();
	let stubCategory: DaffCategory;
  const stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState = categoryPageConfigurationFactory.create();
	let product: DaffProductUnion;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          category: combineReducers(categoryReducers),
          product: combineReducers(fromProduct.reducers)
        })
      ]
    });
    
    stubCategory = categoryFactory.create();
    product = productFactory.create();
    stubCategoryPageConfigurationState.id = stubCategory.id;
		stubCategoryPageConfigurationState.product_ids = [product.id];
    stubCategory.productIds = [product.id];
    store = TestBed.get(Store);

    store.dispatch(new DaffCategoryLoadSuccess({ category: stubCategory, categoryPageConfigurationState: stubCategoryPageConfigurationState, products: null }));
    store.dispatch(new DaffProductGridLoadSuccess([product]));
  });

  describe('selectCategoryState', () => {
    
    it('selects CategoryReducerState for category', () => {
      const expectedFeatureState = {
        categoryPageConfigurationState: stubCategoryPageConfigurationState,
        loading: false,
        errors: []
      }
      const selector = store.pipe(select(selectCategoryState));
      const expected = cold('a', { a: expectedFeatureState });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageConfigurationState', () => {

    it('selects the category page configuration state', () => {
      const selector = store.pipe(select(selectCategoryPageConfigurationState));
      const expected = cold('a', { a: stubCategoryPageConfigurationState });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryCurrentPage', () => {

    it('selects the current page of the current category', () => {
      const selector = store.pipe(select(selectCategoryCurrentPage));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.current_page });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryTotalPages', () => {

    it('selects the current page of the current category', () => {
      const selector = store.pipe(select(selectCategoryTotalPages));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.total_pages });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageSize', () => {

    it('selects the current page of the current category', () => {
      const selector = store.pipe(select(selectCategoryPageSize));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.page_size });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryFilters', () => {

    it('selects the current page of the current category', () => {
      const selector = store.pipe(select(selectCategoryFilters));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.filters });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategorySortOptions', () => {

    it('selects the current page of the current category', () => {
      const selector = store.pipe(select(selectCategorySortOptions));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.sort_options });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageProductIds', () => {

    it('selects the productIds of the current category page', () => {
      const selector = store.pipe(select(selectCategoryPageProductIds));
      const expected = cold('a', { a: stubCategoryPageConfigurationState.product_ids });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectSelectedCategoryId', () => {

    it('selects the id of the selected category', () => {
      const selector = store.pipe(select(selectSelectedCategoryId));
      const expected = cold('a', { a: stubCategory.id });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryLoading', () => {

    it('selects the loading state of the category', () => {
      const selector = store.pipe(select(selectCategoryLoading));
      const expected = cold('a', { a: false });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryErrors', () => {

    it('returns the selected category id', () => {
      const selector = store.pipe(select(selectCategoryErrors));
      const expected = cold('a', { a: [] });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryIds', () => {

    it('returns all category ids', () => {
      const selector = store.pipe(select(selectCategoryIds));
      const expected = cold('a', { a: [stubCategory.id] });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryEntities', () => {

    it('returns the categories as a dictionary object', () => {
      const expectedDictionary = new Object();
      expectedDictionary[stubCategory.id] = stubCategory;

      const selector = store.pipe(select(selectCategoryEntities));
      const expected = cold('a', { a: expectedDictionary });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectAllCategories', () => {

    it('returns all categories as an array', () => {
      const selector = store.pipe(select(selectAllCategories));
      const expected = cold('a', { a: [stubCategory] });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryTotal', () => {

    it('returns the total number of categories', () => {
      const selector = store.pipe(select(selectCategoryTotal));
      const expected = cold('a', { a: 1 });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectSelectedCategory', () => {

    it('selects the selected category', () => {
      const selector = store.pipe(select(selectSelectedCategory));
      const expected = cold('a', { a: stubCategory });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageProducts', () => {

    it('selects the products of the selected category', () => {
      const selector = store.pipe(select(selectCategoryPageProducts));
      const expected = cold('a', { a: [product] });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategory', () => {

    it('selects the category by id', () => {
      const selector = store.pipe(select(selectCategory, { id: stubCategory.id }));
      const expected = cold('a', { a: stubCategory });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectProductsByCategory', () => {

    it('selects products by category', () => {
      const selector = store.pipe(select(selectProductsByCategory, { id: stubCategory.id }));
      const expected = cold('a', { a: [product] });
      expect(selector).toBeObservable(expected);
    });
  });
});
