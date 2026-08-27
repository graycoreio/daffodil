import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCart,
  DaffCartItemInputType,
} from '@daffodil/cart';
import {
  DaffCartLoadSuccess,
  DaffCartPlaceOrderSuccess,
  DaffResolveCartSuccess,
  DaffCartBillingAddressLoad,
  DaffCartItemLoad,
  DaffCartLoad,
  DaffCartPaymentLoad,
  DaffCartPaymentMethodsLoad,
  DaffCartShippingAddressLoad,
  DaffCartShippingInformationLoad,
  DaffCartShippingMethodsLoad,
  DaffCartCouponList,
  DaffCartClear,
  DaffCartItemDelete,
  DaffCartBillingAddressUpdate,
  DaffCartShippingAddressUpdate,
  DaffCartShippingInformationDelete,
  DaffCartPaymentRemove,
  DaffCartCouponRemoveAll,
  DaffCartStateRootSlice,
  DaffCartLoading,
  DaffCartErrors,
  daffCartReducers,
  DaffCartOperationType,
  DaffCartItemAdd,
  DaffCartResolveState,
  DaffResolveCart,
  DaffResolveCartFailure,
  DAFF_CART_STORE_FEATURE_KEY,
  DaffCartReducersState,
  daffCartItemEntitiesRetrievalActionsReducerFactory,
  daffCartRetrievalActionsReducerFactory,
  daffCartRetrivalActions,
} from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartItemFactory,
  DaffCartAddressFactory,
  DaffCartPaymentFactory,
} from '@daffodil/cart/testing';
import {
  DaffState,
  DaffStateError,
  daffComposeReducers,
  daffIdentityReducer,
} from '@daffodil/core/state';

import { getCartSelectors } from './cart.selector';

