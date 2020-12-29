import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCart } from '@daffodil/cart';
import { DaffCartReducersState, daffCartReducers, DaffCartItemListSuccess } from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffStatefulCartItemFactory, DaffStatefulCompositeCartItemFactory, DaffStatefulConfigurableCartItemFactory } from '@daffodil/cart/state/testing';

import { getDaffCartItemEntitiesSelectors } from './cart-item-entities.selectors';
import { DaffStatefulCartItem, DaffStatefulCompositeCartItem, DaffStatefulConfigurableCartItem } from '../../models/public_api';
import { DaffCartItemUpdate } from '../../actions/public_api';

describe('selectCartItemEntitiesState', () => {

  let store: Store<DaffCartReducersState>;
  const cartFactory: DaffCartFactory = new DaffCartFactory();
	const statefulCartItemFactory: DaffStatefulCartItemFactory = new DaffStatefulCartItemFactory();
	const statefulConfigurableCartItemFactory: DaffStatefulConfigurableCartItemFactory = new DaffStatefulConfigurableCartItemFactory();
	const statefulCompositeCartItemFactory: DaffStatefulCompositeCartItemFactory = new DaffStatefulCompositeCartItemFactory();
	let mockCart: DaffCart;
	let mockCartItems: DaffStatefulCartItem[];
	let mockStatefulConfigurableCartItems: DaffStatefulConfigurableCartItem[];
	let mockStatefulCompositeCartItems: DaffStatefulCompositeCartItem[];
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
		selectCartItemMutating,
		selectCartItemState
	} = getDaffCartItemEntitiesSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
        })
      ]
    });

		mockCart = cartFactory.create();
		mockCartItems = statefulCartItemFactory.createMany(2);
		mockStatefulConfigurableCartItems = statefulConfigurableCartItemFactory.createMany(2);
		mockStatefulCompositeCartItems = statefulCompositeCartItemFactory.createMany(2);
    store = TestBed.inject(Store);

    store.dispatch(new DaffCartItemListSuccess(mockCartItems));
  });

  describe('CartItemEntitiesState', () => {

    describe('selectIds', () => {

      it('selects cart item ids', () => {
				const selector = store.pipe(select(selectCartItemIds));
				const expected = cold('a', { a: [String(mockCartItems[0].item_id), String(mockCartItems[1].item_id)] });

				expect(selector).toBeObservable(expected);
      });
    });

    describe('selectCartItemEntities', () => {

      it('selects product entities as a dictionary object', () => {
				const expectedDictionary = mockCartItems.reduce((acc, item) => ({
					...acc,
					[item.item_id]: item
				}), {});

				const selector = store.pipe(select(selectCartItemEntities));
				const expected = cold('a', { a: expectedDictionary });

				expect(selector).toBeObservable(expected);
      });
    });

    describe('selectAllCartItems', () => {

      it('selects all products as an array', () => {
        const selector = store.pipe(select(selectAllCartItems));
				const expected = cold('a', { a: mockCartItems });

				expect(selector).toBeObservable(expected);
      });
    });

    describe('selectCartItemTotal', () => {

      it('selects the total number of products', () => {
        const selector = store.pipe(select(selectCartItemTotal));
				const expected = cold('a', { a: mockCartItems.length });

				expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCartItem', () => {

    it('should select the product of the given id', () => {
			const selector = store.pipe(select(selectCartItem, { id: mockCartItems[0].item_id }));
			const expected = cold('a', { a: mockCartItems[0] });

			expect(selector).toBeObservable(expected);
    });
	});

  describe('selectTotalNumberOfCartItems', () => {

    it('should select total number of cart items that takes into account the quantity of each cart item', () => {
			const selector = store.pipe(select(selectTotalNumberOfCartItems, { id: mockCartItems[0].item_id }));
			const expected = cold('a', { a: mockCartItems.reduce((acc, item) => {
				return acc + item.qty
			}, 0) });

			expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartItemConfiguredAttributes', () => {

    it('should return null when the given cart item is not configurable', () => {
			const selector = store.pipe(select(selectCartItemConfiguredAttributes, { id: mockCartItems[0].item_id }));
			const expected = cold('a', { a: null });

			expect(selector).toBeObservable(expected);
		});

		it('should return the configured attributes of a configurable cart item', () => {
			store.dispatch(new DaffCartItemListSuccess(mockStatefulConfigurableCartItems));
			const selector = store.pipe(select(selectCartItemConfiguredAttributes, { id: mockStatefulConfigurableCartItems[0].item_id }));
			const expected = cold('a', { a: mockStatefulConfigurableCartItems[0].attributes });

			expect(selector).toBeObservable(expected);
		});
  });

  describe('selectCartItemCompositeOptions', () => {

    it('should return null when the given cart item is not composite', () => {
			const selector = store.pipe(select(selectCartItemCompositeOptions, { id: mockCartItems[0].item_id }));
			const expected = cold('a', { a: null });

			expect(selector).toBeObservable(expected);
		});

		it('should return the item options of a composite cart item', () => {
			store.dispatch(new DaffCartItemListSuccess(mockStatefulCompositeCartItems));
			const selector = store.pipe(select(selectCartItemCompositeOptions, { id: mockStatefulCompositeCartItems[0].item_id }));
			const expected = cold('a', { a: mockStatefulCompositeCartItems[0].options });

			expect(selector).toBeObservable(expected);
		});
  });

  describe('selectIsCartItemOutOfStock', () => {

		it('should return whether the given cart item is out of stock', () => {
			store.dispatch(new DaffCartItemListSuccess(mockCartItems));
			const selector = store.pipe(select(selectIsCartItemOutOfStock, { id: mockCartItems[0].item_id }));
			const expected = cold('a', { a: !mockCartItems[0].in_stock });

			expect(selector).toBeObservable(expected);
		});

    it('should return null if the cart item is not in state', () => {
			const selector = store.pipe(select(selectIsCartItemOutOfStock, { id: mockCartItems[0].item_id + 'notId' }));
			const expected = cold('a', { a: null });

			expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartItemMutating', () => {

		it('should return true when a cart item is mutating', () => {
			store.dispatch(new DaffCartItemListSuccess(mockCartItems));
			store.dispatch(new DaffCartItemUpdate(mockCartItems[0].item_id, { qty: 2 }));
			const selector = store.pipe(select(selectCartItemMutating, { id: mockCartItems[0].item_id }));
			const expected = cold('a', { a: true });

			expect(selector).toBeObservable(expected);
		});

    it('should return false when there are no cart items mutating', () => {
			const selector = store.pipe(select(selectCartItemMutating, { id: mockCartItems[0].item_id }));
			const expected = cold('a', { a: false });

			expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartItemState', () => {

		it('should return the state of the cart item', () => {
			store.dispatch(new DaffCartItemListSuccess(mockCartItems));
			const selector = store.pipe(select(selectCartItemState, { id: mockCartItems[0].item_id }));
			const expected = cold('a', { a: mockCartItems[0].daffState });

			expect(selector).toBeObservable(expected);
		});

    it('should return null if the cart item is not in state', () => {
			const selector = store.pipe(select(selectCartItemState, { id: mockCartItems[0].item_id + 'notId' }));
			const expected = cold('a', { a: null });

			expect(selector).toBeObservable(expected);
    });
  });
});
