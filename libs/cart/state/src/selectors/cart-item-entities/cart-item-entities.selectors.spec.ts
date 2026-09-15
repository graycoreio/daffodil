import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCart,
  DaffCartItem,
  DaffCompositeCartItem,
  DaffConfigurableCartItem,
} from '@daffodil/cart';
import {
  DaffCartStateRootSlice,
  daffCartReducers,
  DaffCartItemListSuccess,
  DAFF_CART_STORE_FEATURE_KEY,
  DaffCartShippingMethodsLoad,
  DaffCartItemUpdate,
  DaffCartReducersState,
  daffCartItemEntitiesRetrievalActionsReducerFactory,
  daffCartRetrievalActionsReducerFactory,
  daffCartRetrivalActions,
} from '@daffodil/cart/state';
import {
  DaffStatefulCartItemFactory,
  DaffStatefulCompositeCartItemFactory,
  DaffStatefulConfigurableCartItemFactory,
} from '@daffodil/cart/state/testing';
import { DaffCartFactory } from '@daffodil/cart/testing';
import {
  DaffOperationEntity,
  daffComposeReducers,
  daffIdentityReducer,
} from '@daffodil/core/state';

import { getDaffCartItemEntitiesSelectors } from './cart-item-entities.selectors';

describe('@daffodil/cart/state | getDaffCartItemEntitiesSelectors', () => {
  let store: Store<DaffCartStateRootSlice>;
  let cartFactory: DaffCartFactory;
  let statefulCartItemFactory: DaffStatefulCartItemFactory;
  let statefulConfigurableCartItemFactory: DaffStatefulConfigurableCartItemFactory;
  let statefulCompositeCartItemFactory: DaffStatefulCompositeCartItemFactory;
  let mockCart: DaffCart;
  let mockCartItems: DaffOperationEntity<DaffCartItem>[];
  let mockStatefulConfigurableCartItems: DaffOperationEntity<DaffConfigurableCartItem>[];
  let mockStatefulCompositeCartItems: DaffOperationEntity<DaffCompositeCartItem>[];
  let scheduler: TestScheduler;
  const {
    selectCartItemIds,
    selectCartItemEntities,
    selectAllCartItems,
    selectTotalNumberOfCartItems,
    selectCartItemTotal,
    selectCartItem,
    selectCartItemConfiguredAttributes,
    selectCartItemCompositeOptions,
    selectIsCartItemOutOfStock,
    selectOutOfStockCartItems,
    selectInStockCartItems,
    selectCartItemMutating,
  } = getDaffCartItemEntitiesSelectors();

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CART_STORE_FEATURE_KEY]: daffComposeReducers<DaffCartReducersState>([
            combineReducers(daffCartReducers),
            combineReducers({
              cart: daffCartRetrievalActionsReducerFactory(daffCartRetrivalActions),
              cartItems: daffCartItemEntitiesRetrievalActionsReducerFactory(daffCartRetrivalActions),
              order: daffIdentityReducer,
            }),
          ]),
        }),
      ],
    });

    store = TestBed.inject(Store);
    cartFactory = TestBed.inject(DaffCartFactory);
    statefulCartItemFactory = TestBed.inject(DaffStatefulCartItemFactory);
    statefulConfigurableCartItemFactory = TestBed.inject(DaffStatefulConfigurableCartItemFactory);
    statefulCompositeCartItemFactory = TestBed.inject(DaffStatefulCompositeCartItemFactory);

    mockCart = cartFactory.create();
    mockCartItems = statefulCartItemFactory.createMany(2, {
      daffState: <any>jasmine.anything(),
    });
    mockStatefulConfigurableCartItems = statefulConfigurableCartItemFactory.createMany(2, {
      daffState: <any>jasmine.anything(),
    });
    mockStatefulCompositeCartItems = statefulCompositeCartItemFactory.createMany(2, {
      daffState: <any>jasmine.anything(),
    });

    store.dispatch(new DaffCartItemListSuccess(mockCartItems));
  });

  describe('CartItemEntitiesState', () => {

    describe('selectIds', () => {

      it('selects cart item ids', () => {
        const selector = store.pipe(select(selectCartItemIds));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: [mockCartItems[0].id, mockCartItems[1].id]});
        });
      });
    });

    describe('selectCartItemEntities', () => {

      it('selects product entities as a dictionary object', () => {
        const expectedDictionary = mockCartItems.reduce((acc, item) => ({
          ...acc,
          [item.id]: item,
        }), {});

        const selector = store.pipe(select(selectCartItemEntities));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: expectedDictionary });
        });
      });
    });

    describe('selectAllCartItems', () => {

      it('selects all products as an array', () => {
        const selector = store.pipe(select(selectAllCartItems));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: mockCartItems });
        });
      });
    });

    describe('selectCartItemTotal', () => {

      it('selects the total number of products', () => {
        const selector = store.pipe(select(selectCartItemTotal));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: mockCartItems.length });
        });
      });
    });
  });

  describe('selectCartItem', () => {

    it('should select the product of the given id', () => {
      const selector = store.pipe(select(selectCartItem(mockCartItems[0].id)));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: jasmine.objectContaining({ id: mockCartItems[0].id }) });
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectCartItem(mockCartItems[0].id)));

      selector.subscribe(spy);

      store.dispatch(new DaffCartShippingMethodsLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectTotalNumberOfCartItems', () => {

    it('should select total number of cart items that takes into account the quantity of each cart item', () => {
      const selector = store.pipe(select(selectTotalNumberOfCartItems));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: mockCartItems.reduce((acc, item) => acc + item.qty, 0) });
      });
    });
  });

  describe('selectCartItemConfiguredAttributes', () => {

    it('should return null when the given cart item is not configurable', () => {
      const selector = store.pipe(select(selectCartItemConfiguredAttributes(mockCartItems[0].id)));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: null });
      });
    });

    it('should return the configured attributes of a configurable cart item', () => {
      store.dispatch(new DaffCartItemListSuccess(mockStatefulConfigurableCartItems));
      const selector = store.pipe(select(selectCartItemConfiguredAttributes(mockStatefulConfigurableCartItems[0].id)));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: mockStatefulConfigurableCartItems[0].attributes });
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectCartItemConfiguredAttributes(mockCartItems[0].id)));

      selector.subscribe(spy);

      store.dispatch(new DaffCartShippingMethodsLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectCartItemCompositeOptions', () => {

    it('should return null when the given cart item is not composite', () => {
      const selector = store.pipe(select(selectCartItemCompositeOptions(mockCartItems[0].id)));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: null });
      });
    });

    it('should return the item options of a composite cart item', () => {
      store.dispatch(new DaffCartItemListSuccess(mockStatefulCompositeCartItems));
      const selector = store.pipe(select(selectCartItemCompositeOptions(mockStatefulCompositeCartItems[0].id)));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: mockStatefulCompositeCartItems[0].options });
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectCartItemCompositeOptions(mockCartItems[0].id)));

      selector.subscribe(spy);

      store.dispatch(new DaffCartShippingMethodsLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectIsCartItemOutOfStock', () => {

    it('should return whether the given cart item is out of stock', () => {
      store.dispatch(new DaffCartItemListSuccess(mockCartItems));
      const selector = store.pipe(select(selectIsCartItemOutOfStock(mockCartItems[0].id)));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: !mockCartItems[0].in_stock });
      });
    });

    it('should return null if the cart item is not in state', () => {
      const selector = store.pipe(select(selectIsCartItemOutOfStock(mockCartItems[0].id + 'notId')));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: null });
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectIsCartItemOutOfStock(mockCartItems[0].id)));

      selector.subscribe(spy);

      store.dispatch(new DaffCartShippingMethodsLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectOutOfStockCartItems', () => {
    let inStockItem: DaffOperationEntity<DaffCartItem>;
    let outOfStockItem: DaffOperationEntity<DaffCartItem>;

    beforeEach(() => {
      inStockItem = statefulCartItemFactory.create({
        in_stock: true,
        daffState: <any>jasmine.anything(),
      });
      outOfStockItem = statefulCartItemFactory.create({
        in_stock: false,
        daffState: <any>jasmine.anything(),
      });
    });

    it('should return the out of stock cart item', () => {
      store.dispatch(new DaffCartItemListSuccess([inStockItem, outOfStockItem]));
      const selector = store.pipe(select(selectOutOfStockCartItems));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: [outOfStockItem]});
      });
    });

    it('should return an empty array if there are not out of stock cart items', () => {
      store.dispatch(new DaffCartItemListSuccess([inStockItem]));
      const selector = store.pipe(select(selectOutOfStockCartItems));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: []});
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectOutOfStockCartItems));

      selector.subscribe(spy);

      store.dispatch(new DaffCartShippingMethodsLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectInStockCartItems', () => {
    let inStockItem: DaffOperationEntity<DaffCartItem>;
    let outOfStockItem: DaffOperationEntity<DaffCartItem>;

    beforeEach(() => {
      inStockItem = statefulCartItemFactory.create({
        in_stock: true,
        daffState: <any>jasmine.anything(),
      });
      outOfStockItem = statefulCartItemFactory.create({
        in_stock: false,
        daffState: <any>jasmine.anything(),
      });
    });

    it('should return the in stock cart item', () => {
      store.dispatch(new DaffCartItemListSuccess([inStockItem, outOfStockItem]));
      const selector = store.pipe(select(selectInStockCartItems));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: [inStockItem]});
      });
    });

    it('should return an empty array if there are not in stock cart items', () => {
      store.dispatch(new DaffCartItemListSuccess([outOfStockItem]));
      const selector = store.pipe(select(selectInStockCartItems));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: []});
      });
    });

    it('should not emit when an unrelated piece of state changes', () => {
      const spy = jasmine.createSpy();
      const selector = store.pipe(select(selectInStockCartItems));

      selector.subscribe(spy);

      store.dispatch(new DaffCartShippingMethodsLoad());

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('selectCartItemMutating', () => {

    it('should return true when a cart item is mutating', () => {
      store.dispatch(new DaffCartItemListSuccess(mockCartItems));
      store.dispatch(new DaffCartItemUpdate(mockCartItems[0].id, { qty: 2 }));
      const selector = store.pipe(select(selectCartItemMutating));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: true });
      });
    });

    it('should return false when there are no cart items mutating', () => {
      const selector = store.pipe(select(selectCartItemMutating));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: false });
      });
    });
  });
});
