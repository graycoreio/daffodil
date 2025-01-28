import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffCartOrderResult,
  DaffCartPaymentMethodIdMap,
  DaffCart,
  DaffCartTotalTypeEnum,
  DaffCartPaymentMethod,
  DaffConfigurableCartItem,
  DaffCompositeCartItem,
  DaffCartItemInputType,
} from '@daffodil/cart';
import {
  daffCartReducerInitialState,
  DaffCartReducersState,
  DaffCartLoading,
  DaffCartErrors,
  daffCartReducers,
  DaffCartOperationType,
  DaffCartLoadSuccess,
  DaffCartLoad,
  DaffCartClear,
  DaffCartItemLoad,
  DaffCartItemDelete,
  DaffCartBillingAddressLoad,
  DaffCartBillingAddressUpdate,
  DaffCartShippingAddressLoad,
  DaffCartShippingAddressUpdate,
  DaffCartShippingInformationLoad,
  DaffCartShippingInformationDelete,
  DaffCartShippingMethodsLoad,
  DaffCartPaymentLoad,
  DaffCartPaymentRemove,
  DaffCartPaymentMethodsLoad,
  DaffCartCouponList,
  DaffCartCouponRemoveAll,
  DaffCartLoadFailure,
  DaffCartItemLoadFailure,
  DaffCartBillingAddressLoadFailure,
  DaffCartShippingAddressLoadFailure,
  DaffCartShippingInformationLoadFailure,
  DaffCartShippingMethodsLoadFailure,
  DaffCartPaymentLoadFailure,
  DaffCartPaymentMethodsLoadFailure,
  DaffCartCouponListFailure,
  DaffCartCreateSuccess,
  DaffCartItemListSuccess,
  DaffCartBillingAddressLoadSuccess,
  DaffCartShippingAddressLoadSuccess,
  DaffCartPaymentLoadSuccess,
  DaffCartShippingInformationLoadSuccess,
  DaffCartShippingMethodsLoadSuccess,
  DaffCartPaymentMethodsLoadSuccess,
  DaffCartPlaceOrder,
  DaffCartPlaceOrderFailure,
  DaffCartPlaceOrderSuccess,
  DaffCartItemAdd,
  DaffCartResolveState,
  DAFF_CART_STORE_FEATURE_KEY,
  DaffCartStateRootSlice,
  DaffCartItemUpdateFailure,
  daffCartRetrivalActions,
  daffCartItemEntitiesRetrievalActionsReducerFactory,
  daffCartRetrievalActionsReducerFactory,
  DaffCartItemUpdate,
} from '@daffodil/cart/state';
import { DaffStatefulCartItemFactory } from '@daffodil/cart/state/testing';
import {
  DaffCartFactory,
  DaffCartAddressFactory,
  DaffCartPaymentFactory,
  DaffCartShippingRateFactory,
  DaffConfigurableCartItemFactory,
  DaffCompositeCartItemFactory,
} from '@daffodil/cart/testing';
import {
  DaffState,
  daffComposeReducers,
  daffIdentityReducer,
} from '@daffodil/core/state';
import { DaffStateError } from '@daffodil/core/state';

import { DaffCartFacade } from './cart.facade';

