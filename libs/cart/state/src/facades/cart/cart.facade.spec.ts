import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCartOrderResult,
  DaffCartPaymentMethodIdMap,
  DaffCart,
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
  DaffCartItemListSuccess,
  DaffCartPlaceOrder,
  DaffCartPlaceOrderFailure,
  DaffCartPlaceOrderSuccess,
  DaffCartItemAdd,
  DaffCartResolveState,
  DAFF_CART_STORE_FEATURE_KEY,
  DaffCartStateRootSlice,
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
  DaffStateError,
} from '@daffodil/core/state';

import { DaffCartFacade } from './cart.facade';

describe('@daffodil/cart/state | DaffCartFacade', () => {
  let store: Store<DaffCartStateRootSlice>;
  let facade: DaffCartFacade;
  let cartFactory: DaffCartFactory;
  let statefulCartItemFactory: DaffStatefulCartItemFactory;
  let configurableCartItemFactory: DaffConfigurableCartItemFactory;
  let compositeCartItemFactory: DaffCompositeCartItemFactory;
  let cartAddressFactory: DaffCartAddressFactory;
  let paymentFactory: DaffCartPaymentFactory;
  let shippingMethodFactory: DaffCartShippingRateFactory;
  let scheduler: TestScheduler;

  let loading: DaffCartLoading;
  let errors: DaffCartErrors;
  let mockCartOrderResult: DaffCartOrderResult;
  const paymentMethod = 'so dumb';
  const paymentId = 'even dumber';

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

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
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.resolved$).toBe('a', { a: DaffCartResolveState.Default });
      });
    });
  });

  describe('cart$', () => {
    it('should initially be cart with no defined properties', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.cart$).toBe('a', { a: daffCartReducerInitialState.cart });
      });
    });

    it('should be the cart upon a successful load', () => {
      const cart = cartFactory.create();
      facade.dispatch(new DaffCartLoadSuccess(cart));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.cart$).toBe('a', { a: cart });
      });
    });
  });

  describe('errors$', () => {
    it('should initially be an empty errors object', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.errors$).toBe('a', { a: errors });
      });
    });
  });

  describe('loadingObject$', () => {
    it('returns cart loading object state', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loadingObject$).toBe('a', { a: loading });
      });
    });
  });

  describe('featureLoading$', () => {
    describe('when all the cart operations have completed', () => {
      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.featureLoading$).toBe('a', { a: false });
        });
      });
    });
  });

  describe('featureResolving$', () => {
    describe('when all the cart operations have completed', () => {
      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.featureResolving$).toBe('a', { a: false });
        });
      });
    });
  });

  describe('featureMutating$', () => {
    describe('when all the cart operations have completed', () => {
      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.featureMutating$).toBe('a', { a: false });
        });
      });
    });
  });

  describe('loading$', () => {
    describe('when the cart operations have completed', () => {
      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.loading$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartLoad());
      });

      it('should return true', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.loading$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('resolving$', () => {
    describe('when the cart operations have completed', () => {
      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.resolving$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartLoad());
      });

      it('should return true', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.resolving$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('mutating$', () => {
    describe('when the cart operations have completed', () => {
      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.mutating$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart mutations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartClear());
      });

      it('should return true', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.mutating$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('itemLoading$', () => {
    describe('when the cart item operations have completed', () => {
      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.itemLoading$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart item operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartItemLoad('itemId'));
      });

      it('should return true', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.itemLoading$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('itemAdding$', () => {
    describe('when the cart item add operations have completed', () => {
      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.itemAdding$).toBe('a', { a: false });
        });
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
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.itemAdding$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('itemResolving$', () => {
    describe('when the cart item operations have completed', () => {
      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.itemResolving$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart item resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartItemLoad('itemId'));
      });

      it('should return true', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.itemResolving$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('itemMutating$', () => {
    describe('when the cart item operations have completed', () => {
      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.itemMutating$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart item mutations have not completed', () => {
      beforeEach(() => {
        const mockCartItems = statefulCartItemFactory.createMany(2);
        store.dispatch(new DaffCartItemListSuccess(mockCartItems));
        store.dispatch(new DaffCartItemUpdate(mockCartItems[0].id, { qty: 2 }));
      });

      it('should return true', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.itemMutating$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('billingAddressLoading$', () => {
    describe('when the cart billing operations have completed', () => {
      it('should return false state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.billingAddressLoading$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart billing operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartBillingAddressLoad());
      });

      it('should return true state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.billingAddressLoading$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('billingAddressResolving$', () => {
    describe('when the cart billing operations have completed', () => {
      it('should return false state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.billingAddressResolving$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart billing resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartBillingAddressLoad());
      });

      it('should return true state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.billingAddressResolving$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('billingAddressMutating$', () => {
    describe('when the cart billing operations have completed', () => {
      it('should return false state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.billingAddressMutating$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart billing mutations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartBillingAddressUpdate({}));
      });

      it('should return true state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.billingAddressMutating$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('shippingAddressLoading$', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.shippingAddressLoading$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart shipping operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingAddressLoad());
      });

      it('should return true state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.shippingAddressLoading$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('shippingAddressResolving$', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.shippingAddressResolving$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart shipping resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingAddressLoad());
      });

      it('should return true state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.shippingAddressResolving$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('shippingAddressMutating$', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.shippingAddressMutating$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart shipping mutations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingAddressUpdate({}));
      });

      it('should return true state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.shippingAddressMutating$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('shippingInformationLoading$', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.shippingInformationLoading$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart shipping operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingInformationLoad());
      });

      it('should return true state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.shippingInformationLoading$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('shippingInformationResolving$', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.shippingInformationResolving$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart shipping resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingInformationLoad());
      });

      it('should return true state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.shippingInformationResolving$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('shippingInformationMutating$', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.shippingInformationMutating$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart shipping mutations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingInformationDelete());
      });

      it('should return true state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.shippingInformationMutating$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('shippingMethodsLoading$', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.shippingMethodsLoading$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart shipping operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingMethodsLoad());
      });

      it('should return true state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.shippingMethodsLoading$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('shippingMethodsResolving$', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.shippingMethodsResolving$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart shipping resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingMethodsLoad());
      });

      it('should return true state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.shippingMethodsResolving$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('paymentLoading$', () => {
    describe('when the cart payment operations have completed', () => {
      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.paymentLoading$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart payment operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPaymentLoad());
      });

      it('should return true', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.paymentLoading$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('paymentResolving$', () => {
    describe('when the cart payment operations have completed', () => {
      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.paymentResolving$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart payment resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPaymentLoad());
      });

      it('should return true', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.paymentResolving$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('paymentMutating$', () => {
    describe('when the cart payment operations have completed', () => {
      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.paymentMutating$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart payment mutations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPaymentRemove());
      });

      it('should return true', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.paymentMutating$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('paymentMethodsLoading$', () => {
    describe('when the cart payment operations have completed', () => {
      it('should return false state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.paymentMethodsLoading$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart payment operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPaymentMethodsLoad());
      });

      it('should return true state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.paymentMethodsLoading$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('paymentMethodsResolving$', () => {
    describe('when the cart payment operations have completed', () => {
      it('should return false state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.paymentMethodsResolving$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart payment resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPaymentMethodsLoad());
      });

      it('should return true state', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.paymentMethodsResolving$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('couponLoading$', () => {
    describe('when the cart coupon operations have completed', () => {
      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.couponLoading$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart coupon operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartCouponList());
      });

      it('should return true', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.couponLoading$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('couponResolving$', () => {
    describe('when the cart coupon operations have completed', () => {
      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.couponResolving$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart coupon resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartCouponList());
      });

      it('should return true', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.couponResolving$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('couponMutating$', () => {
    describe('when the cart coupon operations have completed', () => {
      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.couponMutating$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart coupon mutations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartCouponRemoveAll());
      });

      it('should return true', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.couponMutating$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('cartErrors$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.cartErrors$).toBe('a', { a: []});
      });
    });

    it('should contain an error upon a failed cart load', () => {
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      facade.dispatch(new DaffCartLoadFailure([error]));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.cartErrors$).toBe('a', { a: [error]});
      });
    });
  });

  describe('itemErrors$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.itemErrors$).toBe('a', { a: []});
      });
    });

    it('should contain an error upon a failed item load', () => {
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      facade.dispatch(new DaffCartItemLoadFailure([error], 'itemId'));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.itemErrors$).toBe('a', { a: [error]});
      });
    });
  });

  describe('billingAddressErrors$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.billingAddressErrors$).toBe('a', { a: []});
      });
    });

    it('should contain an error upon a failed billing address load', () => {
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      facade.dispatch(new DaffCartBillingAddressLoadFailure([error]));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.billingAddressErrors$).toBe('a', { a: [error]});
      });
    });
  });

  describe('shippingAddressErrors$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.shippingAddressErrors$).toBe('a', { a: []});
      });
    });

    it('should contain an error upon a failed shipping address load', () => {
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      facade.dispatch(new DaffCartShippingAddressLoadFailure([error]));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.shippingAddressErrors$).toBe('a', { a: [error]});
      });
    });
  });

  describe('shippingInformationErrors$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.shippingInformationErrors$).toBe('a', { a: []});
      });
    });

    it('should contain an error upon a failed shipping information load', () => {
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      facade.dispatch(new DaffCartShippingInformationLoadFailure([error]));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.shippingInformationErrors$).toBe('a', { a: [error]});
      });
    });
  });

  describe('shippingMethodsErrors$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.shippingMethodsErrors$).toBe('a', { a: []});
      });
    });

    it('should contain an error upon a failed shipping methods load', () => {
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      facade.dispatch(new DaffCartShippingMethodsLoadFailure([error]));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.shippingMethodsErrors$).toBe('a', { a: [error]});
      });
    });
  });

  describe('paymentErrors$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.paymentErrors$).toBe('a', { a: []});
      });
    });

    it('should contain an error upon a failed payment load', () => {
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      facade.dispatch(new DaffCartPaymentLoadFailure([error]));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.paymentErrors$).toBe('a', { a: [error]});
      });
    });
  });

  describe('paymentMethodsErrors$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.paymentMethodsErrors$).toBe('a', { a: []});
      });
    });

    it('should contain an error upon a failed payment methods load', () => {
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      facade.dispatch(new DaffCartPaymentMethodsLoadFailure([error]));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.paymentMethodsErrors$).toBe('a', { a: [error]});
      });
    });
  });

  describe('couponErrors$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.couponErrors$).toBe('a', { a: []});
      });
    });

    it('should contain an error upon a failed coupon list', () => {
      const error: DaffStateError = { code: 'error code', message: 'error message' };
      facade.dispatch(new DaffCartCouponListFailure([error]));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.couponErrors$).toBe('a', { a: [error]});
      });
    });
  });

  describe('itemEntities$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.itemEntities$).toBe('a', { a: []});
      });
    });

    it('should be the cart items upon a successful cart item list', () => {
      const statefulCartItems = statefulCartItemFactory.createMany(2, { daffState: <any>jasmine.anything() });
      facade.dispatch(new DaffCartItemListSuccess(statefulCartItems));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.itemEntities$).toBe('a', { a: statefulCartItems });
      });
    });
  });

  describe('totalItems$', () => {
    it('should initially be zero', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.totalItems$).toBe('a', { a: 0 });
      });
    });

    it('should be the total number of cart items upon a successful cart item list', () => {
      const statefulCartItems = statefulCartItemFactory.createMany(2, { daffState: <any>jasmine.anything() });
      facade.dispatch(new DaffCartItemListSuccess(statefulCartItems));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.totalItems$).toBe('a', { a: statefulCartItems.reduce((acc, item) => acc + item.qty, 0) });
      });
    });
  });

  describe('hasOutOfStockItems$', () => {

    it('should return whether or not the cart has out of stock items', () => {
      const statefulCartItems = statefulCartItemFactory.createMany(2, { daffState: <any>jasmine.anything() });
      facade.dispatch(new DaffCartItemListSuccess(statefulCartItems));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.hasOutOfStockItems$).toBe('a', { a: false });
      });
    });
  });

  describe('outOfStockItems$', () => {
    it('should return out of stock items', () => {
      const statefulCartItems = statefulCartItemFactory.createMany(2, {
        in_stock: false,
        daffState: <any>jasmine.anything(),
      });
      facade.dispatch(new DaffCartItemListSuccess(statefulCartItems));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.outOfStockItems$).toBe('a', { a: statefulCartItems });
      });
    });
  });

  describe('inStockItems$', () => {
    it('should return in stock items', () => {
      const statefulCartItems = statefulCartItemFactory.createMany(2, {
        in_stock: true,
        daffState: <any>jasmine.anything(),
      });
      facade.dispatch(new DaffCartItemListSuccess(statefulCartItems));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.inStockItems$).toBe('a', { a: statefulCartItems });
      });
    });
  });

  describe('itemDictionary$', () => {
    it('should initially be an empty object', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.itemDictionary$).toBe('a', { a: {}});
      });
    });

    it('should be the cart items upon a successful cart item list', () => {
      const statefulCartItems = statefulCartItemFactory.createMany(2, { daffState: <any>jasmine.anything() });
      facade.dispatch(new DaffCartItemListSuccess(statefulCartItems));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.itemDictionary$).toBe('a', {
          a:
            statefulCartItems.reduce((acc, item) => ({
              ...acc,
              [item.id]: item,
            }), {}),
        });
      });
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
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.paymentId$).toBe('a', { a: null });
        });
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
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.paymentId$).toBe('a', { a: null });
        });
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
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.paymentId$).toBe('a', { a: undefined });
        });
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
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.paymentId$).toBe('a', { a: paymentId });
        });
      });
    });
  });

  describe('isCartEmpty$', () => {
    it('should return whether the cart is empty', () => {
      const cart = cartFactory.create();
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.isCartEmpty$).toBe('a', { a: cart.items.length === 0 });
      });
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
          scheduler.run(({ expectObservable }) => {
            expectObservable(facade.isBillingSameAsShipping$).toBe('a', { a: true });
          });
        });
      });

      describe('and the shipping and billing address are not the same', () => {
        beforeEach(() => {
          cart.shipping_address.street = `${cart.shipping_address.street} ${cart.billing_address.street}`;
          facade.dispatch(new DaffCartLoadSuccess(cart));
        });

        it('should return false', () => {
          scheduler.run(({ expectObservable }) => {
            expectObservable(facade.isBillingSameAsShipping$).toBe('a', { a: false });
          });
        });
      });
    });

    describe('when the cart does not have a shipping address', () => {
      beforeEach(() => {
        cart.shipping_address = null;
        facade.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.isBillingSameAsShipping$).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart does not have a billing address', () => {
      beforeEach(() => {
        cart.billing_address = null;
        facade.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.isBillingSameAsShipping$).toBe('a', { a: false });
        });
      });
    });
  });

  describe('orderResultLoading$', () => {
    it('should initially be false', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.orderResultLoading$).toBe('a', { a: false });
      });
    });

    describe('when there is a place order request in progress', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPlaceOrder());
      });

      it('should be true', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.orderResultLoading$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('orderResultErrors$', () => {
    it('should initially be empty', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.orderResultErrors$).toBe('a', { a: []});
      });
    });

    describe('when a place order request has failed', () => {
      let error;

      beforeEach(() => {
        error = 'error';
        facade.dispatch(new DaffCartPlaceOrderFailure([error]));
      });

      it('should contain the error', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.orderResultErrors$).toBe('a', { a: [error]});
        });
      });
    });
  });

  describe('orderResult$', () => {
    it('should initially be a cart order result object with a null ID', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.orderResult$).toBe('a', { a: jasmine.objectContaining({ orderId: null, cartId: null }) });
      });
    });

    describe('when a place order request has succeeded', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPlaceOrderSuccess(mockCartOrderResult));
      });

      it('should be the cart order result object', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.orderResult$).toBe('a', { a: mockCartOrderResult });
        });
      });
    });
  });

  describe('orderResultId$', () => {
    it('should initially be null', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.orderResultId$).toBe('a', { a: null });
      });
    });

    describe('when a place order request has succeeded', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPlaceOrderSuccess(mockCartOrderResult));
      });

      it('should be the cart order result ID', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.orderResultId$).toBe('a', { a: mockCartOrderResult.orderId });
        });
      });
    });
  });

  describe('orderResultCartId$', () => {
    it('should initially be null', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.orderResultCartId$).toBe('a', { a: null });
      });
    });

    describe('when a place order request has succeeded', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPlaceOrderSuccess(mockCartOrderResult));
      });

      it('should be the cart ID', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.orderResultCartId$).toBe('a', { a: mockCartOrderResult.cartId });
        });
      });
    });
  });

  describe('hasOrderResult$', () => {
    it('should initially be false', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.hasOrderResult$).toBe('a', { a: false });
      });
    });

    describe('when a place order request has succeeded', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPlaceOrderSuccess(mockCartOrderResult));
      });

      it('should be true', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.hasOrderResult$).toBe('a', { a: true });
        });
      });
    });
  });

  describe('getConfiguredCartItemAttributes', () => {

    it('should be the configurable cart item\'s configured attributes', () => {
      const cartItems: DaffConfigurableCartItem[] = configurableCartItemFactory.createMany(2);
      const cart = cartFactory.create({
        items: cartItems,
      });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getConfiguredCartItemAttributes(cart.items[0].id)).toBe('a', { a: cartItems[0].attributes });
      });
    });
  });

  describe('getCompositeCartItemOptions', () => {

    it('should be the composite cart item\'s item options', () => {
      const cartItems: DaffCompositeCartItem[] = compositeCartItemFactory.createMany(2);
      const cart = cartFactory.create({
        items: cartItems,
      });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getCompositeCartItemOptions(cart.items[0].id)).toBe('a', { a: cartItems[0].options });
      });
    });
  });

  describe('isCartItemOutOfStock', () => {

    it('should return whether the cart item is out of stock', () => {
      const cart = cartFactory.create({
        items: statefulCartItemFactory.createMany(2, { daffState: <any>jasmine.anything() }),
      });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.isCartItemOutOfStock(cart.items[0].id)).toBe('a', { a: !cart.items[0].in_stock });
      });
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
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.hasBillingAddress$).toBe('a', { a: true });
        });
      });
    });

    it('should initially be false', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.hasBillingAddress$).toBe('a', { a: false });
      });
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
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.hasShippingAddress$).toBe('a', { a: true });
        });
      });
    });

    it('should initially be false', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.hasShippingAddress$).toBe('a', { a: false });
      });
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
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.hasShippingMethod$).toBe('a', { a: true });
        });
      });
    });

    it('should initially be false', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.hasShippingMethod$).toBe('a', { a: false });
      });
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
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.hasPaymentMethod$).toBe('a', { a: true });
        });
      });
    });

    it('should initially be false', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.hasPaymentMethod$).toBe('a', { a: false });
      });
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
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.canPlaceOrder$).toBe('a', { a: true });
        });
      });
    });

    it('should initially be false', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.canPlaceOrder$).toBe('a', { a: false });
      });
    });
  });
});
