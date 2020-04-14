import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffProductGridLoadSuccess, daffProductReducers, DaffProduct } from '@daffodil/product';
import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffCategoryLoadSuccess } from '../actions/category.actions';
import { getDaffCategorySelectors } from './category.selector';
import { DaffCategoryReducersState } from '../reducers/category-reducers.interface';
import { daffCategoryReducers } from '../reducers/category-reducers';
import { DaffCategory } from '../models/category';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffCategoryFilterType } from '../models/category-filter-base';
import { DaffCategoryRequest } from '../models/requests/category-request';

describe('DaffCategorySelectors', () => {

  let store: Store<DaffCategoryReducersState<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>>>;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const categoryPageConfigurationFactory: DaffCategoryPageConfigurationStateFactory = new DaffCategoryPageConfigurationStateFactory();
  const productFactory: DaffProductFactory = new DaffProductFactory();
	let stubCategory: DaffCategory;
  const stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState<DaffCategoryRequest> = categoryPageConfigurationFactory.create();
	let product: DaffProduct;
	const categorySelectors = getDaffCategorySelectors<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>, DaffProduct>();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          category: combineReducers(daffCategoryReducers),
          product: combineReducers(daffProductReducers)
        })
      ]
    });
    
    stubCategory = categoryFactory.create();
    product = productFactory.create();
    stubCategoryPageConfigurationState.id = stubCategory.id;
		stubCategoryPageConfigurationState.product_ids = [product.id];
		stubCategory.product_ids = [product.id];
		stubCategoryPageConfigurationState.filters = [
			{
				name: 'name',
				type: DaffCategoryFilterType.Equal,
				label: 'label',
				options: [{
					label: 'option_label',
					value: 'value',
					count: 2
				}]
			},
			{
				name: 'name2',
				type: DaffCategoryFilterType.Equal,
				label: 'label2',
				options: [{
					label: 'option_label2',
					value: 'value2',
					count: 2
				}]
			}
		];
    store = TestBed.get(Store);

    store.dispatch(new DaffCategoryLoadSuccess({ category: stubCategory, categoryPageConfigurationState: stubCategoryPageConfigurationState, products: null }));
    store.dispatch(new DaffProductGridLoadSuccess([product]));
  });

  describe('selectSelectedCategory', () => {

    it('selects the selected category', () => {
      const selector = store.pipe(select(categorySelectors.selectSelectedCategory));
      const expected = cold('a', { a: stubCategory });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCategoryPageProducts', () => {
		it('selects the products of the selected category', () => {
			const selector = store.pipe(select(categorySelectors.selectCategoryPageProducts));
			const expected = cold('a', { a: [product] });
			expect(selector).toBeObservable(expected);
		});

		it('selects the products in the right order', () => {
			const selector = store.pipe(select(categorySelectors.selectCategoryPageProducts));

			const productA = productFactory.create();
			const productB = productFactory.create();

			//Load a set of products
			stubCategory.product_ids = [productA.id, productB.id];
			stubCategoryPageConfigurationState.product_ids = [
				productA.id,
				productB.id,
			];
			const loadA = new DaffCategoryLoadSuccess({
				category: {
					...stubCategory,
				},
				categoryPageConfigurationState: {
					...stubCategoryPageConfigurationState,
				},
				products: [productA, productB],
			});
			const loadAProducts = new DaffProductGridLoadSuccess([
				productA,
				productB,
			]);
			store.dispatch(loadAProducts);
			store.dispatch(loadA);
			const expectedA = cold('a', { a: [productA, productB] });
			expect(selector).toBeObservable(expectedA);

			//Load the same products in a different order
			stubCategory.product_ids = [productB.id, productA.id];
			stubCategoryPageConfigurationState.product_ids = [
				productB.id,
				productA.id,
			];
			const loadB = new DaffCategoryLoadSuccess({
				category: {
					...stubCategory,
				},
				categoryPageConfigurationState: {
					...stubCategoryPageConfigurationState,
				},
				products: [productA, productB],
			});
			const loadBProducts = new DaffProductGridLoadSuccess([
				productA,
				productB,
			]);

			const expectedB = cold('b', { b: [productB, productA] });
			store.dispatch(loadBProducts);
			store.dispatch(loadB);
			expect(selector).toBeObservable(expectedB);
		});
	});

  describe('selectCategory', () => {

    it('selects the category by id', () => {
      const selector = store.pipe(select(categorySelectors.selectCategory, { id: stubCategory.id }));
      const expected = cold('a', { a: stubCategory });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectProductsByCategory', () => {

    it('selects products by category', () => {
      const selector = store.pipe(select(categorySelectors.selectProductsByCategory, { id: stubCategory.id }));
      const expected = cold('a', { a: [product] });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectTotalProductsByCategory', () => {

    it('selects products by category', () => {
      const selector = store.pipe(select(categorySelectors.selectTotalProductsByCategory, { id: stubCategory.id }));
      const expected = cold('a', { a: 1 });
      expect(selector).toBeObservable(expected);
    });
  });
});