describe('@daffodil/cart/state | getCartSelectors', () => {
  let store: Store<DaffCartStateRootSlice>;

  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;
  let cartAddressFactory: DaffCartAddressFactory;
  let paymentFactory: DaffCartPaymentFactory;

  let orderId: string;
  let cart: DaffCart;
  let loading: DaffCartLoading;
  let errors: DaffCartErrors;
  let error: DaffStateError;
  let scheduler: TestScheduler;
  const {
    selectCartValue,

    selectCartResolved,

    selectCartLoadingObject,
    selectCartFeatureLoading,
    selectCartFeatureResolving,
    selectCartFeatureMutating,
    selectCartLoading,
    selectCartResolving,
    selectCartMutating,
    selectBillingAddressLoading,
    selectBillingAddressResolving,
    selectBillingAddressMutating,
    selectShippingAddressLoading,
    selectShippingAddressResolving,
    selectShippingAddressMutating,
    selectShippingInformationLoading,
    selectShippingInformationResolving,
    selectShippingInformationMutating,
    selectShippingMethodsLoading,
    selectShippingMethodsResolving,
    selectPaymentLoading,
    selectPaymentResolving,
    selectPaymentMutating,
    selectPaymentMethodsLoading,
    selectPaymentMethodsResolving,
    selectCouponLoading,
    selectCouponResolving,
    selectCouponMutating,
    selectItemLoading,
    selectItemAdding,
    selectItemResolving,

    selectCartErrorsObject,
    selectCartErrors,
    selectItemErrors,
    selectBillingAddressErrors,
    selectShippingAddressErrors,
    selectShippingInformationErrors,
    selectShippingMethodsErrors,
    selectPaymentErrors,
    selectPaymentMethodsErrors,
    selectCouponErrors,

    selectCartHasOutOfStockItems,

    selectIsCartEmpty,
    selectIsBillingSameAsShipping,

    selectHasBillingAddress,
    selectHasShippingAddress,
    selectHasShippingMethod,
    selectHasPaymentMethod,
    selectCanPlaceOrder,
  } = getCartSelectors();

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
    });

    store = TestBed.inject(Store);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartItemFactory = TestBed.inject(DaffCartItemFactory);
    cartAddressFactory = TestBed.inject(DaffCartAddressFactory);
    paymentFactory = TestBed.inject(DaffCartPaymentFactory);

    orderId = 'id';
    error = {
      code: 'error code',
      message: 'error message',
    };
    cart = cartFactory.create({
      items: cartItemFactory.createMany(2),
      shipping_address: cartAddressFactory.create(),
      billing_address: cartAddressFactory.create(),
      payment: paymentFactory.create(),
    });
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

    store.dispatch(new DaffCartLoadSuccess(cart));
    store.dispatch(new DaffCartPlaceOrderSuccess({
      orderId,
      cartId: cart.id,
    }));
  });

  describe('selectCartValue', () => {
    it('returns cart state', () => {
      const selector = store.pipe(select(selectCartValue));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: cart });
      });
    });
  });

  describe('selectCartResolved', () => {
    it('should initially be default', () => {
      const selector = store.pipe(select(selectCartResolved));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: DaffCartResolveState.Succeeded });
      });
    });

    it('should be resolving after cart resolution has been initiated', () => {
      const selector = store.pipe(select(selectCartResolved));
      store.dispatch(new DaffResolveCart());
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: DaffCartResolveState.Resolving });
      });
    });

    it('should be succeeded after cart resolution success', () => {
      const selector = store.pipe(select(selectCartResolved));
      store.dispatch(new DaffResolveCartSuccess(cart));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: DaffCartResolveState.Succeeded });
      });
    });

    it('should be failed after cart resolution failure', () => {
      const selector = store.pipe(select(selectCartResolved));
      store.dispatch(new DaffResolveCartFailure([error]));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: DaffCartResolveState.Failed });
      });
    });
  });

  describe('selectCartLoadingObject', () => {
    it('returns cart loading object state', () => {
      const selector = store.pipe(select(selectCartLoadingObject));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: loading });
      });
    });
  });

  describe('selectCartFeatureLoading', () => {
    describe('when all the cart operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoad());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart item operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemLoad('itemId'));
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart billing operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartBillingAddressLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart shipping address operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingAddressLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart shipping operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingInformationLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart shipping methods operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingMethodsLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart payment operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentLoad());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart payment methods operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentMethodsLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart coupon operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartCouponList());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectCartFeatureResolving', () => {
    describe('when all the cart operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoad());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart item resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemLoad('itemId'));
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart billing resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartBillingAddressLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart shipping address resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingAddressLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart shipping resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingInformationLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart shipping methods resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingMethodsLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart payment resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentLoad());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart payment methods resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentMethodsLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart coupon resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartCouponList());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectCartFeatureMutating', () => {
    describe('when all the cart operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartClear());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart item mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemDelete('itemId'));
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart billing mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartBillingAddressUpdate({}));
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart shipping address mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingAddressUpdate({}));
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart shipping mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingInformationDelete());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart payment mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentRemove());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart coupon mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartCouponRemoveAll());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart item add mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemAdd({
          productId: 'productId',
          qty: 1,
          type: DaffCartItemInputType.Simple,
        }));
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectCartLoading', () => {
    describe('when the cart operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoad());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectCartResolving', () => {
    describe('when the cart operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoad());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectCartMutating', () => {
    describe('when the cart operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartClear());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectItemLoading', () => {
    describe('when the cart item operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectItemLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart item operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemLoad('itemId'));
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectItemLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectItemAdding', () => {
    describe('when the cart item add operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectItemAdding));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart item add operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemAdd({
          productId: 'productId',
          qty: 1,
          type: DaffCartItemInputType.Simple,
        }));
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectItemAdding));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectItemResolving', () => {
    describe('when the cart item operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectItemResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart item resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemLoad('itemId'));
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectItemResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectBillingAddressLoading', () => {
    describe('when the cart billing operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectBillingAddressLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart billing operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartBillingAddressLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectBillingAddressLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectBillingAddressResolving', () => {
    describe('when the cart billing operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectBillingAddressResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart billing resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartBillingAddressLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectBillingAddressResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectBillingAddressMutating', () => {
    describe('when the cart billing operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectBillingAddressMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart billing mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartBillingAddressUpdate({}));
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectBillingAddressMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectShippingAddressLoading', () => {
    describe('when the cart shipping address operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingAddressLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart shipping address operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingAddressLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingAddressLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectShippingAddressResolving', () => {
    describe('when the cart shipping address operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingAddressResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart shipping address resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingAddressLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingAddressResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectShippingAddressMutating', () => {
    describe('when the cart shipping address operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingAddressMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart shipping address mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingAddressUpdate({}));
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingAddressMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectShippingInformationLoading', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingInformationLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart shipping operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingInformationLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingInformationLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectShippingInformationResolving', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingInformationResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart shipping resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingInformationLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingInformationResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectShippingInformationMutating', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingInformationMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart shipping mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingInformationDelete());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingInformationMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectShippingMethodsLoading', () => {
    describe('when the cart shipping methods operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingMethodsLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart shipping methods operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingMethodsLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingMethodsLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectShippingMethodsResolving', () => {
    describe('when the cart shipping methods operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingMethodsResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart shipping methods resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingMethodsLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingMethodsResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectPaymentLoading', () => {
    describe('when the cart payment operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectPaymentLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart payment operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentLoad());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectPaymentLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectPaymentResolving', () => {
    describe('when the cart payment operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectPaymentResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart payment resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentLoad());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectPaymentResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectPaymentMutating', () => {
    describe('when the cart payment operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectPaymentMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart payment mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentRemove());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectPaymentMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectPaymentMethodsLoading', () => {
    describe('when the cart payment methods operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectPaymentMethodsLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart payment methods operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentMethodsLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectPaymentMethodsLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectPaymentMethodsResolving', () => {
    describe('when the cart payment methods operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectPaymentMethodsResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart payment methods resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentMethodsLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectPaymentMethodsResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectCouponLoading', () => {
    describe('when the cart coupon operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCouponLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart coupon operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartCouponList());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCouponLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectCouponResolving', () => {
    describe('when the cart coupon operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCouponResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart coupon resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartCouponList());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCouponResolving));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectCouponMutating', () => {
    describe('when the cart coupon operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCouponMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart coupon mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartCouponRemoveAll());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCouponMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });

  describe('selectCartErrorsObject', () => {
    it('returns cart errors object state', () => {
      const selector = store.pipe(select(selectCartErrorsObject));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: errors });
      });
    });
  });

  describe('selectCartErrors', () => {
    it('returns cart errors state', () => {
      const selector = store.pipe(select(selectCartErrors));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: errors[DaffCartOperationType.Cart] });
      });
    });
  });

  describe('selectItemErrors', () => {
    it('returns item errors state', () => {
      const selector = store.pipe(select(selectItemErrors));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: errors[DaffCartOperationType.Item] });
      });
    });
  });

  describe('selectBillingAddressErrors', () => {
    it('returns billing address errors state', () => {
      const selector = store.pipe(select(selectBillingAddressErrors));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: errors[DaffCartOperationType.BillingAddress] });
      });
    });
  });

  describe('selectShippingAddressErrors', () => {
    it('returns shipping address errors state', () => {
      const selector = store.pipe(select(selectShippingAddressErrors));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: errors[DaffCartOperationType.ShippingAddress] });
      });
    });
  });

  describe('selectShippingInformationErrors', () => {
    it('returns shipping information errors state', () => {
      const selector = store.pipe(select(selectShippingInformationErrors));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: errors[DaffCartOperationType.ShippingInformation] });
      });
    });
  });

  describe('selectShippingMethodsErrors', () => {
    it('returns shipping methods errors state', () => {
      const selector = store.pipe(select(selectShippingMethodsErrors));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: errors[DaffCartOperationType.ShippingMethods] });
      });
    });
  });

  describe('selectPaymentErrors', () => {
    it('returns payment errors state', () => {
      const selector = store.pipe(select(selectPaymentErrors));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: errors[DaffCartOperationType.Payment] });
      });
    });
  });

  describe('selectPaymentMethodsErrors', () => {
    it('returns payment methods errors state', () => {
      const selector = store.pipe(select(selectPaymentMethodsErrors));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: errors[DaffCartOperationType.PaymentMethods] });
      });
    });
  });

  describe('selectCouponErrors', () => {
    it('returns coupon errors state', () => {
      const selector = store.pipe(select(selectCouponErrors));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: errors[DaffCartOperationType.Coupon] });
      });
    });
  });

  describe('selectCartHasOutOfStockItems', () => {
    it('should return true when at least one cart item is out of stock', () => {
      store.dispatch(new DaffCartLoadSuccess({
        ...cart,
        items: [{
          ...cart.items[0],
          in_stock: false,
        }],
      }));
      const selector = store.pipe(select(selectCartHasOutOfStockItems));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: true });
      });
    });

    it('should return false when no items are out of stock', () => {
      const selector = store.pipe(select(selectCartHasOutOfStockItems));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: false });
      });
    });
  });

  describe('selectIsCartEmpty', () => {
    it('selects whether the cart is empty', () => {
      const selector = store.pipe(select(selectIsCartEmpty));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: cart.items.length === 0 });
      });
    });
  });

  describe('selectIsBillingSameAsShipping | selects whether the cart\'s billing and shipping address are the same', () => {
    describe('when the cart has a billing and shipping address', () => {
      describe('and the shipping and billing address are the same', () => {
        beforeEach(() => {
          store.dispatch(new DaffCartLoadSuccess({
            ...cart,
            shipping_address: cart.billing_address,
          }));
        });

        it('should return true', () => {
          const selector = store.pipe(select(selectIsBillingSameAsShipping));
          scheduler.run(({ expectObservable }) => {
            expectObservable(selector).toBe('a', { a: true });
          });
        });
      });

      describe('and the shipping and billing address are the same except for ID', () => {
        beforeEach(() => {
          store.dispatch(new DaffCartLoadSuccess({
            ...cart,
            shipping_address: {
              ...cart.billing_address,
              id: `not ${cart.billing_address.id}`,
            },
          }));
        });

        it('should return false', () => {
          const selector = store.pipe(select(selectIsBillingSameAsShipping));
          scheduler.run(({ expectObservable }) => {
            expectObservable(selector).toBe('a', { a: false });
          });
        });
      });

      describe('and the shipping and billing address are not the same', () => {
        beforeEach(() => {
          store.dispatch(new DaffCartLoadSuccess({
            ...cart,
            shipping_address: {
              ...cart.shipping_address,
              street: `${cart.shipping_address.street} ${cart.billing_address.street}`,
            },
          }));
        });

        it('should return false', () => {
          const selector = store.pipe(select(selectIsBillingSameAsShipping));
          scheduler.run(({ expectObservable }) => {
            expectObservable(selector).toBe('a', { a: false });
          });
        });
      });
    });

    describe('when the cart does not have a shipping address', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoadSuccess({
          ...cart,
          shipping_address: null,
        }));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectIsBillingSameAsShipping));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart does not have a billing address', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoadSuccess({
          ...cart,
          billing_address: null,
        }));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectIsBillingSameAsShipping));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });
  });

  describe('selectHasBillingAddress | selects whether the cart has a billing address', () => {
    describe('when the cart has a billing address', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectHasBillingAddress));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart does not have a billing address', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoadSuccess({
          ...cart,
          billing_address: null,
        }));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectHasBillingAddress));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });
  });

  describe('selectHasShippingAddress | selects whether the cart has a shipping address', () => {
    describe('when the cart has a shipping address', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectHasShippingAddress));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart does not have a shipping address', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoadSuccess({
          ...cart,
          shipping_address: null,
        }));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectHasShippingAddress));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });
  });

  describe('selectHasShippingMethod | selects whether the cart has a selected shipping method', () => {
    describe('when the cart has a selected shipping method', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectHasShippingMethod));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart does not have a selected shipping method', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoadSuccess({
          ...cart,
          shipping_information: null,
        }));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectHasShippingMethod));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });
  });

  describe('selectHasPaymentMethod | selects whether the cart has a selected payment method', () => {
    describe('when the cart has a selected payment method', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectHasPaymentMethod));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart has a null selected payment method', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoadSuccess({
          ...cart,
          payment: null,
        }));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectHasPaymentMethod));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });

    describe('when the cart has a empty string selected payment method', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoadSuccess({
          ...cart,
          payment: {
            ...cart.payment,
            method: '',
          },
        }));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectHasPaymentMethod));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });
  });

  describe('selectCanPlaceOrder | selects whether the cart has all the required fields for placing an order', () => {
    describe('when the cart has all the required fields for placing an order', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectCanPlaceOrder));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when the cart does not have all the required fields for placing an order', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoadSuccess({
          ...cart,
          billing_address: null,
        }));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectCanPlaceOrder));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });
  });
});
