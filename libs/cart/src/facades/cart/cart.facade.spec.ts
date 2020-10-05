import { TestBed } from '@angular/core/testing';

import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';

import { DaffLoadingState } from '@daffodil/core';
import {
  DaffCartLoad,
  DaffCartLoadSuccess,
  DaffCartLoadFailure,
  DaffCartCreateSuccess,
  DaffCartItemListSuccess,
  DaffCartBillingAddressLoadSuccess,
  DaffCartShippingAddressLoadSuccess,
  DaffCartPaymentLoadSuccess,
  DaffCartShippingInformationLoadSuccess,
  DaffCartShippingMethodsLoadSuccess,
  DaffCartPaymentMethodsLoadSuccess,
  DaffCartItemLoadFailure,
  DaffCartBillingAddressLoadFailure,
  DaffCartShippingAddressLoadFailure,
  DaffCartShippingInformationLoadFailure,
  DaffCartShippingMethodsLoadFailure,
  DaffCartPaymentLoadFailure,
  DaffCartPaymentMethodsLoadFailure,
  DaffCartPlaceOrder,
  DaffCartPlaceOrderFailure,
  DaffCartPlaceOrderSuccess,
  DaffCartCouponListFailure,
  DaffCartTotalTypeEnum,
  DaffCartLoading,
  DaffCartPaymentMethod,
  DaffCart, DaffCartBillingAddressLoad, DaffCartBillingAddressUpdate, DaffCartClear, DaffCartCouponList, DaffCartCouponRemoveAll, DaffCartItemDelete, DaffCartItemLoad, DaffCartPaymentLoad, DaffCartPaymentMethodsLoad, DaffCartPaymentRemove, DaffCartShippingAddressLoad, DaffCartShippingAddressUpdate, DaffCartShippingInformationDelete, DaffCartShippingInformationLoad, DaffCartShippingMethodsLoad
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartItemFactory,
  DaffCartAddressFactory,
  DaffCartPaymentFactory,
  DaffCartShippingRateFactory,
  DaffConfigurableCartItemFactory,
  DaffCompositeCartItemFactory
} from '@daffodil/cart/testing';

import { DaffCartFacade } from './cart.facade';
import { DaffCartReducersState, daffCartReducers, initialState } from '../../reducers/public_api';
import { DaffCartErrors } from '../../reducers/errors/cart-errors.type';
import { DaffCartOperationType } from '../../reducers/cart-operation-type.enum';
import { DaffCartOrderResult } from '../../models/cart-order-result';
import { DaffConfigurableCartItem } from '../../models/configurable-cart-item';
import { DaffCompositeCartItem } from '../../models/composite-cart-item';
import { DaffResolveCartSuccess } from '../../actions/public_api';
import { DaffCartPaymentMethodIdMap } from '../../injection-tokens/public_api';

