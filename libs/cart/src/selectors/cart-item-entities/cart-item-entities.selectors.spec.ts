import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCartFactory, DaffCartItemFactory, DaffConfigurableCartItemFactory, DaffCompositeCartItemFactory } from '@daffodil/cart/testing';

import { DaffCartReducersState, daffCartReducers } from '../../reducers/public_api';
import { DaffCart } from '../../models/cart';
import { DaffCartItem } from '../../models/cart-item';
import { getDaffCartItemEntitiesSelectors } from './cart-item-entities.selectors';
import { DaffCartItemListSuccess } from '../../actions/public_api';
import { DaffConfigurableCartItem } from '../../models/configurable-cart-item';
import { DaffCompositeCartItem } from '../../models/composite-cart-item';

describe('selectCartItemEntitiesState', () => {

  let store: Store<DaffCartReducersState>;
  const cartFactory: DaffCartFactory = new DaffCartFactory();
	const cartItemFactory: DaffCartItemFactory = new DaffCartItemFactory();
	const configurableCartItemFactory: DaffConfigurableCartItemFactory = new DaffConfigurableCartItemFactory();
	const compositeCartItemFactory: DaffCompositeCartItemFactory = new DaffCompositeCartItemFactory();
	let mockCart: DaffCart;
	let mockCartItems: DaffCartItem[];
	let mockConfigurableCartItems: DaffConfigurableCartItem[];
	let mockCompositeCartItems: DaffCompositeCartItem[];
	const {
		selectCartItemIds,
		selectCartItemEntities,
		selectAllCartItems,
		selectCartItemTotal,
		selectCartItem,
		selectCartItemConfiguredAttributes,
		selectCartItemCompositeOptions
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
		mockConfigurableCartItems = configurableCartItemFactory.createMany(2);
		mockCompositeCartItems = compositeCartItemFactory.createMany(2);
    store = TestBed.get(Store);

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

  describe('selectCartItemConfiguredAttributes', () => {
    
    it('should return null when the given cart item is not configurable', () => {
			const selector = store.pipe(select(selectCartItemConfiguredAttributes, { id: mockCartItems[0].item_id }));
			const expected = cold('a', { a: null });

			expect(selector).toBeObservable(expected);
		});
		
		it('should return the configured attributes of a configurable cart item', () => {
			store.dispatch(new DaffCartItemListSuccess(mockConfigurableCartItems));
			const selector = store.pipe(select(selectCartItemConfiguredAttributes, { id: mockConfigurableCartItems[0].item_id }));
			const expected = cold('a', { a: mockConfigurableCartItems[0].attributes });

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
			store.dispatch(new DaffCartItemListSuccess(mockCompositeCartItems));
			const selector = store.pipe(select(selectCartItemCompositeOptions, { id: mockCompositeCartItems[0].item_id }));
			const expected = cold('a', { a: mockCompositeCartItems[0].options });

			expect(selector).toBeObservable(expected);
		});
  });
});
