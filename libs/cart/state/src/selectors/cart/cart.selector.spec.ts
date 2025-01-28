import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffCart,
  DaffCartItemInputType,
  DaffCartTotalTypeEnum,
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
      const expected = cold('a', { a: cart });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartResolved', () => {
    it('should initially be default', () => {
      const selector = store.pipe(select(selectCartResolved));
      const expected = cold('a', { a: DaffCartResolveState.Succeeded });

      expect(selector).toBeObservable(expected);
    });

    it('should be resolving after cart resolution has been initiated', () => {
      const selector = store.pipe(select(selectCartResolved));
      const expected = cold('a', { a: DaffCartResolveState.Resolving });
      store.dispatch(new DaffResolveCart());

      expect(selector).toBeObservable(expected);
    });

    it('should be succeeded after cart resolution success', () => {
      const selector = store.pipe(select(selectCartResolved));
      const expected = cold('a', { a: DaffCartResolveState.Succeeded });
      store.dispatch(new DaffResolveCartSuccess(cart));

      expect(selector).toBeObservable(expected);
    });

    it('should be failed after cart resolution failure', () => {
      const selector = store.pipe(select(selectCartResolved));
      const expected = cold('a', { a: DaffCartResolveState.Failed });
      store.dispatch(new DaffResolveCartFailure([error]));

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartLoadingObject', () => {
    it('returns cart loading object state', () => {
      const selector = store.pipe(select(selectCartLoadingObject));
      const expected = cold('a', { a: loading });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartFeatureLoading', () => {
    describe('when all the cart operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoad());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart item operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemLoad('itemId'));
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart billing operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartBillingAddressLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping address operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingAddressLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingInformationLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping methods operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingMethodsLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentLoad());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment methods operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentMethodsLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart coupon operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartCouponList());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCartFeatureResolving', () => {
    describe('when all the cart operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoad());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart item resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemLoad('itemId'));
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart billing resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartBillingAddressLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping address resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingAddressLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingInformationLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping methods resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingMethodsLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentLoad());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment methods resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentMethodsLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart coupon resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartCouponList());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCartFeatureMutating', () => {
    describe('when all the cart operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartClear());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart item mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemDelete('itemId'));
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart billing mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartBillingAddressUpdate({}));
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping address mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingAddressUpdate({}));
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingInformationDelete());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentRemove());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart coupon mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartCouponRemoveAll());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
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
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCartLoading', () => {
    describe('when the cart operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartLoading));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoad());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartLoading));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCartResolving', () => {
    describe('when the cart operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartResolving));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoad());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartResolving));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCartMutating', () => {
    describe('when the cart operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartMutating));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartClear());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartMutating));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectItemLoading', () => {
    describe('when the cart item operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectItemLoading));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart item operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemLoad('itemId'));
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectItemLoading));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectItemAdding', () => {
    describe('when the cart item add operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectItemAdding));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
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
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectItemResolving', () => {
    describe('when the cart item operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectItemResolving));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart item resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemLoad('itemId'));
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectItemResolving));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectBillingAddressLoading', () => {
    describe('when the cart billing operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectBillingAddressLoading));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart billing operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartBillingAddressLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectBillingAddressLoading));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectBillingAddressResolving', () => {
    describe('when the cart billing operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectBillingAddressResolving));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart billing resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartBillingAddressLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectBillingAddressResolving));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectBillingAddressMutating', () => {
    describe('when the cart billing operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectBillingAddressMutating));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart billing mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartBillingAddressUpdate({}));
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectBillingAddressMutating));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectShippingAddressLoading', () => {
    describe('when the cart shipping address operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingAddressLoading));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping address operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingAddressLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingAddressLoading));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectShippingAddressResolving', () => {
    describe('when the cart shipping address operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingAddressResolving));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping address resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingAddressLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingAddressResolving));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectShippingAddressMutating', () => {
    describe('when the cart shipping address operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingAddressMutating));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping address mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingAddressUpdate({}));
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingAddressMutating));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectShippingInformationLoading', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingInformationLoading));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingInformationLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingInformationLoading));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectShippingInformationResolving', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingInformationResolving));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingInformationLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingInformationResolving));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectShippingInformationMutating', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingInformationMutating));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingInformationDelete());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingInformationMutating));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectShippingMethodsLoading', () => {
    describe('when the cart shipping methods operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingMethodsLoading));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping methods operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingMethodsLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingMethodsLoading));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectShippingMethodsResolving', () => {
    describe('when the cart shipping methods operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingMethodsResolving));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping methods resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingMethodsLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingMethodsResolving));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectPaymentLoading', () => {
    describe('when the cart payment operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectPaymentLoading));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentLoad());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectPaymentLoading));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectPaymentResolving', () => {
    describe('when the cart payment operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectPaymentResolving));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentLoad());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectPaymentResolving));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectPaymentMutating', () => {
    describe('when the cart payment operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectPaymentMutating));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentRemove());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectPaymentMutating));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectPaymentMethodsLoading', () => {
    describe('when the cart payment methods operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectPaymentMethodsLoading));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment methods operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentMethodsLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectPaymentMethodsLoading));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectPaymentMethodsResolving', () => {
    describe('when the cart payment methods operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectPaymentMethodsResolving));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment methods resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentMethodsLoad());
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectPaymentMethodsResolving));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCouponLoading', () => {
    describe('when the cart coupon operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCouponLoading));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart coupon operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartCouponList());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCouponLoading));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCouponResolving', () => {
    describe('when the cart coupon operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCouponResolving));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart coupon resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartCouponList());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCouponResolving));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCouponMutating', () => {
    describe('when the cart coupon operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCouponMutating));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart coupon mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartCouponRemoveAll());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCouponMutating));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCartErrorsObject', () => {
    it('returns cart errors object state', () => {
      const selector = store.pipe(select(selectCartErrorsObject));
      const expected = cold('a', { a: errors });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartErrors', () => {
    it('returns cart errors state', () => {
      const selector = store.pipe(select(selectCartErrors));
      const expected = cold('a', { a: errors[DaffCartOperationType.Cart] });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectItemErrors', () => {
    it('returns item errors state', () => {
      const selector = store.pipe(select(selectItemErrors));
      const expected = cold('a', { a: errors[DaffCartOperationType.Item] });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectBillingAddressErrors', () => {
    it('returns billing address errors state', () => {
      const selector = store.pipe(select(selectBillingAddressErrors));
      const expected = cold('a', { a: errors[DaffCartOperationType.BillingAddress] });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectShippingAddressErrors', () => {
    it('returns shipping address errors state', () => {
      const selector = store.pipe(select(selectShippingAddressErrors));
      const expected = cold('a', { a: errors[DaffCartOperationType.ShippingAddress] });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectShippingInformationErrors', () => {
    it('returns shipping information errors state', () => {
      const selector = store.pipe(select(selectShippingInformationErrors));
      const expected = cold('a', { a: errors[DaffCartOperationType.ShippingInformation] });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectShippingMethodsErrors', () => {
    it('returns shipping methods errors state', () => {
      const selector = store.pipe(select(selectShippingMethodsErrors));
      const expected = cold('a', { a: errors[DaffCartOperationType.ShippingMethods] });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPaymentErrors', () => {
    it('returns payment errors state', () => {
      const selector = store.pipe(select(selectPaymentErrors));
      const expected = cold('a', { a: errors[DaffCartOperationType.Payment] });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPaymentMethodsErrors', () => {
    it('returns payment methods errors state', () => {
      const selector = store.pipe(select(selectPaymentMethodsErrors));
      const expected = cold('a', { a: errors[DaffCartOperationType.PaymentMethods] });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCouponErrors', () => {
    it('returns coupon errors state', () => {
      const selector = store.pipe(select(selectCouponErrors));
      const expected = cold('a', { a: errors[DaffCartOperationType.Coupon] });

      expect(selector).toBeObservable(expected);
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
      const expected = cold('a', { a: true });

      expect(selector).toBeObservable(expected);
    });

    it('should return false when no items are out of stock', () => {
      const selector = store.pipe(select(selectCartHasOutOfStockItems));
      const expected = cold('a', { a: false });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectIsCartEmpty', () => {
    it('selects whether the cart is empty', () => {
      const selector = store.pipe(select(selectIsCartEmpty));
      const expected = cold('a', { a: cart.items.length === 0 });

      expect(selector).toBeObservable(expected);
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
          const expected = cold('a', { a: true });

          expect(selector).toBeObservable(expected);
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
          const expected = cold('a', { a: false });

          expect(selector).toBeObservable(expected);
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
          const expected = cold('a', { a: false });

          expect(selector).toBeObservable(expected);
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
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
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
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectHasBillingAddress | selects whether the cart has a billing address', () => {
    describe('when the cart has a billing address', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectHasBillingAddress));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
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
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectHasShippingAddress | selects whether the cart has a shipping address', () => {
    describe('when the cart has a shipping address', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectHasShippingAddress));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
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
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectHasShippingMethod | selects whether the cart has a selected shipping method', () => {
    describe('when the cart has a selected shipping method', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectHasShippingMethod));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
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
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectHasPaymentMethod | selects whether the cart has a selected payment method', () => {
    describe('when the cart has a selected payment method', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectHasPaymentMethod));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
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
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
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
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCanPlaceOrder | selects whether the cart has all the required fields for placing an order', () => {
    describe('when the cart has all the required fields for placing an order', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectCanPlaceOrder));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
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
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });
  });
});