describe('DaffCartFacade', () => {
  let store: MockStore<{ product: Partial<DaffCartReducersState> }>;
  let facade: DaffCartFacade;
  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;
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
          cart: combineReducers(daffCartReducers),
        })
      ],
      providers: [
        DaffCartFacade,
        {
          provide: DaffCartPaymentMethodIdMap,
          useValue: {
            [paymentMethod]: paymentId
          }
        }
      ]
    })

    store = TestBed.get(Store);
    facade = TestBed.get(DaffCartFacade);
    cartFactory = TestBed.get(DaffCartFactory);
    cartItemFactory = TestBed.get(DaffCartItemFactory);
    configurableCartItemFactory = TestBed.get(DaffConfigurableCartItemFactory);
    compositeCartItemFactory = TestBed.get(DaffCompositeCartItemFactory);
    cartAddressFactory = TestBed.get(DaffCartAddressFactory);
    paymentFactory = TestBed.get(DaffCartPaymentFactory);
    shippingMethodFactory = TestBed.get(DaffCartShippingRateFactory);

    loading = {
      [DaffCartOperationType.Cart]: DaffLoadingState.Complete,
      [DaffCartOperationType.Item]: DaffLoadingState.Complete,
      [DaffCartOperationType.ShippingAddress]: DaffLoadingState.Complete,
      [DaffCartOperationType.BillingAddress]: DaffLoadingState.Complete,
      [DaffCartOperationType.ShippingInformation]: DaffLoadingState.Complete,
      [DaffCartOperationType.ShippingMethods]: DaffLoadingState.Complete,
      [DaffCartOperationType.Payment]: DaffLoadingState.Complete,
      [DaffCartOperationType.PaymentMethods]: DaffLoadingState.Complete,
      [DaffCartOperationType.Coupon]: DaffLoadingState.Complete,
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
    const service: DaffCartFacade<DaffCart> = TestBed.get(DaffCartFacade);
    expect(service).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('resolved$', () => {
    it('should be false if the cart is not resolved', () => {
      const expected = cold('a', { a: false });
      expect(facade.resolved$).toBeObservable(expected);
    });

    it('should be true if the cart is resolved', () => {
      const expected = cold('a', { a: true });
      facade.dispatch(new DaffResolveCartSuccess());
      expect(facade.resolved$).toBeObservable(expected);
    });
  });

  describe('cart$', () => {
    it('should initially be cart with no defined properties', () => {
      const expected = cold('a', { a: initialState.cart });
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
        const expected = cold('a', {a: false});

        expect(facade.featureLoading$).toBeObservable(expected);
      });
    });

    describe('when the cart operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartLoad())
      });

      it('should return true', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureLoading$).toBeObservable(expected);
      });
    });

    describe('when the cart item operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartItemLoad('itemId'))
      });

      it('should return true', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureLoading$).toBeObservable(expected);
      });
    });

    describe('when the cart billing operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartBillingAddressLoad())
      });

      it('should return true state', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureLoading$).toBeObservable(expected);
      });
    });

    describe('when the cart shipping address operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingAddressLoad())
      });

      it('should return true state', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureLoading$).toBeObservable(expected);
      });
    });

    describe('when the cart shipping operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingInformationLoad())
      });

      it('should return true state', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureLoading$).toBeObservable(expected);
      });
    });

    describe('when the cart shipping methods operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingMethodsLoad())
      });

      it('should return true state', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureLoading$).toBeObservable(expected);
      });
    });

    describe('when the cart payment operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPaymentLoad())
      });

      it('should return true', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureLoading$).toBeObservable(expected);
      });
    });

    describe('when the cart payment methods operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPaymentMethodsLoad())
      });

      it('should return true state', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureLoading$).toBeObservable(expected);
      });
    });

    describe('when the cart coupon operations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartCouponList())
      });

      it('should return true', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureLoading$).toBeObservable(expected);
      });
    });
  });

  describe('featureResolving$', () => {
    describe('when all the cart operations have completed', () => {
      it('should return false', () => {
        const expected = cold('a', {a: false});

        expect(facade.featureResolving$).toBeObservable(expected);
      });
    });

    describe('when the cart resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartLoad())
      });

      it('should return true', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureResolving$).toBeObservable(expected);
      });
    });

    describe('when the cart item resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartItemLoad('itemId'))
      });

      it('should return true', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureResolving$).toBeObservable(expected);
      });
    });

    describe('when the cart billing resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartBillingAddressLoad())
      });

      it('should return true state', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureResolving$).toBeObservable(expected);
      });
    });

    describe('when the cart shipping address resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingAddressLoad())
      });

      it('should return true state', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureResolving$).toBeObservable(expected);
      });
    });

    describe('when the cart shipping resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingInformationLoad())
      });

      it('should return true state', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureResolving$).toBeObservable(expected);
      });
    });

    describe('when the cart shipping methods resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingMethodsLoad())
      });

      it('should return true state', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureResolving$).toBeObservable(expected);
      });
    });

    describe('when the cart payment resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPaymentLoad())
      });

      it('should return true', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureResolving$).toBeObservable(expected);
      });
    });

    describe('when the cart payment methods resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPaymentMethodsLoad())
      });

      it('should return true state', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureResolving$).toBeObservable(expected);
      });
    });

    describe('when the cart coupon resolutions have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartCouponList())
      });

      it('should return true', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureResolving$).toBeObservable(expected);
      });
    });
  });

  describe('featureMutating$', () => {
    describe('when all the cart operations have completed', () => {
      it('should return false', () => {
        const expected = cold('a', {a: false});

        expect(facade.featureMutating$).toBeObservable(expected);
      });
    });

    describe('when the cart mutations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartClear())
      });

      it('should return true', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureMutating$).toBeObservable(expected);
      });
    });

    describe('when the cart item mutations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartItemDelete('itemId'))
      });

      it('should return true', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureMutating$).toBeObservable(expected);
      });
    });

    describe('when the cart billing mutations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartBillingAddressUpdate({}))
      });

      it('should return true state', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureMutating$).toBeObservable(expected);
      });
    });

    describe('when the cart shipping address mutations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingAddressUpdate({}))
      });

      it('should return true state', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureMutating$).toBeObservable(expected);
      });
    });

    describe('when the cart shipping mutations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartShippingInformationDelete())
      });

      it('should return true state', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureMutating$).toBeObservable(expected);
      });
    });

    describe('when the cart payment mutations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartPaymentRemove())
      });

      it('should return true', () => {
        const expected = cold('a', {a: true});

        expect(facade.featureMutating$).toBeObservable(expected);
      });
    });

    describe('when the cart coupon mutations have not completed', () => {
      beforeEach(() => {
        facade.dispatch(new DaffCartCouponRemoveAll())
      });

      it('should return true', () => {
        const expected = cold('a', {a: true});

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
        facade.dispatch(new DaffCartLoad())
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
        facade.dispatch(new DaffCartLoad())
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
        facade.dispatch(new DaffCartClear())
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
        facade.dispatch(new DaffCartItemLoad('itemId'))
      });

      it('should return true', () => {
        const expected = cold('a', { a: true });

        expect(facade.itemLoading$).toBeObservable(expected);
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
        facade.dispatch(new DaffCartItemLoad('itemId'))
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
        facade.dispatch(new DaffCartItemDelete('itemId'))
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
        facade.dispatch(new DaffCartBillingAddressLoad())
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
        facade.dispatch(new DaffCartBillingAddressLoad())
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
        facade.dispatch(new DaffCartBillingAddressUpdate({}))
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
        facade.dispatch(new DaffCartShippingAddressLoad())
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
        facade.dispatch(new DaffCartShippingAddressLoad())
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
        facade.dispatch(new DaffCartShippingAddressUpdate({}))
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
        facade.dispatch(new DaffCartShippingInformationLoad())
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
        facade.dispatch(new DaffCartShippingInformationLoad())
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
        facade.dispatch(new DaffCartShippingInformationDelete())
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
        facade.dispatch(new DaffCartShippingMethodsLoad())
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
        facade.dispatch(new DaffCartShippingMethodsLoad())
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
        facade.dispatch(new DaffCartPaymentLoad())
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
        facade.dispatch(new DaffCartPaymentLoad())
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
        facade.dispatch(new DaffCartPaymentRemove())
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
        facade.dispatch(new DaffCartPaymentMethodsLoad())
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
        facade.dispatch(new DaffCartPaymentMethodsLoad())
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
        facade.dispatch(new DaffCartCouponList())
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
        facade.dispatch(new DaffCartCouponList())
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
        facade.dispatch(new DaffCartCouponRemoveAll())
      });

      it('should return true', () => {
        const expected = cold('a', { a: true });

        expect(facade.couponMutating$).toBeObservable(expected);
      });
    });
  });

  describe('cartErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: [] });
      expect(facade.cartErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed cart load', () => {
      const error = 'error';
      const expected = cold('a', { a: [error] });
      facade.dispatch(new DaffCartLoadFailure(error));
      expect(facade.cartErrors$).toBeObservable(expected);
    });
  });

  describe('itemErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: [] });
      expect(facade.itemErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed item load', () => {
      const error = 'error';
      const expected = cold('a', { a: [error] });
      facade.dispatch(new DaffCartItemLoadFailure(error));
      expect(facade.itemErrors$).toBeObservable(expected);
    });
  });

  describe('billingAddressErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: [] });
      expect(facade.billingAddressErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed billing address load', () => {
      const error = 'error';
      const expected = cold('a', { a: [error] });
      facade.dispatch(new DaffCartBillingAddressLoadFailure(error));
      expect(facade.billingAddressErrors$).toBeObservable(expected);
    });
  });

  describe('shippingAddressErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: [] });
      expect(facade.shippingAddressErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed shipping address load', () => {
      const error = 'error';
      const expected = cold('a', { a: [error] });
      facade.dispatch(new DaffCartShippingAddressLoadFailure(error));
      expect(facade.shippingAddressErrors$).toBeObservable(expected);
    });
  });

  describe('shippingInformationErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: [] });
      expect(facade.shippingInformationErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed shipping information load', () => {
      const error = 'error';
      const expected = cold('a', { a: [error] });
      facade.dispatch(new DaffCartShippingInformationLoadFailure(error));
      expect(facade.shippingInformationErrors$).toBeObservable(expected);
    });
  });

  describe('shippingMethodsErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: [] });
      expect(facade.shippingMethodsErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed shipping methods load', () => {
      const error = 'error';
      const expected = cold('a', { a: [error] });
      facade.dispatch(new DaffCartShippingMethodsLoadFailure(error));
      expect(facade.shippingMethodsErrors$).toBeObservable(expected);
    });
  });

  describe('paymentErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: [] });
      expect(facade.paymentErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed payment load', () => {
      const error = 'error';
      const expected = cold('a', { a: [error] });
      facade.dispatch(new DaffCartPaymentLoadFailure(error));
      expect(facade.paymentErrors$).toBeObservable(expected);
    });
  });

  describe('paymentMethodsErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: [] });
      expect(facade.paymentMethodsErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed payment methods load', () => {
      const error = 'error';
      const expected = cold('a', { a: [error] });
      facade.dispatch(new DaffCartPaymentMethodsLoadFailure(error));
      expect(facade.paymentMethodsErrors$).toBeObservable(expected);
    });
  });

  describe('couponErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: [] });
      expect(facade.couponErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed coupon list', () => {
      const error = 'error';
      const expected = cold('a', { a: [error] });
      facade.dispatch(new DaffCartCouponListFailure(error));
      expect(facade.couponErrors$).toBeObservable(expected);
    });
  });

  describe('id$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });
      expect(facade.id$).toBeObservable(expected);
    });

    it('should be the cart id upon a successful cart creation', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.id });
      facade.dispatch(new DaffCartCreateSuccess(cart));
      expect(facade.id$).toBeObservable(expected);
    });
  });

  describe('subtotal$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });
      expect(facade.subtotal$).toBeObservable(expected);
    });

    it('should be the cart subtotal upon a successful cart load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalExcludingTax).value });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.subtotal$).toBeObservable(expected);
    });
  });

  describe('grandTotal$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });
      expect(facade.grandTotal$).toBeObservable(expected);
    });

    it('should be the cart grand total upon a successful cart load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.totals.find(total => total.name === DaffCartTotalTypeEnum.grandTotal).value });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.grandTotal$).toBeObservable(expected);
    });
  });

  describe('subtotalExcludingTax$', () => {

    it('should be the cart subtotal excluding tax upon a successful cart load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalExcludingTax).value });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.subtotalExcludingTax$).toBeObservable(expected);
    });
  });

  describe('subtotalIncludingTax$', () => {

    it('should be the cart subtotal including tax upon a successful cart load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalIncludingTax).value });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.subtotalIncludingTax$).toBeObservable(expected);
    });
  });

  describe('subtotalWithDiscountExcludingTax$', () => {

    it('should be the cart subtotal with discounts excluding tax upon a successful cart load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax).value });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.subtotalWithDiscountExcludingTax$).toBeObservable(expected);
    });
  });

  describe('subtotalWithDiscountIncludingTax$', () => {

    it('should be the cart subtotal with discounts including tax upon a successful cart load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax).value });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.subtotalWithDiscountIncludingTax$).toBeObservable(expected);
    });
  });

  describe('totalDiscount$', () => {

    it('should be the cart total discount upon a successful cart load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.totals.find(total => total.name === DaffCartTotalTypeEnum.discount).value });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.totalDiscount$).toBeObservable(expected);
    });
  });

  describe('totalTax$', () => {

    it('should be the cart tax total upon a successful cart load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.totals.find(total => total.name === DaffCartTotalTypeEnum.tax).value });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.totalTax$).toBeObservable(expected);
    });
  });

  describe('shippingTotal$', () => {

    it('should be the cart shipping total upon a successful cart load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.totals.find(total => total.name === DaffCartTotalTypeEnum.shipping).value });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.shippingTotal$).toBeObservable(expected);
    });
  });

  describe('coupons$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: [] });
      expect(facade.coupons$).toBeObservable(expected);
    });

    it('should be the cart coupons upon a successful cart load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.coupons });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.coupons$).toBeObservable(expected);
    });
  });

  describe('items$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: [] });
      expect(facade.items$).toBeObservable(expected);
    });

    it('should be the cart items upon a successful cart item list', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.items });
      facade.dispatch(new DaffCartItemListSuccess(cart.items));
      expect(facade.items$).toBeObservable(expected);
    });
  });

  describe('hasOutOfStockItems$', () => {

    it('should return whether or not the cart has out of stock items', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: false });
      facade.dispatch(new DaffCartItemListSuccess(cart.items));
      expect(facade.hasOutOfStockItems$).toBeObservable(expected);
    });
  });

  describe('itemDictionary$', () => {
    it('should initially be an empty object', () => {
      const expected = cold('a', { a: {} });
      expect(facade.itemDictionary$).toBeObservable(expected);
    });

    it('should be the cart items upon a successful cart item list', () => {
      const cart = cartFactory.create();
      const expected = cold('a', {
        a:
          cart.items.reduce((acc, item) => ({
            ...acc,
            [item.item_id]: item
          }), {})
      });
      facade.dispatch(new DaffCartItemListSuccess(cart.items));
      expect(facade.itemDictionary$).toBeObservable(expected);
    });
  });

  describe('billingAddress$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });
      expect(facade.billingAddress$).toBeObservable(expected);
    });

    it('should be the cart billing address upon a successful cart billing address load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.billing_address });
      facade.dispatch(new DaffCartBillingAddressLoadSuccess(cart.billing_address));
      expect(facade.billingAddress$).toBeObservable(expected);
    });
  });

  describe('shippingAddress$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });
      expect(facade.shippingAddress$).toBeObservable(expected);
    });

    it('should be the cart shipping address upon a successful cart shipping address load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.shipping_address });
      facade.dispatch(new DaffCartShippingAddressLoadSuccess(cart.shipping_address));
      expect(facade.shippingAddress$).toBeObservable(expected);
    });
  });

  describe('payment$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });
      expect(facade.payment$).toBeObservable(expected);
    });

    it('should be the cart payment upon a successful cart payment load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.payment });
      facade.dispatch(new DaffCartPaymentLoadSuccess(cart.payment));
      expect(facade.payment$).toBeObservable(expected);
    });
  });

  describe('totals$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: [] });
      expect(facade.totals$).toBeObservable(expected);
    });

    it('should be the cart totals upon a successful cart item list', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.totals });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.totals$).toBeObservable(expected);
    });
  });

  describe('shippingInformation$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });
      expect(facade.shippingInformation$).toBeObservable(expected);
    });

    it('should be the cart shipping information upon a successful cart shipping information load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', {
        a: {
          ...cart.shipping_information,
          address_id: null
        }
      });
      facade.dispatch(new DaffCartShippingInformationLoadSuccess(cart.shipping_information));
      expect(facade.shippingInformation$).toBeObservable(expected);
    });
  });

  describe('availableShippingMethods$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: [] });
      expect(facade.availableShippingMethods$).toBeObservable(expected);
    });

    it('should be the cart available shipping methods upon a successful available shipping methods load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.available_shipping_methods });
      facade.dispatch(new DaffCartShippingMethodsLoadSuccess(cart.available_shipping_methods));
      expect(facade.availableShippingMethods$).toBeObservable(expected);
    });
  });

  describe('availablePaymentMethods$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: [] });
      expect(facade.availablePaymentMethods$).toBeObservable(expected);
    });

    it('should be the cart available payment methods upon a successful available payment methods load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.available_payment_methods });
      facade.dispatch(new DaffCartPaymentMethodsLoadSuccess(cart.available_payment_methods));
      expect(facade.availablePaymentMethods$).toBeObservable(expected);
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
          payment: null
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
            method: null
          }
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
            method: 'not in the map'
          }
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
            method: paymentMethod
          }
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
      const expected = cold('a', { a: [] });
      expect(facade.orderResultErrors$).toBeObservable(expected);
    });

    describe('when a place order request has failed', () => {
      let error;

      beforeEach(() => {
        error = 'error';
        facade.dispatch(new DaffCartPlaceOrderFailure(error));
      });

      it('should contain the error', () => {
        const expected = cold('a', { a: [error] });
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
        items: cartItems
      });
      const expected = cold('a', { a: cartItems[0].attributes });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.getConfiguredCartItemAttributes(cart.items[0].item_id)).toBeObservable(expected);
    });
  });

  describe('getCompositeCartItemOptions', () => {

    it('should be the composite cart item\'s item options', () => {
      const cartItems: DaffCompositeCartItem[] = compositeCartItemFactory.createMany(2);
      const cart = cartFactory.create({
        items: cartItems
      });
      const expected = cold('a', { a: cartItems[0].options });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.getCompositeCartItemOptions(cart.items[0].item_id)).toBeObservable(expected);
    });
  });

  describe('getCartItemDiscountedTotal', () => {

    it('should be the cart item\'s discounted total', () => {
      const cart = cartFactory.create({
        items: cartItemFactory.createMany(2)
      });
      const expected = cold('a', { a: cart.items[0].row_total - cart.items[0].total_discount });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.getCartItemDiscountedTotal(cart.items[0].item_id)).toBeObservable(expected);
    });
  });

  describe('isCartItemOutOfStock', () => {

    it('should return whether the cart item is out of stock', () => {
      const cart = cartFactory.create({
        items: cartItemFactory.createMany(2)
      });
      const expected = cold('a', { a: !cart.items[0].in_stock });
      facade.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.isCartItemOutOfStock(cart.items[0].item_id)).toBeObservable(expected);
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
      })
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
      })
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
          shipping_information: shippingMethodFactory.create()
        });
        facade.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should be true', () => {
        const expected = cold('a', { a: true });
        expect(facade.hasShippingMethod$).toBeObservable(expected);
      })
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
      })
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
          items: cartItemFactory.createMany(1),
          shipping_address: cartAddressFactory.create(),
          billing_address: cartAddressFactory.create(),
          payment: paymentFactory.create(),
          shipping_information: shippingMethodFactory.create()
        });
        facade.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should be true', () => {
        const expected = cold('a', { a: true });
        expect(facade.canPlaceOrder$).toBeObservable(expected);
      })
    });

    it('should initially be false', () => {
      const expected = cold('a', { a: false });
      expect(facade.canPlaceOrder$).toBeObservable(expected);
    });
  });
});
