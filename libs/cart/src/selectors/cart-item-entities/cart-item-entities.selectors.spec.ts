import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';

import { DaffCartReducersState, daffCartReducers } from '../../reducers/public_api';
import { DaffCart } from '../../models/cart';
import { DaffCartItem } from '../../models/cart-item';
import { getDaffCartItemEntitiesSelectors } from './cart-item-entities.selectors';
import { DaffCartItemListSuccess } from '../../actions/public_api';

describe('selectCartItemEntitiesState', () => {

  let store: Store<DaffCartReducersState>;
  const cartFactory: DaffCartFactory = new DaffCartFactory();
  const cartItemFactory: DaffCartItemFactory = new DaffCartItemFactory();
	let mockCart: DaffCart;
	let mockCartItems: DaffCartItem[];
	const {
		selectCartItemIds,
		selectCartItemEntities,
		selectAllCartItems,
		selectCartItemTotal,
		selectCartItem
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
		mockCartItems = cartItemFactory.createMany(2);
    store = TestBed.get(Store);

    store.dispatch(new DaffCartItemListSuccess(mockCartItems));
  });

  describe('CartItemEntitiesState', () => {
    
    describe('selectIds', () => {
    
      it('selects cart item ids', () => {
				const selector = store.pipe(select(selectCartItemIds));
				const expected = cold('a', { a: [mockCartItems[0].item_id, mockCartItems[1].item_id] });

				expect(selector).toBeObservable(expected);
      });
    });
  
    describe('selectCartItemEntities', () => {
      
      it('selects product entities as a dictionary object', () => {
				const expectedDictionary = mockCartItems.reduce((acc, item) => ({
					...acc,
					[item.item_id]: {
						...item,
						id: item.item_id
					}
				}), {});

				const selector = store.pipe(select(selectCartItemEntities));
				const expected = cold('a', { a: expectedDictionary });

				expect(selector).toBeObservable(expected);
      });
    });
  
    describe('selectAllCartItems', () => {
      
      it('selects all products as an array', () => {
        const selector = store.pipe(select(selectAllCartItems));
				const expected = cold('a', { a: mockCartItems.map(item => ({ ...item, id: item.item_id })) });

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
			const expected = cold('a', { a: { ...mockCartItems[0], id: mockCartItems[0].item_id } });

			expect(selector).toBeObservable(expected);
    });
  });
});
