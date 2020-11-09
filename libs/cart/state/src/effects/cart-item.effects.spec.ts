import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffCartItem, DaffCartItemInput, DaffCart, DaffCartStorageService, DaffCartItemInputType, DaffCartOrderResult, DaffCartItemStateDebounceTime, DaffCartItemStateEnum } from '@daffodil/cart';
import { DaffCartItemServiceInterface, DaffCartItemDriver } from '@daffodil/cart/driver';
import { DaffCartItemList, DaffCartItemListSuccess, DaffCartItemListFailure, DaffCartItemLoad, DaffCartItemLoadSuccess, DaffCartItemLoadFailure, DaffCartItemAdd, DaffCartItemAddSuccess, DaffCartItemAddFailure, DaffCartItemUpdate, DaffCartItemUpdateSuccess, DaffCartItemUpdateFailure, DaffCartItemDelete, DaffCartItemDeleteSuccess, DaffCartItemDeleteFailure } from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartItemFactory
} from '@daffodil/cart/testing';

import { DaffCartItemEffects } from './cart-item.effects';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { getDaffCartItemEntitiesSelectors } from '../selectors/cart-item-entities/cart-item-entities.selectors';
import { Store } from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';
import { DaffCartItemStateReset } from '../actions/public_api';

describe('Daffodil | Cart | CartItemEffects', () => {
  let actions$: Observable<any>;
	let effects: DaffCartItemEffects<DaffCartItem, DaffCartItemInput, DaffCart, DaffCartOrderResult>;
	let store: MockStore<any>;
	const {
		selectAllCartItems
	} = getDaffCartItemEntitiesSelectors();

  let mockCart: DaffCart;
  let mockCartItem: DaffCartItem;
  let mockCartItemInput: DaffCartItemInput;

  let cartFactory: DaffCartFactory;
  let cartPaymentFactory: DaffCartItemFactory;

  let daffCartItemDriverSpy: jasmine.SpyObj<DaffCartItemServiceInterface>;

  let daffCartStorageSpy: jasmine.SpyObj<DaffCartStorageService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCartItemEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCartItemDriver,
          useValue: jasmine.createSpyObj('DaffCartItemDriver', ['list', 'get', 'update', 'add', 'delete'])
				},
				provideMockStore({}),
				{ 
					provide: DaffCartItemStateDebounceTime,
					useValue: 4000
				},
        {
          provide: DaffCartStorageService,
          useValue: jasmine.createSpyObj('DaffCartStorageService', ['getCartId'])
        }
      ]
    });

		effects = TestBed.get<DaffCartItemEffects<
			DaffCartItem, 
			DaffCartItemInput, 
			DaffCart, 
			DaffCartOrderResult
		>>(DaffCartItemEffects);
		store = TestBed.get(Store);

    daffCartItemDriverSpy = TestBed.get<DaffCartItemServiceInterface>(DaffCartItemDriver);
    daffCartStorageSpy = TestBed.get(DaffCartStorageService);

    cartFactory = TestBed.get<DaffCartFactory>(DaffCartFactory);
    cartPaymentFactory = TestBed.get<DaffCartItemFactory>(DaffCartItemFactory);

    mockCart = cartFactory.create();
    mockCartItem = cartPaymentFactory.create();
    mockCartItemInput = {
			type: DaffCartItemInputType.Simple,
      productId: '3',
      qty: 3
    };

    mockCart.items = [mockCartItem];

    daffCartStorageSpy.getCartId.and.returnValue(String(mockCart.id));
  });

  afterAll(() => {
    store.resetSelectors();
  })

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartItemListAction is triggered', () => {
    let expected;
    const cartItemListAction = new DaffCartItemList();

    describe('and the call to CartItemService is successful', () => {
      beforeEach(() => {
        daffCartItemDriverSpy.list.and.returnValue(of([mockCartItem]));
        const cartItemListSuccessAction = new DaffCartItemListSuccess([mockCartItem]);
        actions$ = hot('--a', { a: cartItemListAction });
        expected = cold('--b', { b: cartItemListSuccessAction });
      });

      it('should dispatch a CartItemListSuccess action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });

    describe('and the call to CartItemService fails', () => {
      beforeEach(() => {
        const error = 'Failed to list cart items';
        const response = cold('#', {}, error);
        daffCartItemDriverSpy.list.and.returnValue(response);
        const cartItemListFailureAction = new DaffCartItemListFailure(error);
        actions$ = hot('--a', { a: cartItemListAction });
        expected = cold('--b', { b: cartItemListFailureAction });
      });

      it('should dispatch a CartItemListFailure action', () => {
        expect(effects.list$).toBeObservable(expected);
      });
    });
  });

  describe('when CartItemLoadAction is triggered', () => {
    let expected;
    let cartItemLoadAction;

    beforeEach(() => {
      cartItemLoadAction = new DaffCartItemLoad(mockCartItem.item_id);
    });

    describe('and the call to CartItemService is successful', () => {
      beforeEach(() => {
        daffCartItemDriverSpy.get.and.returnValue(of(mockCartItem));
        const cartItemLoadSuccessAction = new DaffCartItemLoadSuccess(mockCartItem);
        actions$ = hot('--a', { a: cartItemLoadAction });
        expected = cold('--b', { b: cartItemLoadSuccessAction });
      });

      it('should dispatch a CartItemLoadSuccess action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });

    describe('and the call to CartItemService fails', () => {
      beforeEach(() => {
        const error = 'Failed to load cart item';
        const response = cold('#', {}, error);
        daffCartItemDriverSpy.get.and.returnValue(response);
        const cartItemLoadFailureAction = new DaffCartItemLoadFailure(error);
        actions$ = hot('--a', { a: cartItemLoadAction });
        expected = cold('--b', { b: cartItemLoadFailureAction });
      });

      it('should dispatch a CartItemLoadFailure action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });
  });

  describe('when CartItemAddAction is triggered', () => {
    let expected;
    let cartItemAddAction;

    beforeEach(() => {
      cartItemAddAction = new DaffCartItemAdd(mockCartItemInput);
      mockCart.items = [];
    });

    describe('and the call to CartItemService is successful', () => {

			it(`should dispatch a CartItemAddSuccess action with cart items of the correct state 
					when a new product is added to the cart`, () => {
				store.overrideSelector(selectAllCartItems, []);
				const newCart = {
					...mockCart,
					items: [
						mockCartItem
					]
				}
				daffCartItemDriverSpy.add.and.returnValue(of(newCart));
				const cartItemAddSuccessAction = new DaffCartItemAddSuccess({
					...newCart,
					items: [
						{ ...mockCartItem, state: DaffCartItemStateEnum.New }
					]
				});
				actions$ = hot('--a', { a: cartItemAddAction });
				expected = cold('--b', { b: cartItemAddSuccessAction });
        expect(effects.add$).toBeObservable(expected);
      });

			it(`should dispatch a CartItemAddSuccess action with cart items of the correct state 
					when an existing product on the cart is added to the cart`, () => {
				store.overrideSelector(selectAllCartItems, [mockCartItem]);
				const newCart = {
					...mockCart,
					items: [{
						...mockCartItem,
						qty: mockCartItem.qty + 1
					}]
				};
				daffCartItemDriverSpy.add.and.returnValue(of(newCart));
				const cartItemAddSuccessAction = new DaffCartItemAddSuccess({
					...newCart,
					items: [
						{ ...newCart.items[0], state: DaffCartItemStateEnum.Updated }
					]
				});
				actions$ = hot('--a', { a: cartItemAddAction });
				expected = cold('--b', { b: cartItemAddSuccessAction });
        expect(effects.add$).toBeObservable(expected);
      });
    });

    describe('and the call to CartItemService fails', () => {
      beforeEach(() => {
        const error = 'Failed to add cart item';
        const response = cold('#', {}, error);
        daffCartItemDriverSpy.add.and.returnValue(response);
        const cartItemAddFailureAction = new DaffCartItemAddFailure(error);
        actions$ = hot('--a', { a: cartItemAddAction });
        expected = cold('--b', { b: cartItemAddFailureAction });
      });

      it('should dispatch a CartItemAddFailure action', () => {
        expect(effects.add$).toBeObservable(expected);
      });
    });
  });

  describe('when CartItemUpdateAction is triggered', () => {
    let expected;
    let cartItemUpdateAction;
    let qty;

    beforeEach(() => {
      qty = mockCartItem.qty + 1
      mockCartItem.qty = qty;
      cartItemUpdateAction = new DaffCartItemUpdate(mockCartItem.item_id, mockCartItem);
    });

    describe('and the call to CartItemService is successful', () => {
      beforeEach(() => {
        daffCartItemDriverSpy.update.and.returnValue(of({
					...mockCart,
					items: [mockCartItem]
				}));
        const cartItemUpdateSuccessAction = new DaffCartItemUpdateSuccess({
					...mockCart,
					items: [{
						...mockCart.items[0],
						state: DaffCartItemStateEnum.Updated
					}]
				});
        actions$ = hot('--a', { a: cartItemUpdateAction });
        expected = cold('--b', { b: cartItemUpdateSuccessAction });
      });

      it('should dispatch a CartItemUpdateSuccess action with cart items of the correct state', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });

    describe('and the call to CartItemService fails', () => {
      beforeEach(() => {
        const error = 'Failed to update cart item';
        const response = cold('#', {}, error);
        daffCartItemDriverSpy.update.and.returnValue(response);
        const cartItemUpdateFailureAction = new DaffCartItemUpdateFailure(error);
        actions$ = hot('--a', { a: cartItemUpdateAction });
        expected = cold('--b', { b: cartItemUpdateFailureAction });
      });

      it('should dispatch a CartItemUpdateFailure action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });
	});

  describe('resetCartItemStateAfterChange$', () => {
		let expectedObservable;
		
		describe('when a DaffCartItemAddSuccess action is dispatched', () => {

			it('should dispatch a DaffCartItemStateReset after the specified amount of time', () => {
				const testScheduler = new TestScheduler((actual, expected) => {
					expect(actual).toEqual(expected);
				});
				testScheduler.run(helpers => {
					const expectedMarble = '4000ms a';
					const cartItemAddSuccess = new DaffCartItemAddSuccess(mockCart);
					const shopCartItemReset = new DaffCartItemStateReset();
					actions$ = helpers.hot('a', { a: cartItemAddSuccess });
					expectedObservable = {a: shopCartItemReset};
	
					helpers.expectObservable(effects.resetCartItemStateAfterChange$).toBe(expectedMarble, expectedObservable);
				});
			});
		});

		describe('when a DaffCartItemUpdateSuccess action is dispatched', () => {

			it('should dispatch a DaffCartItemStateReset after the specified amount of time', () => {
				const testScheduler = new TestScheduler((actual, expected) => {
					expect(actual).toEqual(expected);
				});
				testScheduler.run(helpers => {
					const expectedMarble = '4000ms a';
					const cartItemUpdateSuccess = new DaffCartItemUpdateSuccess(mockCart);
					const shopCartItemReset = new DaffCartItemStateReset();
					actions$ = helpers.hot('a', { a: cartItemUpdateSuccess });
					expectedObservable = {a: shopCartItemReset};
	
					helpers.expectObservable(effects.resetCartItemStateAfterChange$).toBe(expectedMarble, expectedObservable);
				});
			});
		});
  });

  describe('when CartItemDeleteAction is triggered', () => {
    let expected;
    let cartItemRemoveAction;

    beforeEach(() => {
      cartItemRemoveAction = new DaffCartItemDelete(mockCartItem.item_id);
    });

    describe('and the clear call to driver is successful', () => {
      beforeEach(() => {
        mockCart.items = [];
        daffCartItemDriverSpy.delete.and.returnValue(of(mockCart));
        const cartItemRemoveCartSuccessAction = new DaffCartItemDeleteSuccess(mockCart);
        actions$ = hot('--a', { a: cartItemRemoveAction });
        expected = cold('--b', { b: cartItemRemoveCartSuccessAction });
      });
      it('should return a DaffCartItemDeleteSucess action', () => {
        expect(effects.delete$).toBeObservable(expected);
      });
    });

    describe('and the call to CartItemService fails', () => {
      beforeEach(() => {
        const error = 'Failed to remove the cart item';
        const response = cold('#', {}, error);
        daffCartItemDriverSpy.delete.and.returnValue(response);
        const cartItemRemoveCartFailureAction = new DaffCartItemDeleteFailure(error);
        actions$ = hot('--a', { a: cartItemRemoveAction });
        expected = cold('--b', { b: cartItemRemoveCartFailureAction });
      });
      it('should return a DaffCartItemDeleteFailure action', () => {
        expect(effects.delete$).toBeObservable(expected);
      });
    });
  });
});
