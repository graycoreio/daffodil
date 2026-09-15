import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  combineReducers,
  Store,
  StoreModule,
} from '@ngrx/store';
import {
  Observable,
  of,
  throwError,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCartItemInput,
  DaffCart,
  DaffCartStorageService,
  DaffCartItemInputType,
  DaffCartItem,
} from '@daffodil/cart';
import {
  DaffCartItemServiceInterface,
  DaffCartItemDriver,
  DaffCartDriverResolveService,
} from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DaffCartItemList,
  DaffCartItemListSuccess,
  DaffCartItemListFailure,
  DaffCartItemLoad,
  DaffCartItemLoadSuccess,
  DaffCartItemLoadFailure,
  DaffCartItemAdd,
  DaffCartItemAddSuccess,
  DaffCartItemAddFailure,
  DaffCartItemUpdate,
  DaffCartItemUpdateSuccess,
  DaffCartItemUpdateFailure,
  DaffCartItemDelete,
  DaffCartItemDeleteSuccess,
  DaffCartItemDeleteFailure,
  DaffCartItemStateReset,
  DaffCartItemStateDebounceTime,
  DaffCartItemDeleteOutOfStock,
  DaffCartItemDeleteOutOfStockFailure,
  DaffCartItemDeleteOutOfStockSuccess,
  daffCartReducers,
  DAFF_CART_STORE_FEATURE_KEY,
  daffCartRetrivalActions,
  DaffCartLoadSuccess,
  DaffCartReducersState,
  daffCartItemEntitiesRetrievalActionsReducerFactory,
  daffCartRetrievalActionsReducerFactory,
} from '@daffodil/cart/state';
import { DaffStatefulCartItemFactory } from '@daffodil/cart/state/testing';
import {
  DaffCartFactory,
  DaffCartItemFactory,
} from '@daffodil/cart/testing';
import {
  daffComposeReducers,
  daffIdentityReducer,
  DaffOperationEntity,
  DaffStateError,
} from '@daffodil/core/state';

import { DaffCartItemEffects } from './cart-item.effects';

