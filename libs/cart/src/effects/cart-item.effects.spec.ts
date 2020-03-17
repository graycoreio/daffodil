import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
  DaffCart,
  DaffCartItem,
  DaffCartItemInput,
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartItemFactory
} from '@daffodil/cart/testing';

import { DaffCartItemEffects } from './cart-item.effects';
import {
  DaffCartItemLoad,
  DaffCartItemLoadSuccess,
  DaffCartItemLoadFailure,
  DaffCartItemDelete,
  DaffCartItemDeleteSuccess,
  DaffCartItemDeleteFailure,
  DaffCartItemUpdate,
  DaffCartItemUpdateSuccess,
  DaffCartItemUpdateFailure,
  DaffCartItemList,
  DaffCartItemListSuccess,
  DaffCartItemListFailure,
  DaffCartItemAdd,
  DaffCartItemAddSuccess,
  DaffCartItemAddFailure,
} from '../actions/public_api';
import { DaffCartStorageService } from '../storage/cart-storage.service';
import { DaffCartItemServiceInterface, DaffCartItemDriver } from '../drivers/interfaces/cart-item-service.interface';

describe('Daffodil | Cart | CartItemEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartItemEffects<DaffCartItem, DaffCartItemInput, DaffCart>;

  let mockCart: DaffCart;
  let mockCartItem: DaffCartItem;
  let mockCartItemInput: DaffCartItemInput;

  let cartFactory: DaffCartFactory;
  let cartPaymentFactory: DaffCartItemFactory;

  let daffCartItemDriverSpy: jasmine.SpyObj<DaffCartItemServiceInterface<DaffCartItem, DaffCartItemInput, DaffCart>>;

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
        {
          provide: DaffCartStorageService,
          useValue: jasmine.createSpyObj('DaffCartStorageService', ['getCartId'])
        }
      ]
    });

    effects = TestBed.get<DaffCartItemEffects<DaffCartItem, DaffCartItemInput, DaffCart>>(DaffCartItemEffects);

    daffCartItemDriverSpy = TestBed.get<DaffCartItemServiceInterface<DaffCartItem, DaffCartItemInput, DaffCart>>(DaffCartItemDriver);
    daffCartStorageSpy = TestBed.get(DaffCartStorageService);

    cartFactory = TestBed.get<DaffCartFactory>(DaffCartFactory);
    cartPaymentFactory = TestBed.get<DaffCartItemFactory>(DaffCartItemFactory);

    mockCart = cartFactory.create();
    mockCartItem = cartPaymentFactory.create();
    mockCartItemInput = {
      productId: '3',
      qty: 3
    };

    mockCart.items = [mockCartItem];

    daffCartStorageSpy.getCartId.and.returnValue(String(mockCart.id));
  });

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
      beforeEach(() => {
        mockCart.items.push(mockCartItem);
        daffCartItemDriverSpy.add.and.returnValue(of(mockCart));
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
        daffCartItemDriverSpy.update.and.returnValue(of(mockCart));
        const cartItemUpdateSuccessAction = new DaffCartItemUpdateSuccess(mockCart);
        actions$ = hot('--a', { a: cartItemUpdateAction });
        expected = cold('--b', { b: cartItemUpdateSuccessAction });
      });

      it('should dispatch a CartItemUpdateSuccess action', () => {
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
