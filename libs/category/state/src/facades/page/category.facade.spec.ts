import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffCategory,
  DaffCategoryPageMetadata,
  DaffCategoryRequestKind,
} from '@daffodil/category';
import {
  daffCategoryReducers,
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoad,
  DaffCategoryPageLoadFailure,
  DAFF_CATEGORY_STORE_FEATURE_KEY,
  DaffCategoryStateRootSlice,
} from '@daffodil/category/state';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';
import {
  DaffProduct,
  DaffProductFilter,
  daffProductFilterArrayToDict,
} from '@daffodil/product';
import {
  DaffProductGridLoadSuccess,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import {
  DaffProductFactory,
  DaffProductFilterFactory,
} from '@daffodil/product/testing';

import { DaffCategoryFacade } from './category.facade';

describe('DaffCategoryFacade', () => {
  let store: Store<DaffCategoryStateRootSlice>;
  let facade: DaffCategoryFacade<DaffCategory, DaffProduct>;
  let categoryFactory: DaffCategoryFactory;
  let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;
  let categoryFilterFactory: DaffProductFilterFactory;
  let productFactory: DaffProductFactory;
  let stubCategory: DaffCategory;
  let stubCategoryMetadata: DaffCategoryPageMetadata;
  let stubProduct: DaffProduct;

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

    categoryFactory = TestBed.inject(DaffCategoryFactory);
    categoryPageMetadataFactory = TestBed.inject(DaffCategoryPageMetadataFactory);
    productFactory = TestBed.inject(DaffProductFactory);
    categoryFilterFactory = TestBed.inject(DaffProductFilterFactory);

    stubCategory = categoryFactory.create();
    stubCategoryMetadata = categoryPageMetadataFactory.create();
    stubCategoryMetadata.filters = daffProductFilterArrayToDict(categoryFilterFactory.createMany());
    stubProduct = productFactory.create();
    stubCategoryMetadata.id = stubCategory.id;
    stubCategoryMetadata.ids = [stubProduct.id];
    stubCategory.product_ids = [stubProduct.id];

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
      const expected = cold('a', { a: stubCategory });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubCategoryMetadata, products: [stubProduct]}));
      expect(facade.category$).toBeObservable(expected);
    });
  });

  describe('pageLoadingState$', () => {

    it('should return an observable of the daffState', () => {
      const expected = cold('a', { a: DaffState.Stable });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubCategoryMetadata, products: [stubProduct]}));
      expect(facade.pageLoadingState$).toBeObservable(expected);
    });
  });

  describe('products$', () => {
    it('should be undefined initially', () => {
      const expected = cold('a', { a: []});
      expect(facade.products$).toBeObservable(expected);
    });

    it('should return an observable of the selectCategoryProducts state', () => {
      const expected = cold('a', { a: [stubProduct]});
      store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubCategoryMetadata, products: [stubProduct]}));
      store.dispatch(new DaffProductGridLoadSuccess([stubProduct]));
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
      store.dispatch(new DaffCategoryPageLoad({ id: '1', kind: DaffCategoryRequestKind.ID }));
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
      store.dispatch(new DaffCategoryPageLoad({ id: '1', kind: DaffCategoryRequestKind.ID }));
      expect(facade.productsLoading$).toBeObservable(expected);
    });
  });

  describe('errors$', () => {

    it('should be an empty array initially', () => {
      const initial = cold('a', { a: []});
      expect(facade.errors$).toBeObservable(initial);
    });

    it('should be an observable of an array of the current errors', () => {
      const error: DaffStateError = {
        code: 'error code',
        message: 'Failed to load the category',
      };
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffCategoryPageLoad({ id: 'id', kind: DaffCategoryRequestKind.ID }));
      store.dispatch(new DaffCategoryPageLoadFailure(error));
      expect(facade.errors$).toBeObservable(expected);
    });
  });

  describe('getCategoryById', () => {

    it('should be an observable of a category that matches the provided id', () => {
      const expected = cold('a', { a: stubCategory });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubCategoryMetadata, products: [stubProduct]}));
      store.dispatch(new DaffProductGridLoadSuccess([stubProduct]));
      expect(facade.getCategoryById(stubCategory.id)).toBeObservable(expected);
    });
  });

  describe('getProductsByCategory', () => {
    it('should be an observable of an array of products that are filtered by the provided category id', () => {
      const expected = cold('a', { a: [stubProduct]});
      store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubCategoryMetadata, products: [stubProduct]}));
      store.dispatch(new DaffProductGridLoadSuccess([stubProduct]));
      expect(facade.getProductsByCategory(stubCategory.id)).toBeObservable(expected);
    });
  });

  describe('getTotalProductsByCategory', () => {

    it('should be an observable of the number of products that are filtered by the provided category id', () => {
      const expected = cold('a', { a: 1 });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubCategoryMetadata, products: [stubProduct]}));
      store.dispatch(new DaffProductGridLoadSuccess([stubProduct]));
      expect(facade.getTotalProductsByCategory(stubCategory.id)).toBeObservable(expected);
    });
  });

  describe('isCategoryEmpty$', () => {

    it('should return false when the category has products', () => {
      const expected = cold('a', { a: false });
      store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubCategoryMetadata, products: [stubProduct]}));
      expect(facade.isCategoryEmpty$).toBeObservable(expected);
    });

    it('should return true when the category has no products', () => {
      const expected = cold('a', { a: true });
      stubCategoryMetadata.ids = [];
      stubCategoryMetadata.count = 0;
      store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubCategoryMetadata, products: []}));
      expect(facade.isCategoryEmpty$).toBeObservable(expected);
    });
  });

  describe('isPageMutating$', () => {

    it('should return whether the category page is mutating', () => {
      const expected = cold('a', { a: false });
      expect(facade.isPageMutating$).toBeObservable(expected);
    });
  });

  describe('isPageResolving$', () => {

    it('should return whether the category page is resolving', () => {
      const expected = cold('a', { a: false });
      expect(facade.isPageResolving$).toBeObservable(expected);
    });
  });
});
