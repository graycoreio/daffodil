import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY,
  daffCompositeProductReducers,
  DaffCompositeProductStateRootSlice,
} from '@daffodil/composite-product/state';
import { DaffCompositeProduct } from '@daffodil/product';
import {
  DaffProductGridLoadSuccess,
  daffProductReducers,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
  DaffProductGridLoad,
} from '@daffodil/product/state';
import { DaffCompositeProductFactory } from '@daffodil/product/testing';

import { getDaffCompositeProductEntitiesSelectors } from './composite-product-entities.selectors';

describe('selectCompositeProductEntitiesState', () => {

  let store: Store<DaffCompositeProductStateRootSlice>;
  const compositeProductFactory: DaffCompositeProductFactory = new DaffCompositeProductFactory();
  let stubCompositeProduct: DaffCompositeProduct;
  const {
    selectCompositeProductIds,
    selectCompositeProductAppliedOptionsEntities,
    selectCompositeProductTotal,
    selectCompositeProductAppliedOptions,
    selectIsCompositeProductItemRequired,
  } = getDaffCompositeProductEntitiesSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_COMPOSITE_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffCompositeProductReducers),
          [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
        }),
      ],
    });

    stubCompositeProduct = compositeProductFactory.create();
    store = TestBed.inject(Store);

    store.dispatch(new DaffProductGridLoadSuccess(new Array(stubCompositeProduct)));
  });

  describe('selectCompositeProductIds', () => {

    it('selects product ids', () => {
      const selector = store.pipe(select(selectCompositeProductIds));
      const expected = cold('a', { a: [stubCompositeProduct.id]});

      expect(selector).toBeObservable(expected);
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
      const expected = cold('a', { a: expectedDictionary });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCompositeProductTotal', () => {

    it('selects the total number of composite products', () => {
      const selector = store.pipe(select(selectCompositeProductTotal));
      const expected = cold('a', { a: 1 });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCompositeProductAppliedOptions', () => {

    it('selects the composite product applied options of the given id', () => {
      const selector = store.pipe(select(selectCompositeProductAppliedOptions(stubCompositeProduct.id)));
      const expected = cold('a', {
        a: {
          [stubCompositeProduct.items[0].id]: stubCompositeProduct.items[0].options[0],
          [stubCompositeProduct.items[1].id]: stubCompositeProduct.items[1].options[0],
        },
      });

      expect(selector).toBeObservable(expected);
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
      const expected = cold('a', {
        a: stubCompositeProduct.items[0].required,
      });

      expect(selector).toBeObservable(expected);
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