describe('DaffCartFacade', () => {
  let store: Store<DaffCartStateRootSlice>;
  let facade: DaffCartFacade;
  let cartFactory: DaffCartFactory;
  let statefulCartItemFactory: DaffStatefulCartItemFactory;
  let configurableCartItemFactory: DaffConfigurableCartItemFactory;
  let compositeCartItemFactory: DaffCompositeCartItemFactory;
  let cartAddressFactory: DaffCartAddressFactory;
  let paymentFactory: DaffCartPaymentFactory;
  let shippingMethodFactory: DaffCartShippingRateFactory;

  let loading: DaffCartLoading;
  let errors: DaffCartErrors;
  let mockCartOrderResult: DaffCartOrderResult;
  const paymentMethod = 'so dumb';
  const paymentId = 'even dumber';

  beforeEach(() => {
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
      providers: [
        DaffCartFacade,
        {
          provide: DaffCartPaymentMethodIdMap,
          useValue: {
            [paymentMethod]: paymentId,
          },
        },
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffCartFacade);
    cartFactory = TestBed.inject(DaffCartFactory);
    statefulCartItemFactory = TestBed.inject(DaffStatefulCartItemFactory);
    configurableCartItemFactory = TestBed.inject(DaffConfigurableCartItemFactory);
    compositeCartItemFactory = TestBed.inject(DaffCompositeCartItemFactory);
    cartAddressFactory = TestBed.inject(DaffCartAddressFactory);
    paymentFactory = TestBed.inject(DaffCartPaymentFactory);
    shippingMethodFactory = TestBed.inject(DaffCartShippingRateFactory);

    loading = {
      [DaffCartOperationType.Cart]: DaffState.Stable,
      [DaffCartOperationType.Item]: DaffState.Stable,
      [DaffCartOperationType.ShippingAddress]: DaffState.Stable,
      [DaffCartOperationType.BillingAddress]: DaffState.Stable,
      [DaffCartOperationType.ShippingInformation]: DaffState.Stable,
      [DaffCartOperationType.ShippingMethods]: DaffState.Stable,
      [DaffCartOperationType.Payment]: DaffState.Stable,
      [DaffCartOperationType.PaymentMethods]: DaffState.Stable,
      [DaffCartOperationType.Coupon]: DaffState.Stable,
    };
    errors = {
      [DaffCartOperationType.Cart]: [],
      [DaffCartOperationType.Item]: [],
      [DaffCartOperationType.ShippingAddress]: [],
      [DaffCartOperationType.BillingAddress]: [],
      [DaffCartOperationType.ShippingInformation]: [],
      [DaffCartOperationType.ShippingMethods]: [],
      [DaffCartOperationType.Payment]: [],
      [DaffCartOperationType.PaymentMethods]: [],
      [DaffCartOperationType.Coupon]: [],
    };
    mockCartOrderResult = {
      orderId: 'orderId',
      cartId: 'cartId',
    };
  });

  it('should be created', () => {
    const service: DaffCartFacade<DaffCart> = TestBed.inject(DaffCartFacade);
    expect(service).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(<any>store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('resolved$', () => {
    it('should be the resolved state', () => {
      const expected = cold('a', { a: DaffCartResolveState.Default });
      expect(facade.resolved$).toBeObservable(expected);
    });
  });

  describe('cart$', () => {
    it('should initially be cart with no defined properties', () => {
      const expected = cold('a', { a: daffCartReducerInitialState.cart });
      expect(facade.cart$).toBeObservable(expected);
    });

    it('should be the cart upon a successful load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.cart$).toBeObservable(expected);
    });
  });

  describe('errors$', () => {
    it('should initially be an empty errors object', () => {
      const expected = cold('a', { a: errors });
      expect(facade.errors$).toBeObservable(expected);
    });
  });

  describe('loadingObject$', () => {
    it('returns cart loading object state', () => {
      const expected = cold('a', { a: loading });

      expect(facade.loadingObject$).toBeObservable(expected);
    });
  });

  describe('featureLoading$', () => {
    describe('when all the cart operations have completed', () => {
      it('should return false', () => {
        const expected = cold('a', { a: false });

        expect(facade.featureLoading$).toBeObservable(expected);
      });
    });
  });

  describe('featureResolving$', () => {
    describe('when all the cart operations have completed', () => {
      it('should return false', () => {
        const expected = cold('a', { a: false });

        expect(facade.featureResolving$).toBeObservable(expected);
      });
    });
  });

  describe('featureMutating$', () => {
    describe('when all the cart operations have completed', () => {
      it('should return false', () => {
        const expected = cold('a', { a: false });

        expect(facade.featureMutating$).toBeObservable(expected);
      });
    });
  });

  describe('loading$', () => {
    describe('when the cart operations have completed', () => {
      it('should return false', () => {
        const expected = cold('a', { a: false });

        expect(facade.loading$).toBeObservable(expected);
      });
    });

    describe('when the cart operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartLoad());
      });

      it('should return true', () => {
        const expected = cold('a', { a: true });

        expect(facade.loading$).toBeObservable(expected);
      });
    });
  });

  describe('resolving$', () => {
    describe('when the cart operations have completed', () => {
      it('should return false', () => {
        const expected = cold('a', { a: false });

        expect(facade.resolving$).toBeObservable(expected);
      });
    });

    describe('when the cart resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartLoad());
      });

      it('should return true', () => {
        const expected = cold('a', { a: true });

        expect(facade.resolving$).toBeObservable(expected);
      });
    });
  });

  describe('mutating$', () => {
    describe('when the cart operations have completed', () => {
      it('should return false', () => {
        const expected = cold('a', { a: false });

        expect(facade.mutating$).toBeObservable(expected);
      });
    });

    describe('when the cart mutations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartClear());
      });

      it('should return true', () => {
        const expected = cold('a', { a: true });

        expect(facade.mutating$).toBeObservable(expected);
      });
    });
  });

  describe('itemLoading$', () => {
    describe('when the cart item operations have completed', () => {
      it('should return false', () => {
        const expected = cold('a', { a: false });

        expect(facade.itemLoading$).toBeObservable(expected);
      });
    });

    describe('when the cart item operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartItemLoad('itemId'));
      });

      it('should return true', () => {
        const expected = cold('a', { a: true });

        expect(facade.itemLoading$).toBeObservable(expected);
      });
    });
  });

  describe('itemAdding$', () => {
    describe('when the cart item add operations have completed', () => {
      it('should return false', () => {
        const expected = cold('a', { a: false });

        expect(facade.itemAdding$).toBeObservable(expected);
      });
    });

    describe('when the cart item add operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartItemAdd({
          productId: 'productId',
          qty: 1,
          type: DaffCartItemInputType.Simple,
        }));
      });

      it('should return true', () => {
        const expected = cold('a', { a: true });

        expect(facade.itemAdding$).toBeObservable(expected);
      });
    });
  });

  describe('itemResolving$', () => {
    describe('when the cart item operations have completed', () => {
      it('should return false', () => {
        const expected = cold('a', { a: false });

        expect(facade.itemResolving$).toBeObservable(expected);
      });
    });

    describe('when the cart item resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartItemLoad('itemId'));
      });

      it('should return true', () => {
        const expected = cold('a', { a: true });

        expect(facade.itemResolving$).toBeObservable(expected);
      });
    });
  });

  describe('itemMutating$', () => {
    describe('when the cart item operations have completed', () => {
      it('should return false', () => {
        const expected = cold('a', { a: false });

        expect(facade.itemMutating$).toBeObservable(expected);
      });
    });

    describe('when the cart item mutations have not completed', () => {
      beforeEach(() => {
        const mockCartItems = statefulCartItemFactory.createMany(2);
        store.dispatch(new DaffCartItemListSuccess(mockCartItems));
        store.dispatch(new DaffCartItemUpdate(mockCartItems[0].id, { qty: 2 }));
      });

      it('should return true', () => {
        const expected = cold('a', { a: true });

        expect(facade.itemMutating$).toBeObservable(expected);
      });
    });
  });

  describe('billingAddressLoading$', () => {
    describe('when the cart billing operations have completed', () => {
      it('should return false state', () => {
        const expected = cold('a', { a: false });

        expect(facade.billingAddressLoading$).toBeObservable(expected);
      });
    });

    describe('when the cart billing operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartBillingAddressLoad());
      });

      it('should return true state', () => {
        const expected = cold('a', { a: true });

        expect(facade.billingAddressLoading$).toBeObservable(expected);
      });
    });
  });

  describe('billingAddressResolving$', () => {
    describe('when the cart billing operations have completed', () => {
      it('should return false state', () => {
        const expected = cold('a', { a: false });

        expect(facade.billingAddressResolving$).toBeObservable(expected);
      });
    });

    describe('when the cart billing resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartBillingAddressLoad());
      });

      it('should return true state', () => {
        const expected = cold('a', { a: true });

        expect(facade.billingAddressResolving$).toBeObservable(expected);
      });
    });
  });

  describe('billingAddressMutating$', () => {
    describe('when the cart billing operations have completed', () => {
      it('should return false state', () => {
        const expected = cold('a', { a: false });

        expect(facade.billingAddressMutating$).toBeObservable(expected);
      });
    });

    describe('when the cart billing mutations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartBillingAddressUpdate({}));
      });

      it('should return true state', () => {
        const expected = cold('a', { a: true });

        expect(facade.billingAddressMutating$).toBeObservable(expected);
      });
    });
  });

  describe('shippingAddressLoading$', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        const expected = cold('a', { a: false });

        expect(facade.shippingAddressLoading$).toBeObservable(expected);
      });
    });

    describe('when the cart shipping operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingAddressLoad());
      });

      it('should return true state', () => {
        const expected = cold('a', { a: true });

        expect(facade.shippingAddressLoading$).toBeObservable(expected);
      });
    });
  });

  describe('shippingAddressResolving$', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        const expected = cold('a', { a: false });

        expect(facade.shippingAddressResolving$).toBeObservable(expected);
      });
    });

    describe('when the cart shipping resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingAddressLoad());
      });

      it('should return true state', () => {
        const expected = cold('a', { a: true });

        expect(facade.shippingAddressResolving$).toBeObservable(expected);
      });
    });
  });

  describe('shippingAddressMutating$', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        const expected = cold('a', { a: false });

        expect(facade.shippingAddressMutating$).toBeObservable(expected);
      });
    });

    describe('when the cart shipping mutations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingAddressUpdate({}));
      });

      it('should return true state', () => {
        const expected = cold('a', { a: true });

        expect(facade.shippingAddressMutating$).toBeObservable(expected);
      });
    });
  });

  describe('shippingInformationLoading$', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        const expected = cold('a', { a: false });

        expect(facade.shippingInformationLoading$).toBeObservable(expected);
      });
    });

    describe('when the cart shipping operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingInformationLoad());
      });

      it('should return true state', () => {
        const expected = cold('a', { a: true });

        expect(facade.shippingInformationLoading$).toBeObservable(expected);
      });
    });
  });

  describe('shippingInformationResolving$', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        const expected = cold('a', { a: false });

        expect(facade.shippingInformationResolving$).toBeObservable(expected);
      });
    });

    describe('when the cart shipping resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingInformationLoad());
      });

      it('should return true state', () => {
        const expected = cold('a', { a: true });

        expect(facade.shippingInformationResolving$).toBeObservable(expected);
      });
    });
  });

  describe('shippingInformationMutating$', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        const expected = cold('a', { a: false });

        expect(facade.shippingInformationMutating$).toBeObservable(expected);
      });
    });

    describe('when the cart shipping mutations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingInformationDelete());
      });

      it('should return true state', () => {
        const expected = cold('a', { a: true });

        expect(facade.shippingInformationMutating$).toBeObservable(expected);
      });
    });
  });

  describe('shippingMethodsLoading$', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        const expected = cold('a', { a: false });

        expect(facade.shippingMethodsLoading$).toBeObservable(expected);
      });
    });

    describe('when the cart shipping operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingMethodsLoad());
      });

      it('should return true state', () => {
        const expected = cold('a', { a: true });

        expect(facade.shippingMethodsLoading$).toBeObservable(expected);
      });
    });
  });

  describe('shippingMethodsResolving$', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        const expected = cold('a', { a: false });

        expect(facade.shippingMethodsResolving$).toBeObservable(expected);
      });
    });

    describe('when the cart shipping resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingMethodsLoad());
      });

      it('should return true state', () => {
        const expected = cold('a', { a: true });

        expect(facade.shippingMethodsResolving$).toBeObservable(expected);
      });
    });
  });

  describe('paymentLoading$', () => {
    describe('when the cart payment operations have completed', () => {
      it('should return false', () => {
        const expected = cold('a', { a: false });

        expect(facade.paymentLoading$).toBeObservable(expected);
      });
    });

    describe('when the cart payment operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPaymentLoad());
      });

      it('should return true', () => {
        const expected = cold('a', { a: true });

        expect(facade.paymentLoading$).toBeObservable(expected);
      });
    });
  });

  describe('paymentResolving$', () => {
    describe('when the cart payment operations have completed', () => {
      it('should return false', () => {
        const expected = cold('a', { a: false });

        expect(facade.paymentResolving$).toBeObservable(expected);
      });
    });

    describe('when the cart payment resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPaymentLoad());
      });

      it('should return true', () => {
        const expected = cold('a', { a: true });

        expect(facade.paymentResolving$).toBeObservable(expected);
      });
    });
  });

  describe('paymentMutating$', () => {
    describe('when the cart payment operations have completed', () => {
      it('should return false', () => {
        const expected = cold('a', { a: false });

        expect(facade.paymentMutating$).toBeObservable(expected);
      });
    });

    describe('when the cart payment mutations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPaymentRemove());
      });

      it('should return true', () => {
        const expected = cold('a', { a: true });

        expect(facade.paymentMutating$).toBeObservable(expected);
      });
    });
  });

  describe('paymentMethodsLoading$', () => {
    describe('when the cart payment operations have completed', () => {
      it('should return false state', () => {
        const expected = cold('a', { a: false });

        expect(facade.paymentMethodsLoading$).toBeObservable(expected);
      });
    });

    describe('when the cart payment operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPaymentMethodsLoad());
      });

      it('should return true state', () => {
        const expected = cold('a', { a: true });

        expect(facade.paymentMethodsLoading$).toBeObservable(expected);
      });
    });
  });

  describe('paymentMethodsResolving$', () => {
    describe('when the cart payment operations have completed', () => {
      it('should return false state', () => {
        const expected = cold('a', { a: false });

        expect(facade.paymentMethodsResolving$).toBeObservable(expected);
      });
    });

    describe('when the cart payment resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPaymentMethodsLoad());
      });

      it('should return true state', () => {
        const expected = cold('a', { a: true });

        expect(facade.paymentMethodsResolving$).toBeObservable(expected);
      });
    });
  });

  describe('couponLoading$', () => {
    describe('when the cart coupon operations have completed', () => {
      it('should return false', () => {
        const expected = cold('a', { a: false });

        expect(facade.couponLoading$).toBeObservable(expected);
      });
    });

    describe('when the cart coupon operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartCouponList());
      });

      it('should return true', () => {
        const expected = cold('a', { a: true });

        expect(facade.couponLoading$).toBeObservable(expected);
      });
    });
  });

  describe('couponResolving$', () => {
    describe('when the cart coupon operations have completed', () => {
      it('should return false', () => {
        const expected = cold('a', { a: false });

        expect(facade.couponResolving$).toBeObservable(expected);
      });
    });

    describe('when the cart coupon resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartCouponList());
      });

      it('should return true', () => {
        const expected = cold('a', { a: true });

        expect(facade.couponResolving$).toBeObservable(expected);
      });
    });
  });

  describe('couponMutating$', () => {
    describe('when the cart coupon operations have completed', () => {
      it('should return false', () => {
        const expected = cold('a', { a: false });

        expect(facade.couponMutating$).toBeObservable(expected);
      });
    });

    describe('when the cart coupon mutations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartCouponRemoveAll());
      });

      it('should return true', () => {
        const expected = cold('a', { a: true });

        expect(facade.couponMutating$).toBeObservable(expected);
      });
    });
  });

  describe('cartErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.cartErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed cart load', () => {
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      const expected = cold('a', { a: [error]});
      facade.dispatch(new DaffCartLoadFailure([error]));
      expect(facade.cartErrors$).toBeObservable(expected);
    });
  });

  describe('itemErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.itemErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed item load', () => {
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      const expected = cold('a', { a: [error]});
      facade.dispatch(new DaffCartItemLoadFailure([error], 'itemId'));
      expect(facade.itemErrors$).toBeObservable(expected);
    });
  });

  describe('billingAddressErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.billingAddressErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed billing address load', () => {
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      const expected = cold('a', { a: [error]});
      facade.dispatch(new DaffCartBillingAddressLoadFailure([error]));
      expect(facade.billingAddressErrors$).toBeObservable(expected);
    });
  });

  describe('shippingAddressErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.shippingAddressErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed shipping address load', () => {
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      const expected = cold('a', { a: [error]});
      facade.dispatch(new DaffCartShippingAddressLoadFailure([error]));
      expect(facade.shippingAddressErrors$).toBeObservable(expected);
    });
  });

  describe('shippingInformationErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.shippingInformationErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed shipping information load', () => {
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      const expected = cold('a', { a: [error]});
      facade.dispatch(new DaffCartShippingInformationLoadFailure([error]));
      expect(facade.shippingInformationErrors$).toBeObservable(expected);
    });
  });

  describe('shippingMethodsErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.shippingMethodsErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed shipping methods load', () => {
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      const expected = cold('a', { a: [error]});
      facade.dispatch(new DaffCartShippingMethodsLoadFailure([error]));
      expect(facade.shippingMethodsErrors$).toBeObservable(expected);
    });
  });

  describe('paymentErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.paymentErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed payment load', () => {
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      const expected = cold('a', { a: [error]});
      facade.dispatch(new DaffCartPaymentLoadFailure([error]));
      expect(facade.paymentErrors$).toBeObservable(expected);
    });
  });

  describe('paymentMethodsErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.paymentMethodsErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed payment methods load', () => {
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      const expected = cold('a', { a: [error]});
      facade.dispatch(new DaffCartPaymentMethodsLoadFailure([error]));
      expect(facade.paymentMethodsErrors$).toBeObservable(expected);
    });
  });

  describe('couponErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.couponErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed coupon list', () => {
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      const expected = cold('a', { a: [error]});
      facade.dispatch(new DaffCartCouponListFailure([error]));
      expect(facade.couponErrors$).toBeObservable(expected);
    });
  });

  describe('itemEntities$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.itemEntities$).toBeObservable(expected);
    });

    it('should be the cart items upon a successful cart item list', () => {
      const statefulCartItems = statefulCartItemFactory.createMany(2, { daffState: <any>jasmine.anything() });
      const expected = cold('a', { a: statefulCartItems });
      facade.dispatch(new DaffCartItemListSuccess(statefulCartItems));
      expect(facade.itemEntities$).toBeObservable(expected);
    });
  });

  describe('totalItems$', () => {
    it('should initially be zero', () => {
      const expected = cold('a', { a: 0 });
      expect(facade.totalItems$).toBeObservable(expected);
    });

    it('should be the total number of cart items upon a successful cart item list', () => {
      const statefulCartItems = statefulCartItemFactory.createMany(2, { daffState: <any>jasmine.anything() });
      const expected = cold('a', { a: statefulCartItems.reduce((acc, item) => acc + item.qty, 0) });
      facade.dispatch(new DaffCartItemListSuccess(statefulCartItems));
      expect(facade.totalItems$).toBeObservable(expected);
    });
  });

  describe('hasOutOfStockItems$', () => {

    it('should return whether or not the cart has out of stock items', () => {
      const statefulCartItems = statefulCartItemFactory.createMany(2, { daffState: <any>jasmine.anything() });
      const expected = cold('a', { a: false });
      facade.dispatch(new DaffCartItemListSuccess(statefulCartItems));
      expect(facade.hasOutOfStockItems$).toBeObservable(expected);
    });
  });

  describe('outOfStockItems$', () => {
    it('should return out of stock items', () => {
      const statefulCartItems = statefulCartItemFactory.createMany(2, {
        in_stock: false,
        daffState: <any>jasmine.anything(),
      });
      const expected = cold('a', { a: statefulCartItems });
      facade.dispatch(new DaffCartItemListSuccess(statefulCartItems));
      expect(facade.outOfStockItems$).toBeObservable(expected);
    });
  });

  describe('inStockItems$', () => {
    it('should return in stock items', () => {
      const statefulCartItems = statefulCartItemFactory.createMany(2, {
        in_stock: true,
        daffState: <any>jasmine.anything(),
      });
      const expected = cold('a', { a: statefulCartItems });
      facade.dispatch(new DaffCartItemListSuccess(statefulCartItems));
      expect(facade.inStockItems$).toBeObservable(expected);
    });
  });

  describe('itemDictionary$', () => {
    it('should initially be an empty object', () => {
      const expected = cold('a', { a: {}});
      expect(facade.itemDictionary$).toBeObservable(expected);
    });

    it('should be the cart items upon a successful cart item list', () => {
      const statefulCartItems = statefulCartItemFactory.createMany(2, { daffState: <any>jasmine.anything() });
      const expected = cold('a', {
        a:
          statefulCartItems.reduce((acc, item) => ({
            ...acc,
            [item.id]: item,
          }), {}),
      });
      facade.dispatch(new DaffCartItemListSuccess(statefulCartItems));
      expect(facade.itemDictionary$).toBeObservable(expected);
    });
  });

  describe('paymentId$', () => {
    let mockPayment: DaffCartPaymentMethod;
    let cart: DaffCart;

    beforeEach(() => {
      cart = cartFactory.create();
      mockPayment = paymentFactory.create();
    });

    describe('when the cart does not have a payment', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartLoadSuccess({
          ...cart,
          payment: null,
        }));
      });

      it('should return null', () => {
        const expected = cold('a', { a: null });
        expect(facade.paymentId$).toBeObservable(expected);
      });
    });

    describe('when the cart does not have a payment method', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartLoadSuccess({
          ...cart,
          payment: {
            ...mockPayment,
            method: null,
          },
        }));
      });

      it('should return null', () => {
        const expected = cold('a', { a: null });
        expect(facade.paymentId$).toBeObservable(expected);
      });
    });

    describe('when the cart\'s payment method is not defined in the map', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartLoadSuccess({
          ...cart,
          payment: {
            ...mockPayment,
            method: 'not in the map',
          },
        }));
      });

      it('should return undefined', () => {
        const expected = cold('a', { a: undefined });
        expect(facade.paymentId$).toBeObservable(expected);
      });
    });

    describe('when the cart\'s payment method is defined in the map', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartLoadSuccess({
          ...cart,
          payment: {
            ...mockPayment,
            method: paymentMethod,
          },
        }));
      });

      it('should return the platform agnostic payment ID', () => {
        const expected = cold('a', { a: paymentId });
        expect(facade.paymentId$).toBeObservable(expected);
      });
    });
  });

  describe('isCartEmpty$', () => {
    it('should return whether the cart is empty', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.items.length === 0 });
      expect(facade.isCartEmpty$).toBeObservable(expected);
    });
  });

  describe('isBillingSameAsShipping$ | whether the cart\'s billing and shipping address are the same', () => {
    let cart: DaffCart;

    beforeEach(() => {
      cart = cartFactory.create({
        shipping_address: cartAddressFactory.create(),
        billing_address: cartAddressFactory.create(),
      });
    });

    describe('when the cart has a billing and shipping address', () => {
      describe('and the shipping and billing address are the same', () => {
        beforeEach(() => {
          cart.shipping_address = cart.billing_address;
          facade.dispatch(new DaffCartLoadSuccess(cart));
        });

        it('should return true', () => {
          const expected = cold('a', { a: true });

          expect(facade.isBillingSameAsShipping$).toBeObservable(expected);
        });
      });

      describe('and the shipping and billing address are not the same', () => {
        beforeEach(() => {
          cart.shipping_address.street = `${cart.shipping_address.street} ${cart.billing_address.street}`;
          facade.dispatch(new DaffCartLoadSuccess(cart));
        });

        it('should return false', () => {
          const expected = cold('a', { a: false });

          expect(facade.isBillingSameAsShipping$).toBeObservable(expected);
        });
      });
    });

    describe('when the cart does not have a shipping address', () => {
      beforeEach(() => {
        cart.shipping_address = null;
        facade.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        const expected = cold('a', { a: false });

        expect(facade.isBillingSameAsShipping$).toBeObservable(expected);
      });
    });

    describe('when the cart does not have a billing address', () => {
      beforeEach(() => {
        cart.billing_address = null;
        facade.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        const expected = cold('a', { a: false });

        expect(facade.isBillingSameAsShipping$).toBeObservable(expected);
      });
    });
  });

  describe('orderResultLoading$', () => {
    it('should initially be false', () => {
      const expected = cold('a', { a: false });
      expect(facade.orderResultLoading$).toBeObservable(expected);
    });

    describe('when there is a place order request in progress', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPlaceOrder());
      });

      it('should be true', () => {
        const expected = cold('a', { a: true });
        expect(facade.orderResultLoading$).toBeObservable(expected);
      });
    });
  });

  describe('orderResultErrors$', () => {
    it('should initially be empty', () => {
      const expected = cold('a', { a: []});
      expect(facade.orderResultErrors$).toBeObservable(expected);
    });

    describe('when a place order request has failed', () => {
      let error;

      beforeEach(() => {
        error = 'error';
        facade.dispatch(new DaffCartPlaceOrderFailure([error]));
      });

      it('should contain the error', () => {
        const expected = cold('a', { a: [error]});
        expect(facade.orderResultErrors$).toBeObservable(expected);
      });
    });
  });

  describe('orderResult$', () => {
    it('should initially be a cart order result object with a null ID', () => {
      const expected = cold('a', { a: jasmine.objectContaining({ orderId: null, cartId: null }) });
      expect(facade.orderResult$).toBeObservable(expected);
    });

    describe('when a place order request has succeeded', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPlaceOrderSuccess(mockCartOrderResult));
      });

      it('should be the cart order result object', () => {
        const expected = cold('a', { a: mockCartOrderResult });
        expect(facade.orderResult$).toBeObservable(expected);
      });
    });
  });

  describe('orderResultId$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });
      expect(facade.orderResultId$).toBeObservable(expected);
    });

    describe('when a place order request has succeeded', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPlaceOrderSuccess(mockCartOrderResult));
      });

      it('should be the cart order result ID', () => {
        const expected = cold('a', { a: mockCartOrderResult.orderId });
        expect(facade.orderResultId$).toBeObservable(expected);
      });
    });
  });

  describe('orderResultCartId$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });
      expect(facade.orderResultCartId$).toBeObservable(expected);
    });

    describe('when a place order request has succeeded', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPlaceOrderSuccess(mockCartOrderResult));
      });

      it('should be the cart ID', () => {
        const expected = cold('a', { a: mockCartOrderResult.cartId });
        expect(facade.orderResultCartId$).toBeObservable(expected);
      });
    });
  });

  describe('hasOrderResult$', () => {
    it('should initially be false', () => {
      const expected = cold('a', { a: false });
      expect(facade.hasOrderResult$).toBeObservable(expected);
    });

    describe('when a place order request has succeeded', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPlaceOrderSuccess(mockCartOrderResult));
      });

      it('should be true', () => {
        const expected = cold('a', { a: true });
        expect(facade.hasOrderResult$).toBeObservable(expected);
      });
    });
  });

  describe('getConfiguredCartItemAttributes', () => {

    it('should be the configurable cart item\'s configured attributes', () => {
      const cartItems: DaffConfigurableCartItem[] = configurableCartItemFactory.createMany(2);
      const cart = cartFactory.create({
        items: cartItems,
      });
      const expected = cold('a', { a: cartItems[0].attributes });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.getConfiguredCartItemAttributes(cart.items[0].id)).toBeObservable(expected);
    });
  });

  describe('getCompositeCartItemOptions', () => {

    it('should be the composite cart item\'s item options', () => {
      const cartItems: DaffCompositeCartItem[] = compositeCartItemFactory.createMany(2);
      const cart = cartFactory.create({
        items: cartItems,
      });
      const expected = cold('a', { a: cartItems[0].options });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.getCompositeCartItemOptions(cart.items[0].id)).toBeObservable(expected);
    });
  });

  describe('isCartItemOutOfStock', () => {

    it('should return whether the cart item is out of stock', () => {
      const cart = cartFactory.create({
        items: statefulCartItemFactory.createMany(2, { daffState: <any>jasmine.anything() }),
      });
      const expected = cold('a', { a: !cart.items[0].in_stock });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.isCartItemOutOfStock(cart.items[0].id)).toBeObservable(expected);
    });
  });

  describe('hasBillingAddress$', () => {
    describe('when all the billing address is present', () => {
      beforeEach(() => {
        const cart: DaffCart = cartFactory.create({
          billing_address: cartAddressFactory.create(),
        });
        facade.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should be true', () => {
        const expected = cold('a', { a: true });
        expect(facade.hasBillingAddress$).toBeObservable(expected);
      });
    });

    it('should initially be false', () => {
      const expected = cold('a', { a: false });
      expect(facade.hasBillingAddress$).toBeObservable(expected);
    });
  });

  describe('hasShippingAddress$', () => {
    describe('when all the shipping address is present', () => {
      beforeEach(() => {
        const cart: DaffCart = cartFactory.create({
          shipping_address: cartAddressFactory.create(),
        });
        facade.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should be true', () => {
        const expected = cold('a', { a: true });
        expect(facade.hasShippingAddress$).toBeObservable(expected);
      });
    });

    it('should initially be false', () => {
      const expected = cold('a', { a: false });
      expect(facade.hasShippingAddress$).toBeObservable(expected);
    });
  });

  describe('hasShippingMethod$', () => {
    describe('when all the shipping method is present', () => {
      beforeEach(() => {
        const cart: DaffCart = cartFactory.create({
          shipping_information: shippingMethodFactory.create(),
        });
        facade.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should be true', () => {
        const expected = cold('a', { a: true });
        expect(facade.hasShippingMethod$).toBeObservable(expected);
      });
    });

    it('should initially be false', () => {
      const expected = cold('a', { a: false });
      expect(facade.hasShippingMethod$).toBeObservable(expected);
    });
  });

  describe('hasPaymentMethod$', () => {
    describe('when all the payment method is present', () => {
      beforeEach(() => {
        const cart: DaffCart = cartFactory.create({
          payment: paymentFactory.create(),
        });
        facade.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should be true', () => {
        const expected = cold('a', { a: true });
        expect(facade.hasPaymentMethod$).toBeObservable(expected);
      });
    });

    it('should initially be false', () => {
      const expected = cold('a', { a: false });
      expect(facade.hasPaymentMethod$).toBeObservable(expected);
    });
  });

  describe('canPlaceOrder$', () => {
    describe('when all the fields are valid', () => {
      beforeEach(() => {
        const cart: DaffCart = cartFactory.create({
          items: statefulCartItemFactory.createMany(1),
          shipping_address: cartAddressFactory.create(),
          billing_address: cartAddressFactory.create(),
          payment: paymentFactory.create(),
          shipping_information: shippingMethodFactory.create(),
        });
        facade.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should be true', () => {
        const expected = cold('a', { a: true });
        expect(facade.canPlaceOrder$).toBeObservable(expected);
      });
    });

    it('should initially be false', () => {
      const expected = cold('a', { a: false });
      expect(facade.canPlaceOrder$).toBeObservable(expected);
    });
  });
});
