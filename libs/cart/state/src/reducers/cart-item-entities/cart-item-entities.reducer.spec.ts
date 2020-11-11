import { DaffCartItem, DaffCart, DaffCartItemStateEnum } from '@daffodil/cart';
import { DaffCartItemListSuccess, DaffCartItemLoadSuccess, DaffCartItemUpdateSuccess, DaffCartItemAddSuccess, DaffCartItemDeleteSuccess, DaffCartLoadSuccess, DaffCartClearSuccess } from '@daffodil/cart/state';
import { DaffCartItemFactory, DaffCartFactory } from '@daffodil/cart/testing';

import { DaffCartItemDelete, DaffCartItemStateReset, DaffCartItemUpdate } from '../../actions/public_api';
import { daffCartItemEntitiesAdapter } from './cart-item-entities-reducer-adapter';
import { daffCartItemEntitiesReducer } from './cart-item-entities.reducer';

describe('Cart | Cart Item Entities Reducer', () => {

	let cartItemFactory: DaffCartItemFactory;
	let initialState = daffCartItemEntitiesAdapter().getInitialState();

  beforeEach(() => {
    cartItemFactory = new DaffCartItemFactory();
  });

  describe('when an unknown action is triggered', () => {

    it('should return the current state', () => {
      const action = {} as any;

      const result = daffCartItemEntitiesReducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when CartItemListSuccessAction is triggered', () => {

    let cartItems: DaffCartItem[];
    let result;

    beforeEach(() => {
      cartItems = cartItemFactory.createMany(2);
      const cartItemListSuccess = new DaffCartItemListSuccess(cartItems);

      result = daffCartItemEntitiesReducer(initialState, cartItemListSuccess);
    });

    it('sets expected number of cartItems on state', () => {
      expect(result.ids.length).toEqual(cartItems.length);
    });

    it('sets expected cartItem on state', () => {
      expect(result.entities[cartItems[0].item_id]).toEqual(cartItems[0]);
    });
  });

  describe('when CartItemLoadSuccessAction is triggered', () => {

    let cartItem: DaffCartItem;
    let result;

    beforeEach(() => {
      cartItem = cartItemFactory.create();
      const cartItemLoadSuccess = new DaffCartItemLoadSuccess(cartItem);

      result = daffCartItemEntitiesReducer(initialState, cartItemLoadSuccess);
    });

    it('sets expected cartItem on state', () => {
      expect(result.entities[cartItem.item_id]).toEqual(cartItem);
    });
  });

  describe('when CartItemUpdateSuccessAction is triggered', () => {

    let cart: DaffCart;
    let cartItems: DaffCartItem[];
    let result;

    beforeEach(() => {
			cartItems = cartItemFactory.createMany(2);
      cart = new DaffCartFactory().create({
				items: cartItems
			});
      const cartItemUpdateSuccess = new DaffCartItemUpdateSuccess(cart, cartItems[0].item_id);
      
      result = daffCartItemEntitiesReducer(initialState, cartItemUpdateSuccess);
    });

    it('sets expected number of cartItems on state', () => {
      expect(result.ids.length).toEqual(cartItems.length);
    });

    it('sets expected cart item on state', () => {
      expect(result.entities[cartItems[0].item_id].item_id).toEqual(cartItems[0].item_id);
		});
		
		it('sets the state of the updated cart item to Updated', () => {
			expect(result.entities[cartItems[0].item_id].state).toEqual(DaffCartItemStateEnum.Updated)
		});
  });

  describe('when CartItemAddSuccessAction is triggered with a new cart item', () => {

    let cart: DaffCart;
    let cartItem: DaffCartItem;
    let result;

    beforeEach(() => {
			cartItem = cartItemFactory.create();
      cart = new DaffCartFactory().create({
				items: [cartItem]
			});
      const cartItemAddSuccess = new DaffCartItemAddSuccess(cart);

      result = daffCartItemEntitiesReducer(initialState, cartItemAddSuccess);
    });

    it('sets expected number of cartItems on state', () => {
      expect(result.ids.length).toEqual(cart.items.length);
    });

    it('sets expected cart item on state', () => {
      expect(result.entities[cartItem.item_id].item_id).toEqual(cartItem.item_id);
		});
		
		it('sets the new cart item\'s state to New', () => {
			expect(result.entities[cartItem.item_id].state).toEqual(DaffCartItemStateEnum.New);
		});
  });

  describe('when CartItemAddSuccessAction is triggered with an existing cart item', () => {

    let cart: DaffCart;
    let cartItem: DaffCartItem;
    let result;

    beforeEach(() => {
			cartItem = cartItemFactory.create();
      cart = new DaffCartFactory().create({
				items: [cartItem]
			});
      const cartItemAddSuccess = new DaffCartItemAddSuccess({
				...cart,
				items: [{
					...cartItem,
					qty: cartItem.qty + 1
				}]
			});
      
      result = daffCartItemEntitiesReducer({
				...initialState,
				entities: {
					[cartItem.item_id]: cartItem
				}
			}, cartItemAddSuccess);
    });
		
		it('sets the cart item\'s state to Updated', () => {
			expect(result.entities[cartItem.item_id].state).toEqual(DaffCartItemStateEnum.Updated);
		});
  });

  describe('when CartItemDeleteSuccessAction is triggered', () => {

    let cart: DaffCart;
    let cartItems: DaffCartItem[];
    let result;

    beforeEach(() => {
			cartItems = cartItemFactory.createMany(2);
      cart = new DaffCartFactory().create({
				items: cartItems
			});
      const cartItemDeleteSuccess = new DaffCartItemDeleteSuccess(cart);

      result = daffCartItemEntitiesReducer(initialState, cartItemDeleteSuccess);
    });

    it('sets expected number of cartItems on state', () => {
      expect(result.ids.length).toEqual(cartItems.length);
    });

    it('sets expected cart item on state', () => {
      expect(result.entities[cartItems[0].item_id]).toEqual(cartItems[0]);
    });
  });

  describe('when CartLoadSuccessAction is triggered', () => {

    let cart: DaffCart;
    let cartItems: DaffCartItem[];
    let result;

    beforeEach(() => {
			cartItems = cartItemFactory.createMany(2);
      cart = new DaffCartFactory().create({
				items: cartItems
			});
      const cartLoadSuccess = new DaffCartLoadSuccess(cart);

      result = daffCartItemEntitiesReducer(initialState, cartLoadSuccess);
    });

    it('sets expected number of cartItems on state', () => {
      expect(result.ids.length).toEqual(cartItems.length);
    });

    it('sets expected cart item on state', () => {
      expect(result.entities[cartItems[0].item_id]).toEqual(cartItems[0]);
    });
  });

  describe('when CartClearSuccessAction is triggered', () => {

    let cart: DaffCart;
    let result;

    beforeEach(() => {
      cart = new DaffCartFactory().create({
				items: []
			});
      const cartItemAddSuccess = new DaffCartClearSuccess(cart);

      result = daffCartItemEntitiesReducer(initialState, cartItemAddSuccess);
    });

    it('sets expected number of cartItems on state', () => {
      expect(result.ids.length).toEqual(0);
    });
  });

  describe('when CartItemStateResetAction is triggered', () => {

    let stubCartItem: DaffCartItem;
    let result;

    beforeEach(() => {
      stubCartItem = new DaffCartItemFactory().create();
			initialState = {
				ids: [stubCartItem.item_id.toString()],
				entities: {
					[stubCartItem.item_id]: {
						...stubCartItem,
						state: DaffCartItemStateEnum.New
					}
				}
			}
      const cartItemStateReset = new DaffCartItemStateReset();
      
      result = daffCartItemEntitiesReducer(initialState, cartItemStateReset);
    });

    it('resets the state of all the cart items to default', () => {
      expect(result.entities[stubCartItem.item_id].state).toEqual(DaffCartItemStateEnum.Default);
    });
  });

  describe('when CartItemUpdateAction is triggered', () => {

    let stubCartItem: DaffCartItem;
    let result;

    beforeEach(() => {
      stubCartItem = new DaffCartItemFactory().create();
			initialState = {
				ids: [stubCartItem.item_id.toString()],
				entities: {
					[stubCartItem.item_id]: stubCartItem
				}
			}
      const cartItemUpdateAction = new DaffCartItemUpdate(stubCartItem.item_id, { qty: 4 });
      
      result = daffCartItemEntitiesReducer(initialState, cartItemUpdateAction);
    });

    it('sets the updating cart item state to mutating', () => {
      expect(result.entities[stubCartItem.item_id].state).toEqual(DaffCartItemStateEnum.Mutating);
    });
  });

  describe('when CartItemDeleteAction is triggered', () => {

    let stubCartItem: DaffCartItem;
    let result;

    beforeEach(() => {
      stubCartItem = new DaffCartItemFactory().create();
			initialState = {
				ids: [stubCartItem.item_id.toString()],
				entities: {
					[stubCartItem.item_id]: stubCartItem
				}
			}
      const cartItemDeleteAction = new DaffCartItemDelete(stubCartItem.item_id);
      
      result = daffCartItemEntitiesReducer(initialState, cartItemDeleteAction);
    });

    it('sets the cart item state to mutating', () => {
      expect(result.entities[stubCartItem.item_id].state).toEqual(DaffCartItemStateEnum.Mutating);
    });
  });
});
