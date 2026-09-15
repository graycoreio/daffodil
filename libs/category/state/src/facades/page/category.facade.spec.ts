import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

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
import { daffFilterArrayToDict } from '@daffodil/core';
import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffFilterFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductGridLoadSuccess,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffCategoryFacade } from './category.facade';

describe('@daffodil/category/state | DaffCategoryFacade', () => {
  let store: Store<DaffCategoryStateRootSlice>;
  let facade: DaffCategoryFacade<DaffCategory, DaffProduct>;
  let categoryFactory: DaffCategoryFactory;
  let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;
  let categoryFilterFactory: DaffFilterFactory;
  let productFactory: DaffProductFactory;
  let stubCategory: DaffCategory;
  let stubCategoryMetadata: DaffCategoryPageMetadata;
  let stubProduct: DaffProduct;
  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

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
    categoryFilterFactory = TestBed.inject(DaffFilterFactory);

    stubCategory = categoryFactory.create();
    stubCategoryMetadata = categoryPageMetadataFactory.create();
    stubCategoryMetadata.filters = daffFilterArrayToDict(categoryFilterFactory.createMany());
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
    expect(<any>store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('category$', () => {
    it('should be undefined initially', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.category$).toBe('a', { a: undefined });
      });
    });

    it('should be a category after a category is loaded successfully', () => {
      store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubCategoryMetadata, products: [stubProduct]}));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.category$).toBe('a', { a: stubCategory });
      });
    });
  });

  describe('loadingState$', () => {

    it('should return an observable of the daffState', () => {
      store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubCategoryMetadata, products: [stubProduct]}));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loadingState$).toBe('a', { a: DaffState.Stable });
      });
    });
  });

  describe('products$', () => {
    it('should be undefined initially', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.products$).toBe('a', { a: []});
      });
    });

    it('should return an observable of the selectCategoryProducts state', () => {
      store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubCategoryMetadata, products: [stubProduct]}));
      store.dispatch(new DaffProductGridLoadSuccess([stubProduct]));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.products$).toBe('a', { a: [stubProduct]});
      });
    });
  });

  describe('errors$', () => {
    it('should be an empty array initially', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.errors$).toBe('a', { a: []});
      });
    });

    it('should be an observable of an array of the current errors', () => {
      const error: DaffStateError = {
        code: 'error code',
        message: 'Failed to load the category',
      };
      store.dispatch(new DaffCategoryPageLoad({ id: 'id', kind: DaffCategoryRequestKind.ID }));
      store.dispatch(new DaffCategoryPageLoadFailure(error));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.errors$).toBe('a', { a: [error]});
      });
    });
  });

  describe('getCategoryById', () => {

    it('should be an observable of a category that matches the provided id', () => {
      store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubCategoryMetadata, products: [stubProduct]}));
      store.dispatch(new DaffProductGridLoadSuccess([stubProduct]));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getCategoryById(stubCategory.id)).toBe('a', { a: stubCategory });
      });
    });
  });

  describe('getProductsByCategory', () => {
    it('should be an observable of an array of products that are filtered by the provided category id', () => {
      store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubCategoryMetadata, products: [stubProduct]}));
      store.dispatch(new DaffProductGridLoadSuccess([stubProduct]));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getProductsByCategory(stubCategory.id)).toBe('a', { a: [stubProduct]});
      });
    });
  });

  describe('getTotalProductsByCategory', () => {

    it('should be an observable of the number of products that are filtered by the provided category id', () => {
      store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubCategoryMetadata, products: [stubProduct]}));
      store.dispatch(new DaffProductGridLoadSuccess([stubProduct]));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getTotalProductsByCategory(stubCategory.id)).toBe('a', { a: 1 });
      });
    });
  });

  describe('isCategoryEmpty$', () => {

    it('should return false when the category has products', () => {
      store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubCategoryMetadata, products: [stubProduct]}));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.isCategoryEmpty$).toBe('a', { a: false });
      });
    });

    it('should return true when the category has no products', () => {
      stubCategoryMetadata.ids = [];
      stubCategoryMetadata.count = 0;
      store.dispatch(new DaffCategoryPageLoadSuccess({ category: stubCategory, categoryPageMetadata: stubCategoryMetadata, products: []}));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.isCategoryEmpty$).toBe('a', { a: true });
      });
    });
  });

  describe('mutating$', () => {

    it('should return whether the category page is mutating', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.mutating$).toBe('a', { a: false });
      });
    });
  });

  describe('resolving$', () => {

    it('should return whether the category page is resolving', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.resolving$).toBe('a', { a: false });
      });
    });
  });
});
