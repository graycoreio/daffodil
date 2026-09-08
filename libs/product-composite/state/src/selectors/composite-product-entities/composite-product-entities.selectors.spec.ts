import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffProductGridLoadSuccess,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
  DaffProductGridLoad,
} from '@daffodil/product/state';
import { DaffCompositeProduct } from '@daffodil/product-composite';
import {
  DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY,
  daffCompositeProductReducers,
  DaffCompositeProductStateRootSlice,
} from '@daffodil/product-composite/state';
import { DaffCompositeProductFactory } from '@daffodil/product-composite/testing';

import { getDaffCompositeProductEntitiesSelectors } from './composite-product-entities.selectors';

describe('selectCompositeProductEntitiesState', () => {
  let store: Store<DaffCompositeProductStateRootSlice>;
  let compositeProductFactory: DaffCompositeProductFactory;
  let stubCompositeProduct: DaffCompositeProduct;
  let scheduler: TestScheduler;
  const {
    selectCompositeProductIds,
    selectCompositeProductAppliedOptionsEntities,
    selectCompositeProductTotal,
    selectCompositeProductAppliedOptions,
    selectIsCompositeProductItemRequired,
  } = getDaffCompositeProductEntitiesSelectors();

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffCompositeProductReducers),
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
      ],
    });

    compositeProductFactory = TestBed.inject(DaffCompositeProductFactory);
    store = TestBed.inject(Store);

    stubCompositeProduct = compositeProductFactory.create();

    store.dispatch(new DaffProductGridLoadSuccess(new Array(stubCompositeProduct)));
  });

  describe('selectCompositeProductIds', () => {

    it('selects product ids', () => {
      const selector = store.pipe(select(selectCompositeProductIds));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: [stubCompositeProduct.id]});
      });
    });
  });

  describe('selectCompositeProductAppliedOptionsEntities', () => {

    it('selects composite product items and the applied options', () => {
      const expectedDictionary = {
        [stubCompositeProduct.id]: {
          id: stubCompositeProduct.id,
          items: {
            [stubCompositeProduct.items[0].id]: {
              value: stubCompositeProduct.items[0].options[0].id,
              qty: stubCompositeProduct.items[0].options[0].quantity,
            },
            [stubCompositeProduct.items[1].id]: {
              value: stubCompositeProduct.items[1].options[0].id,
              qty: stubCompositeProduct.items[1].options[0].quantity,
            },
          },
        },
      };

      const selector = store.pipe(select(selectCompositeProductAppliedOptionsEntities));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: expectedDictionary });
      });
    });
  });

  describe('selectCompositeProductTotal', () => {

    it('selects the total number of composite products', () => {
      const selector = store.pipe(select(selectCompositeProductTotal));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: 1 });
      });
    });
  });

  describe('selectCompositeProductAppliedOptions', () => {

    it('selects the composite product applied options of the given id', () => {
      const selector = store.pipe(select(selectCompositeProductAppliedOptions(stubCompositeProduct.id)));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', {
          a: {
            [stubCompositeProduct.items[0].id]: stubCompositeProduct.items[0].options[0],
            [stubCompositeProduct.items[1].id]: stubCompositeProduct.items[1].options[0],
          },
        });
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectCompositeProductAppliedOptions(stubCompositeProduct.id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectIsCompositeProductItemRequired', () => {

    it('selects the composite product applied options of the given id', () => {
      const selector = store.pipe(select(selectIsCompositeProductItemRequired(stubCompositeProduct.id, stubCompositeProduct.items[0].id)));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', {
          a: stubCompositeProduct.items[0].required,
        });
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectIsCompositeProductItemRequired(stubCompositeProduct.id, stubCompositeProduct.items[0].id)));

      selector.subscribe(spy);

      store.dispatch(new DaffProductGridLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
