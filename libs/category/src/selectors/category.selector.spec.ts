import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffCategoryFactory,
  DaffCategoryPageConfigurationStateFactory,
} from '@daffodil/category/testing';
import {
  DaffProductGridLoadSuccess,
  daffProductReducers,
  DaffProduct,
} from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffCategoryPageLoadSuccess } from '../actions/category.actions';
import { DaffCategory } from '../models/category';
import { DaffCategoryFilterType } from '../models/category-filter-base';
import { DaffCategoryPageConfigurationState } from '../models/category-page-configuration-state';
import { DaffCategoryRequest } from '../models/requests/category-request';
import { daffCategoryReducers } from '../reducers/category-reducers';
import { DaffCategoryReducersState } from '../reducers/category-reducers.interface';
import { getDaffCategorySelectors } from './category.selector';

describe('DaffCategorySelectors', () => {

  let store: Store<DaffCategoryReducersState<DaffCategoryRequest, DaffCategory, DaffCategoryPageConfigurationState<DaffCategoryRequest>>>;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const categoryPageConfigurationFactory: DaffCategoryPageConfigurationStateFactory = new DaffCategoryPageConfigurationStateFactory();
  const productFactory: DaffProductFactory = new DaffProductFactory();
  let stubCategory: DaffCategory;
  let stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState<DaffCategoryRequest>;
  let product: DaffProduct;
  const categorySelectors = getDaffCategorySelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          category: combineReducers(daffCategoryReducers),
          product: combineReducers(daffProductReducers),
        }),
      ],
    });

    stubCategory = categoryFactory.create();
    product = productFactory.create();
    stubCategoryPageConfigurationState = categoryPageConfigurationFactory.create();
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
          count: 2,
        }],
      },
      {
        name: 'name2',
        type: DaffCategoryFilterType.Equal,
        label: 'label2',
        options: [{
          label: 'option_label2',
          value: 'value2',
          count: 2,
        }],
      },
    ];
    store = TestBed.inject(Store);

    store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageConfigurationState: stubCategoryPageConfigurationState, products: null }));
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
      const expected = cold('a', { a: [product]});
      expect(selector).toBeObservable(expected);
    });

    it('selects the products in the right order', () => {
      const selector = store.pipe(select(categorySelectors.selectCategoryPageProducts));

      const productA = productFactory.create();
      const productB = productFactory.create();

      //Load a set of products
      const loadA = new DaffCategoryPageLoadSuccess({
        category: <any>{
          ...stubCategory,
          product_ids: [productA.id, productB.id],
        },
        categoryPageConfigurationState: {
          ...stubCategoryPageConfigurationState,
          product_ids: [productA.id, productB.id],
        },
        products: [productA, productB],
      });
      const loadAProducts = new DaffProductGridLoadSuccess([
        productA,
        productB,
      ]);
      store.dispatch(loadAProducts);
      store.dispatch(loadA);
      const expectedA = cold('a', { a: [productA, productB]});
      expect(selector).toBeObservable(expectedA);

      //Load the same products in a different order
      const loadB = new DaffCategoryPageLoadSuccess({
        category: <any>{
          ...stubCategory,
          product_ids: [productB.id, productA.id],
        },
        categoryPageConfigurationState: {
          ...stubCategoryPageConfigurationState,
          product_ids: [productB.id, productA.id],
        },
        products: [productA, productB],
      });
      const loadBProducts = new DaffProductGridLoadSuccess([
        productA,
        productB,
      ]);

      const expectedB = cold('b', { b: [productB, productA]});
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
      const expected = cold('a', { a: [product]});
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
