import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffCategory,
  DaffCategoryFilterType,
  DaffCategoryPageMetadata,
} from '@daffodil/category';
import {
  DaffCategoryReducersState,
  daffCategoryReducers,
  DaffCategoryPageLoadSuccess,
  DAFF_CATEGORY_STORE_FEATURE_KEY,
} from '@daffodil/category/state';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductGridLoadSuccess,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { getDaffCategorySelectors } from './category.selector';

describe('DaffCategorySelectors', () => {

  let store: Store<DaffCategoryReducersState<DaffCategory>>;

  let categoryFactory: DaffCategoryFactory;
  let metadataFactory: DaffCategoryPageMetadataFactory;
  let productFactory: DaffProductFactory;

  let stubCategory: DaffCategory;
  let stubMetadata: DaffCategoryPageMetadata;
  let product: DaffProduct;

  const categorySelectors = getDaffCategorySelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CATEGORY_STORE_FEATURE_KEY]: combineReducers(daffCategoryReducers),
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
      ],
    });

    categoryFactory = TestBed.inject(DaffCategoryFactory);
    metadataFactory = TestBed.inject(DaffCategoryPageMetadataFactory);
    productFactory = TestBed.inject(DaffProductFactory);

    stubCategory = categoryFactory.create();
    product = productFactory.create();
    stubMetadata = metadataFactory.create();
    stubMetadata.id = stubCategory.id;
    stubMetadata.product_ids = [product.id];
    stubCategory.product_ids = [product.id];
    stubMetadata.filters = {
      name: {
        name: 'name',
        type: DaffCategoryFilterType.Equal,
        label: 'label',
        options: {
          value: {
            applied: false,
            label: 'option_label',
            value: 'value',
            count: 2,
          },
        },
      },
      name2: {
        name: 'name2',
        type: DaffCategoryFilterType.Equal,
        label: 'label2',
        options: {
          value2: {
            applied: false,
            label: 'option_label2',
            value: 'value2',
            count: 2,
          },
        },
      },
    };
    store = TestBed.inject(Store);

    store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubMetadata, products: null }));
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
        categoryPageMetadata: {
          ...stubMetadata,
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
        categoryPageMetadata: {
          ...stubMetadata,
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
      const selector = store.pipe(select(categorySelectors.selectProductsByCategory(stubCategory.id)));
      const expected = cold('a', { a: [product]});
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectTotalProductsByCategory', () => {

    it('selects products by category', () => {
      const selector = store.pipe(select(categorySelectors.selectTotalProductsByCategory(stubCategory.id)));
      const expected = cold('a', { a: 1 });
      expect(selector).toBeObservable(expected);
    });
  });
});
