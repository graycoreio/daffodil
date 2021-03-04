import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffProductGridLoadSuccess,
  DaffProductReducersState,
  daffProductReducers,
  DaffCompositeProduct,
} from '@daffodil/product';
import { DaffCompositeProductFactory } from '@daffodil/product/testing';

import { getDaffCompositeProductEntitiesSelectors } from './composite-product-entities.selectors';

describe('selectCompositeProductEntitiesState', () => {

  let store: Store<DaffProductReducersState>;
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
          product: combineReducers(daffProductReducers),
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
      const selector = store.pipe(select(selectCompositeProductAppliedOptions, { id: stubCompositeProduct.id }));
      const expected = cold('a', {
        a: {
          [stubCompositeProduct.items[0].id]: stubCompositeProduct.items[0].options[0],
          [stubCompositeProduct.items[1].id]: stubCompositeProduct.items[1].options[0],
        },
      });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectIsCompositeProductItemRequired', () => {

    it('selects the composite product applied options of the given id', () => {
      const selector = store.pipe(select(selectIsCompositeProductItemRequired, { id: stubCompositeProduct.id, item_id: stubCompositeProduct.items[0].id }));
      const expected = cold('a', {
        a: stubCompositeProduct.items[0].required,
      });

      expect(selector).toBeObservable(expected);
    });
  });
});