describe('@daffodil/cart/state | DaffCartItemEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartItemEffects;
  let store: Store;

  let mockCart: DaffCart;
  let mockCartItem: DaffOperationEntity<DaffCartItem>;
  let mockCartItemInput: DaffCartItemInput;

  let cartFactory: DaffCartFactory;
  let statefulCartItemFactory: DaffStatefulCartItemFactory;

  let daffCartItemDriver: DaffCartItemServiceInterface;
  let daffCartStorageService: DaffCartStorageService;

  let driverGetSpy: jasmine.Spy<DaffCartItemServiceInterface['get']>;
  let driverAddSpy: jasmine.Spy<DaffCartItemServiceInterface['add']>;
  let driverListSpy: jasmine.Spy<DaffCartItemServiceInterface['list']>;
  let driverUpdateSpy: jasmine.Spy<DaffCartItemServiceInterface['update']>;
  let driverDeleteSpy: jasmine.Spy<DaffCartItemServiceInterface['delete']>;
  let getCartIdSpy: jasmine.Spy<DaffCartStorageService['getCartId']>;
  let cartResolverSpy: jasmine.SpyObj<DaffCartDriverResolveService>;

  beforeEach(() => {
    cartResolverSpy = jasmine.createSpyObj('DaffCartDriverResolveService', ['getCartIdOrFail']);

    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
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
      providers: [
        DaffCartItemEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCartItemStateDebounceTime,
          useValue: 4000,
        },
        {
          provide: DaffCartDriverResolveService,
          useValue: cartResolverSpy,
        },
      ],
    });

    effects = TestBed.inject(DaffCartItemEffects);
    store = TestBed.inject(Store);

    daffCartItemDriver = TestBed.inject(DaffCartItemDriver);
    daffCartStorageService = TestBed.inject(DaffCartStorageService);

    cartFactory = TestBed.inject(DaffCartFactory);
    statefulCartItemFactory = TestBed.inject(DaffStatefulCartItemFactory);

    mockCart = cartFactory.create();
    mockCartItem = statefulCartItemFactory.create();
    mockCartItemInput = {
      type: DaffCartItemInputType.Simple,
      productId: '3',
      qty: 3,
    };

    mockCart.items = [mockCartItem];

    driverGetSpy = spyOn(daffCartItemDriver, 'get');
    driverAddSpy = spyOn(daffCartItemDriver, 'add');
    driverListSpy = spyOn(daffCartItemDriver, 'list');
    driverUpdateSpy = spyOn(daffCartItemDriver, 'update');
    driverDeleteSpy = spyOn(daffCartItemDriver, 'delete');
    getCartIdSpy = spyOn(daffCartStorageService, 'getCartId');
    getCartIdSpy.and.returnValue(mockCart.id);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartItemListAction is triggered', () => {
    const cartItemListAction = new DaffCartItemList();

    describe('and the call to CartItemService is successful', () => {
      it('should dispatch a CartItemListSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverListSpy.and.returnValue(of([mockCartItem]));
          const cartItemListSuccessAction = new DaffCartItemListSuccess([mockCartItem]);
          actions$ = helpers.hot('--a', { a: cartItemListAction });
          helpers.expectObservable(effects.list$).toBe('--b', { b: cartItemListSuccessAction });
        });
      });
    });

    describe('and the call to CartItemService fails', () => {
      it('should dispatch a CartItemListFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to list cart items' };
          const response = helpers.cold<any>('#', {}, error);
          driverListSpy.and.returnValue(response);
          const cartItemListFailureAction = new DaffCartItemListFailure([error]);
          actions$ = helpers.hot('--a', { a: cartItemListAction });
          helpers.expectObservable(effects.list$).toBe('--b', { b: cartItemListFailureAction });
        });
      });
    });
  });

  describe('when CartItemLoadAction is triggered', () => {
    let cartItemLoadAction;

    beforeEach(() => {
      cartItemLoadAction = new DaffCartItemLoad(mockCartItem.id);
    });

    describe('and the call to CartItemService is successful', () => {
      it('should dispatch a CartItemLoadSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverGetSpy.and.returnValue(of(mockCartItem));
          const cartItemLoadSuccessAction = new DaffCartItemLoadSuccess(mockCartItem);
          actions$ = helpers.hot('--a', { a: cartItemLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: cartItemLoadSuccessAction });
        });
      });
    });

    describe('and the call to CartItemService fails', () => {
      it('should dispatch a CartItemLoadFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load cart item' };
          const response = helpers.cold<any>('#', {}, error);
          driverGetSpy.and.returnValue(response);
          const cartItemLoadFailureAction = new DaffCartItemLoadFailure([error], mockCartItem.id);
          actions$ = helpers.hot('--a', { a: cartItemLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: cartItemLoadFailureAction });
        });
      });
    });
  });

  describe('when CartItemAddAction is triggered', () => {
    let cartItemAddAction;

    beforeEach(() => {
      cartItemAddAction = new DaffCartItemAdd(mockCartItemInput);
      mockCart.items = [];
    });

    describe('and the cart ID retrieval succeeds', () => {
      beforeEach(() => {
        cartResolverSpy.getCartIdOrFail.and.returnValue(of(mockCart.id));
      });

      describe('and the call to CartItemService is successful', () => {
        it('should dispatch a CartItemAddSuccess action', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            mockCart.items.push(mockCartItem);
            driverAddSpy.and.returnValue(of(mockCart));
            const cartItemAddSuccessAction = new DaffCartItemAddSuccess(mockCart, mockCartItem.id);
            actions$ = helpers.hot('--a', { a: cartItemAddAction });
            helpers.expectObservable(effects.add$).toBe('--b', { b: cartItemAddSuccessAction });
          });
        });
      });

      describe('and the call to CartItemService fails', () => {
        it('should dispatch a CartItemAddFailure action', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to add cart item' };
            const response = helpers.cold<any>('#', {}, error);
            driverAddSpy.and.returnValue(response);
            const cartItemAddFailureAction = new DaffCartItemAddFailure([error]);
            actions$ = helpers.hot('--a', { a: cartItemAddAction });
            helpers.expectObservable(effects.add$).toBe('--b', { b: cartItemAddFailureAction });
          });
        });
      });
    });

    describe('and the cart ID retrieval fails', () => {
      it('should not try to add the item', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to add cart item' };
          actions$ = helpers.hot('--a', { a: cartItemAddAction });
          cartResolverSpy.getCartIdOrFail.and.returnValue(throwError(() => error));
        });

        expect(driverAddSpy).not.toHaveBeenCalled();
      });

      it('should dispatch a CartItemAddFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to add cart item' };
          const cartItemAddFailureAction = new DaffCartItemAddFailure([error]);
          actions$ = helpers.hot('--a', { a: cartItemAddAction });
          cartResolverSpy.getCartIdOrFail.and.returnValue(throwError(() => error));
          helpers.expectObservable(effects.add$).toBe('--(b|)', { b: cartItemAddFailureAction });
        });
      });
    });
  });

  describe('when CartItemUpdateAction is triggered', () => {
    let cartItemUpdateAction;
    let qty;
    let cartItemUpdateSuccessAction;

    beforeEach(() => {
      qty = mockCartItem.qty + 1;
      mockCartItem.qty = qty;
      cartItemUpdateAction = new DaffCartItemUpdate(mockCartItem.id, mockCartItem);
      cartItemUpdateSuccessAction = new DaffCartItemUpdateSuccess(mockCart, mockCartItem.id);
    });

    describe('and the call to CartItemService is successful', () => {
      it('should dispatch a CartItemUpdateSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverUpdateSpy.and.returnValue(of(mockCart));
          actions$ = helpers.hot('--a', { a: cartItemUpdateAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: cartItemUpdateSuccessAction });
        });
      });
    });

    describe('and a concurrent request is made', () => {

      it('should not cancel the first observable', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const mockCartItem2 = new DaffCartItemFactory().create();
          driverUpdateSpy.and.returnValue(helpers.cold('--a', { a: mockCart }));
          const cartItemUpdateAction2 = new DaffCartItemUpdate(mockCartItem2.id, mockCartItem2);
          const cartItemUpdateSuccessAction2 = new DaffCartItemUpdateSuccess(mockCart, mockCartItem2.id);
          actions$ = helpers.hot('ab', { a: cartItemUpdateAction, b: cartItemUpdateAction2 });
          helpers.expectObservable(effects.update$).toBe('--cd', { c: cartItemUpdateSuccessAction, d: cartItemUpdateSuccessAction2 });
        });
      });
    });

    describe('and the call to CartItemService fails', () => {
      it('should dispatch a CartItemUpdateFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to update cart item' };
          const response = helpers.cold<any>('#', {}, error);
          driverUpdateSpy.and.returnValue(response);
          const cartItemUpdateFailureAction = new DaffCartItemUpdateFailure([error], mockCartItem.id);
          actions$ = helpers.hot('--a', { a: cartItemUpdateAction });
          helpers.expectObservable(effects.update$).toBe('--b', { b: cartItemUpdateFailureAction });
        });
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
          const cartItemAddSuccess = new DaffCartItemAddSuccess(mockCart, mockCartItem.id);
          const shopCartItemReset = new DaffCartItemStateReset(mockCartItem.id);
          actions$ = helpers.hot('a', { a: cartItemAddSuccess });
          expectedObservable = { a: shopCartItemReset };

          helpers.expectObservable(effects.resetCartItemStateAfterChange$).toBe(expectedMarble, expectedObservable);
        });
      });

      describe('and when DaffCartItemUpdate is dispatched before the state is reset', () => {
        it('should dispatch a DaffCartItemStateReset after the specified amount of time from the final update success', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            const expectedMarble = '4000ms ----a';
            const cartItemAddSuccess = new DaffCartItemAddSuccess(mockCart, mockCartItem.id);
            const cartItemUpdateAction = new DaffCartItemUpdate(mockCartItem.id, mockCartItem);
            const cartItemUpdateSuccessAction = new DaffCartItemUpdateSuccess(mockCart, mockCartItem.id);
            const shopCartItemReset = new DaffCartItemStateReset(mockCartItem.id);
            actions$ = helpers.hot('a-b-c', { a: cartItemAddSuccess, b: cartItemUpdateAction, c: cartItemUpdateSuccessAction });
            expectedObservable = { a: shopCartItemReset };

            helpers.expectObservable(effects.resetCartItemStateAfterChange$).toBe(expectedMarble, expectedObservable);
          });
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
          const cartItemUpdateSuccess = new DaffCartItemUpdateSuccess(mockCart, mockCartItem.id);
          const shopCartItemReset = new DaffCartItemStateReset(mockCartItem.id);
          actions$ = helpers.hot('a', { a: cartItemUpdateSuccess });
          expectedObservable = { a: shopCartItemReset };

          helpers.expectObservable(effects.resetCartItemStateAfterChange$).toBe(expectedMarble, expectedObservable);
        });
      });
    });
  });

  describe('when CartItemDeleteAction is triggered', () => {
    let cartItemDeleteAction;
    let cartItemDeleteSuccessAction;

    beforeEach(() => {
      cartItemDeleteAction = new DaffCartItemDelete(mockCartItem.id);
      cartItemDeleteSuccessAction = new DaffCartItemDeleteSuccess(mockCart);
    });

    describe('and the delete call to driver is successful', () => {
      it('should return a DaffCartItemDeleteSucess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          mockCart.items = [];
          driverDeleteSpy.and.returnValue(of(mockCart));
          actions$ = helpers.hot('--a', { a: cartItemDeleteAction });
          helpers.expectObservable(effects.delete$).toBe('--b', { b: cartItemDeleteSuccessAction });
        });
      });
    });

    describe('and a concurrent request is made', () => {

      it('should not cancel the first observable', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const mockCartItem2 = new DaffCartItemFactory().create();
          driverDeleteSpy.and.returnValue(helpers.cold('--a', { a: mockCart }));
          const cartItemDeleteAction2 = new DaffCartItemDelete(mockCartItem2.id);
          actions$ = helpers.hot('ab', { a: cartItemDeleteAction, b: cartItemDeleteAction2 });
          helpers.expectObservable(effects.delete$).toBe('--cd', { c: cartItemDeleteSuccessAction, d: cartItemDeleteSuccessAction });
        });
      });
    });

    describe('and the call to CartItemService fails', () => {
      it('should return a DaffCartItemDeleteFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to remove the cart item' };
          const response = helpers.cold<any>('#', {}, error);
          driverDeleteSpy.and.returnValue(response);
          const cartItemRemoveCartFailureAction = new DaffCartItemDeleteFailure([error], mockCartItem.id);
          actions$ = helpers.hot('--a', { a: cartItemDeleteAction });
          helpers.expectObservable(effects.delete$).toBe('--b', { b: cartItemRemoveCartFailureAction });
        });
      });
    });
  });

  describe('when CartItemDeleteOutOfStockAction is triggered', () => {
    let cartItemDeleteOutOfStockAction: DaffCartItemDeleteOutOfStock;
    let cartItemDeleteOutOfStockSuccessAction: DaffCartItemDeleteOutOfStockSuccess;
    let outOfStockCartItems: DaffOperationEntity<DaffCartItem>[];

    beforeEach(() => {
      cartItemDeleteOutOfStockAction = new DaffCartItemDeleteOutOfStock();
      cartItemDeleteOutOfStockSuccessAction = new DaffCartItemDeleteOutOfStockSuccess(mockCart);
      driverDeleteSpy.and.returnValue(of(mockCart));
    });

    describe('and there are no out of stock items in the cart', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemListSuccess([]));
        store.dispatch(new DaffCartLoadSuccess(mockCart));
      });

      it('should dispatch success with the current cart', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: cartItemDeleteOutOfStockAction });
          helpers.expectObservable(effects.removeOutOfStock$).toBe('--a', { a: cartItemDeleteOutOfStockSuccessAction });
        });
      });
    });

    describe('and there are out of stock items in the cart', () => {
      beforeEach(() => {
        outOfStockCartItems = statefulCartItemFactory.createMany(2, {
          in_stock: false,
        });
        store.dispatch(new DaffCartItemListSuccess(outOfStockCartItems));
      });

      it('should send a delete request for each out of stock cart item', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: cartItemDeleteOutOfStockAction });

          effects.removeOutOfStock$.subscribe(() => {
            outOfStockCartItems.forEach(item => {
              expect(driverDeleteSpy).toHaveBeenCalledWith(mockCart.id, item.id);
            });
          });
        });
      });

      describe('and the delete calls to the driver is successful', () => {
        beforeEach(() => {
          mockCart.items = [];
          driverDeleteSpy.and.returnValue(of(mockCart));
        });

        it('should return a DaffCartItemDeleteOutOfStockSucess action', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            actions$ = helpers.hot('--a', { a: cartItemDeleteOutOfStockAction });
            helpers.expectObservable(effects.removeOutOfStock$).toBe('--b', { b: cartItemDeleteOutOfStockSuccessAction });
          });
        });
      });

      describe('and the call to CartItemService fails', () => {
        it('should return a DaffCartItemDeleteOutOfStockFailure action', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to remove the cart item' };
            const response = helpers.cold<any>('#', {}, error);
            driverDeleteSpy.and.returnValue(response);
            const cartItemRemoveCartFailureAction = new DaffCartItemDeleteOutOfStockFailure([error]);
            actions$ = helpers.hot('--a', { a: cartItemDeleteOutOfStockAction });
            helpers.expectObservable(effects.removeOutOfStock$).toBe('--(b|)', { b: cartItemRemoveCartFailureAction });
          });
        });
      });
    });
  });
});
