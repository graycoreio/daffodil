import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  combineReducers,
  Store,
  StoreModule,
} from '@ngrx/store';
import {
  hot,
  cold,
} from 'jasmine-marbles';
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
  DaffStatefulCartItem,
  DaffCartItemStateReset,
  DaffCartItemStateDebounceTime,
  DaffCartItemDeleteOutOfStock,
  DaffCartItemDeleteOutOfStockFailure,
  DaffCartItemDeleteOutOfStockSuccess,
  daffCartReducers,
  DAFF_CART_STORE_FEATURE_KEY,
} from '@daffodil/cart/state';
import { DaffStatefulCartItemFactory } from '@daffodil/cart/state/testing';
import {
  DaffCartFactory,
  DaffCartItemFactory,
} from '@daffodil/cart/testing';
import { DaffStateError } from '@daffodil/core/state';

import { DaffCartLoadSuccess } from '../actions/public_api';
import { DaffCartItemEffects } from './cart-item.effects';

describe('@daffodil/cart/state | DaffCartItemEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartItemEffects<DaffStatefulCartItem, DaffCartItemInput, DaffCart>;
  let store: Store;

  let mockCart: DaffCart;
  let mockCartItem: DaffStatefulCartItem;
  let mockCartItemInput: DaffCartItemInput;

  let cartFactory: DaffCartFactory;
  let statefulCartItemFactory: DaffStatefulCartItemFactory;

  let daffCartItemDriver: DaffCartItemServiceInterface;
  let daffCartStorageService: DaffCartStorageService;

  let driverGetSpy: jasmine.Spy;
  let driverAddSpy: jasmine.Spy;
  let driverListSpy: jasmine.Spy;
  let driverUpdateSpy: jasmine.Spy;
  let driverDeleteSpy: jasmine.Spy;
  let getCartIdSpy: jasmine.Spy;
  let cartResolverSpy: jasmine.SpyObj<DaffCartDriverResolveService>;

  beforeEach(() => {
    cartResolverSpy = jasmine.createSpyObj('DaffCartDriverResolveService', ['getCartIdOrFail']);

    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
        StoreModule.forRoot({
          [DAFF_CART_STORE_FEATURE_KEY]: combineReducers(daffCartReducers),
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

    effects = TestBed.inject<DaffCartItemEffects<
    DaffStatefulCartItem,
    DaffCartItemInput,
    DaffCart
    >>(DaffCartItemEffects);
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
    let expected;
    const cartItemListAction = new DaffCartItemList();

    describe('and the call to CartItemService is successful', () => {
      beforeEach(() => {
        driverListSpy.and.returnValue(of([mockCartItem]));
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
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to list cart items' };
        const response = cold('#', {}, error);
        driverListSpy.and.returnValue(response);
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
      cartItemLoadAction = new DaffCartItemLoad(mockCartItem.id);
    });

    describe('and the call to CartItemService is successful', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(of(mockCartItem));
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
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load cart item' };
        const response = cold('#', {}, error);
        driverGetSpy.and.returnValue(response);
        const cartItemLoadFailureAction = new DaffCartItemLoadFailure(error, mockCartItem.id);
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

    describe('and the cart ID retrieval succeeds', () => {
      beforeEach(() => {
        cartResolverSpy.getCartIdOrFail.and.returnValue(of(mockCart.id));
      });

      describe('and the call to CartItemService is successful', () => {
        beforeEach(() => {
          mockCart.items.push(mockCartItem);
          driverAddSpy.and.returnValue(of(mockCart));
          const cartItemAddSuccessAction = new DaffCartItemAddSuccess(mockCart);
          actions$ = hot('--a', { a: cartItemAddAction });
          expected = cold('--b', { b: cartItemAddSuccessAction });
        });

        it('should dispatch a CartItemAddSuccess action', () => {
          expect(effects.add$).toBeObservable(expected);
        });
      });

      describe('and the call to CartItemService fails', () => {
        beforeEach(() => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to add cart item' };
          const response = cold('#', {}, error);
          driverAddSpy.and.returnValue(response);
          const cartItemAddFailureAction = new DaffCartItemAddFailure(error);
          actions$ = hot('--a', { a: cartItemAddAction });
          expected = cold('--b', { b: cartItemAddFailureAction });
        });

        it('should dispatch a CartItemAddFailure action', () => {
          expect(effects.add$).toBeObservable(expected);
        });
      });
    });

    describe('and the cart ID retrieval fails', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to add cart item' };
        const cartItemAddFailureAction = new DaffCartItemAddFailure(error);
        actions$ = hot('--a', { a: cartItemAddAction });
        expected = cold('--(b|)', { b: cartItemAddFailureAction });
        cartResolverSpy.getCartIdOrFail.and.returnValue(throwError(() => error));
      });

      it('should not try to add the item', () => {
        expect(driverAddSpy).not.toHaveBeenCalled();
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
    let cartItemUpdateSuccessAction;

    beforeEach(() => {
      qty = mockCartItem.qty + 1;
      mockCartItem.qty = qty;
      cartItemUpdateAction = new DaffCartItemUpdate(mockCartItem.id, mockCartItem);
      cartItemUpdateSuccessAction = new DaffCartItemUpdateSuccess(mockCart, mockCartItem.id);
    });

    describe('and the call to CartItemService is successful', () => {
      beforeEach(() => {
        driverUpdateSpy.and.returnValue(of(mockCart));
        actions$ = hot('--a', { a: cartItemUpdateAction });
        expected = cold('--b', { b: cartItemUpdateSuccessAction });
      });

      it('should dispatch a CartItemUpdateSuccess action', () => {
        expect(effects.update$).toBeObservable(expected);
      });
    });

    describe('and a concurrent request is made', () => {

      it('should not cancel the first observable', () => {
        const mockCartItem2 = new DaffCartItemFactory().create();
        driverUpdateSpy.and.returnValue(cold('--a', { a: mockCart }));
        const cartItemUpdateAction2 = new DaffCartItemUpdate(mockCartItem2.id, mockCartItem2);
        const cartItemUpdateSuccessAction2 = new DaffCartItemUpdateSuccess(mockCart, mockCartItem2.id);
        actions$ = hot('ab', { a: cartItemUpdateAction, b: cartItemUpdateAction2 });
        expected = cold('--cd', { c: cartItemUpdateSuccessAction, d: cartItemUpdateSuccessAction2 });

        expect(effects.update$).toBeObservable(expected);
      });
    });

    describe('and the call to CartItemService fails', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to update cart item' };
        const response = cold('#', {}, error);
        driverUpdateSpy.and.returnValue(response);
        const cartItemUpdateFailureAction = new DaffCartItemUpdateFailure(error, mockCartItem.id);
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
            const cartItemAddSuccess = new DaffCartItemAddSuccess(mockCart);
            const cartItemUpdateAction = new DaffCartItemUpdate(mockCartItem.id, mockCartItem);
            const cartItemUpdateSuccessAction = new DaffCartItemUpdateSuccess(mockCart, mockCartItem.id);
            const shopCartItemReset = new DaffCartItemStateReset();
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
          const shopCartItemReset = new DaffCartItemStateReset();
          actions$ = helpers.hot('a', { a: cartItemUpdateSuccess });
          expectedObservable = { a: shopCartItemReset };

          helpers.expectObservable(effects.resetCartItemStateAfterChange$).toBe(expectedMarble, expectedObservable);
        });
      });
    });
  });

  describe('when CartItemDeleteAction is triggered', () => {
    let expected;
    let cartItemDeleteAction;
    let cartItemDeleteSuccessAction;

    beforeEach(() => {
      cartItemDeleteAction = new DaffCartItemDelete(mockCartItem.id);
      cartItemDeleteSuccessAction = new DaffCartItemDeleteSuccess(mockCart);
    });

    describe('and the delete call to driver is successful', () => {
      beforeEach(() => {
        mockCart.items = [];
        driverDeleteSpy.and.returnValue(of(mockCart));
        actions$ = hot('--a', { a: cartItemDeleteAction });
        expected = cold('--b', { b: cartItemDeleteSuccessAction });
      });

      it('should return a DaffCartItemDeleteSucess action', () => {
        expect(effects.delete$).toBeObservable(expected);
      });
    });

    describe('and a concurrent request is made', () => {

      it('should not cancel the first observable', () => {
        const mockCartItem2 = new DaffCartItemFactory().create();
        driverDeleteSpy.and.returnValue(cold('--a', { a: mockCart }));
        const cartItemDeleteAction2 = new DaffCartItemDelete(mockCartItem2.id);
        actions$ = hot('ab', { a: cartItemDeleteAction, b: cartItemDeleteAction2 });
        expected = cold('--cd', { c: cartItemDeleteSuccessAction, d: cartItemDeleteSuccessAction });

        expect(effects.delete$).toBeObservable(expected);
      });
    });

    describe('and the call to CartItemService fails', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to remove the cart item' };
        const response = cold('#', {}, error);
        driverDeleteSpy.and.returnValue(response);
        const cartItemRemoveCartFailureAction = new DaffCartItemDeleteFailure(error, mockCartItem.id);
        actions$ = hot('--a', { a: cartItemDeleteAction });
        expected = cold('--b', { b: cartItemRemoveCartFailureAction });
      });

      it('should return a DaffCartItemDeleteFailure action', () => {
        expect(effects.delete$).toBeObservable(expected);
      });
    });
  });

  describe('when CartItemDeleteOutOfStockAction is triggered', () => {
    let expected;
    let cartItemDeleteOutOfStockAction: DaffCartItemDeleteOutOfStock;
    let cartItemDeleteOutOfStockSuccessAction: DaffCartItemDeleteOutOfStockSuccess;
    let outOfStockCartItems: DaffStatefulCartItem[];

    beforeEach(() => {
      cartItemDeleteOutOfStockAction = new DaffCartItemDeleteOutOfStock();
      cartItemDeleteOutOfStockSuccessAction = new DaffCartItemDeleteOutOfStockSuccess(mockCart);
      driverDeleteSpy.and.returnValue(of(mockCart));
      actions$ = hot('--a', { a: cartItemDeleteOutOfStockAction });
    });

    describe('and there are no out of stock items in the cart', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemListSuccess([]));
        store.dispatch(new DaffCartLoadSuccess(mockCart));
      });

      it('should dispatch success with the current cart', () => {
        expected = cold('--a', { a: cartItemDeleteOutOfStockSuccessAction });
        expect(effects.removeOutOfStock$).toBeObservable(expected);
      });
    });

    describe('and there are out of stock items in the cart', () => {
      beforeEach(() => {
        outOfStockCartItems = statefulCartItemFactory.createMany(2, {
          in_stock: false,
        });
        store.dispatch(new DaffCartItemListSuccess(outOfStockCartItems));
      });

      it('should send a delete request for each out of stock cart item', () =>
        effects.removeOutOfStock$.subscribe(() => {
          outOfStockCartItems.forEach(item => {
            expect(driverDeleteSpy).toHaveBeenCalledWith(mockCart.id, item.id);
          });
        }),
      );

      describe('and the delete calls to the driver is successful', () => {
        beforeEach(() => {
          mockCart.items = [];
          driverDeleteSpy.and.returnValue(of(mockCart));
        });

        it('should return a DaffCartItemDeleteOutOfStockSucess action', () => {
          expected = cold('--b', { b: cartItemDeleteOutOfStockSuccessAction });
          expect(effects.removeOutOfStock$).toBeObservable(expected);
        });
      });

      describe('and the call to CartItemService fails', () => {
        beforeEach(() => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to remove the cart item' };
          const response = cold('#', {}, error);
          driverDeleteSpy.and.returnValue(response);
          const cartItemRemoveCartFailureAction = new DaffCartItemDeleteOutOfStockFailure(error);
          actions$ = hot('--a', { a: cartItemDeleteOutOfStockAction });
          expected = cold('--(b|)', { b: cartItemRemoveCartFailureAction });
        });

        it('should return a DaffCartItemDeleteOutOfStockFailure action', () => {
          expect(effects.removeOutOfStock$).toBeObservable(expected);
        });
      });
    });
  });
});
