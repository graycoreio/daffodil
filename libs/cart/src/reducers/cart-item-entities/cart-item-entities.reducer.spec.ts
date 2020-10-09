import { DaffCartItemFactory, DaffCartFactory } from '@daffodil/cart/testing';

import { daffCartItemEntitiesAdapter } from './cart-item-entities-reducer-adapter';
import { daffCartItemEntitiesReducer } from './cart-item-entities.reducer';
import { DaffCartItem } from '../../models/cart-item';
import {
	DaffCartItemListSuccess,
	DaffCartItemLoadSuccess,
	DaffCartItemUpdateSuccess,
	DaffCartItemAddSuccess,
	DaffCartItemDeleteSuccess,
	DaffCartLoadSuccess,
	DaffCartClearSuccess
} from '../../actions/public_api';
import { DaffCart } from '../../models/cart';

describe('Cart | Cart Item Entities Reducer', () => {

	let cartItemFactory: DaffCartItemFactory;
	const initialState = daffCartItemEntitiesAdapter().getInitialState();

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
      // ensure item IDs are unique
      cartItems[1].item_id = Number(cartItems[0].item_id) + 1;
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
      const cartItemUpdateSuccess = new DaffCartItemUpdateSuccess(cart);

      result = daffCartItemEntitiesReducer(initialState, cartItemUpdateSuccess);
    });

    it('sets expected number of cartItems on state', () => {
      expect(result.ids.length).toEqual(cartItems.length);
    });

    it('sets expected cart item on state', () => {
      expect(result.entities[cartItems[0].item_id]).toEqual(cartItems[0]);
    });
  });

  describe('when CartItemAddSuccessAction is triggered', () => {

    let cart: DaffCart;
    let cartItems: DaffCartItem[];
    let result;

    beforeEach(() => {
			cartItems = cartItemFactory.createMany(2);
      cart = new DaffCartFactory().create({
				items: cartItems
			});
      const cartItemAddSuccess = new DaffCartItemAddSuccess(cart);

      result = daffCartItemEntitiesReducer(initialState, cartItemAddSuccess);
    });

    it('sets expected number of cartItems on state', () => {
      expect(result.ids.length).toEqual(cartItems.length);
    });

    it('sets expected cart item on state', () => {
      expect(result.entities[cartItems[0].item_id]).toEqual(cartItems[0]);
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
});
