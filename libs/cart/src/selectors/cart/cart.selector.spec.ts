import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffLoadingState } from '@daffodil/core/state';
import {
  DaffCart,
  DaffCartLoadSuccess,
  DaffCartPlaceOrderSuccess,
  DaffResolveCartSuccess,
	DaffCartTotalTypeEnum, DaffCartBillingAddressLoad, DaffCartItemLoad, DaffCartLoad, DaffCartPaymentLoad, DaffCartPaymentMethodsLoad, DaffCartShippingAddressLoad, DaffCartShippingInformationLoad, DaffCartShippingMethodsLoad, DaffCartCouponList, DaffCartClear, DaffCartItemDelete, DaffCartBillingAddressUpdate, DaffCartShippingAddressUpdate, DaffCartShippingInformationDelete, DaffCartPaymentRemove, DaffCartCouponRemoveAll
} from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartItemFactory,
  DaffCartAddressFactory,
  DaffCartPaymentFactory,
  DaffCartShippingRateFactory
} from '@daffodil/cart/testing';

import { daffCartReducers, DaffCartReducersState } from '../../reducers/public_api';
import { getCartSelectors } from './cart.selector';
import { DaffCartOperationType } from '../../reducers/cart-operation-type.enum';
import { DaffCartErrors } from '../../reducers/errors/cart-errors.type';
import { DaffCartLoading } from '../../reducers/loading/cart-loading.type';

describe('Cart | Selector | Cart', () => {
  let store: Store<DaffCartReducersState>;

	let cartFactory: DaffCartFactory;
	let cartItemFactory: DaffCartItemFactory;
  let cartAddressFactory: DaffCartAddressFactory;
  let paymentFactory: DaffCartPaymentFactory;
  let shippingMethodFactory: DaffCartShippingRateFactory;

  let orderId: string;
  let cart: DaffCart;
  let loading: DaffCartLoading;
	let errors: DaffCartErrors;
	const {
		selectCartResolved,
    selectCartValue,

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
    selectItemResolving,
    selectItemMutating,

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

		selectCartId,
		selectCartSubtotal,
		selectCartGrandTotal,
		selectCartSubtotalExcludingTax,
		selectCartSubtotalIncludingTax,
		selectCartSubtotalWithDiscountExcludingTax,
		selectCartSubtotalWithDiscountIncludingTax,
		selectCartTotalTax,
		selectCartTotalDiscount,
		selectCartShippingTotal,
		selectCartCoupons,
		selectCartItems,
		selectCartHasOutOfStockItems,
		selectCartBillingAddress,
		selectCartShippingAddress,
		selectCartPayment,
		selectCartTotals,
		selectCartShippingInformation,
		selectCartAvailableShippingMethods,
    selectCartAvailablePaymentMethods,

		selectIsCartEmpty,
    selectCartItemDiscountedRowTotal,
    selectIsBillingSameAsShipping,

    selectHasBillingAddress,
    selectHasShippingAddress,
    selectHasShippingMethod,
    selectHasPaymentMethod,
    selectCanPlaceOrder
  } = getCartSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
        })
      ]
    });

    store = TestBed.get(Store);

    cartFactory = TestBed.get(DaffCartFactory);
    cartItemFactory = TestBed.get(DaffCartItemFactory);
    cartAddressFactory = TestBed.get(DaffCartAddressFactory);
    paymentFactory = TestBed.get(DaffCartPaymentFactory);
    shippingMethodFactory = TestBed.get(DaffCartShippingRateFactory);

    orderId = 'id';
    cart = cartFactory.create({
      items: cartItemFactory.createMany(2),
      shipping_address: cartAddressFactory.create(),
      billing_address: cartAddressFactory.create(),
      payment: paymentFactory.create(),
      shipping_information: shippingMethodFactory.create()
    });
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

    store.dispatch(new DaffCartLoadSuccess(cart));
    store.dispatch(new DaffCartPlaceOrderSuccess({
      orderId,
      cartId: cart.id,
    }));
  });

  describe('selectCartValue', () => {
    it('returns cart state', () => {
      const selector = store.pipe(select(selectCartValue));
      const expected = cold('a', {a: cart});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartResolved', () => {
    it('should initially be false', () => {
      const selector = store.pipe(select(selectCartResolved));
      const expected = cold('a', {a: false});

      expect(selector).toBeObservable(expected);
    })

    it('it should be true after cart resolution success', () => {
      const selector = store.pipe(select(selectCartResolved));
      const expected = cold('a', {a: true});
      store.dispatch(new DaffResolveCartSuccess());

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartLoadingObject', () => {
    it('returns cart loading object state', () => {
      const selector = store.pipe(select(selectCartLoadingObject));
      const expected = cold('a', {a: loading});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartFeatureLoading', () => {
    describe('when all the cart operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoad())
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart item operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemLoad('itemId'))
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart billing operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartBillingAddressLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping address operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingAddressLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingInformationLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping methods operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingMethodsLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentLoad())
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment methods operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentMethodsLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart coupon operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartCouponList())
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureLoading));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCartFeatureResolving', () => {
    describe('when all the cart operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoad())
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart item resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemLoad('itemId'))
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart billing resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartBillingAddressLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping address resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingAddressLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingInformationLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping methods resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingMethodsLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentLoad())
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment methods resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentMethodsLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart coupon resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartCouponList())
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureResolving));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCartFeatureMutating', () => {
    describe('when all the cart operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartClear())
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart item mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemDelete('itemId'))
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart billing mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartBillingAddressUpdate({}))
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping address mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingAddressUpdate({}))
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingInformationDelete())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentRemove())
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart coupon mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartCouponRemoveAll())
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartFeatureMutating));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCartLoading', () => {
    describe('when the cart operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartLoading));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoad())
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartLoading));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCartResolving', () => {
    describe('when the cart operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartResolving));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartLoad())
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartResolving));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCartMutating', () => {
    describe('when the cart operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartMutating));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartClear())
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartMutating));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectItemLoading', () => {
    describe('when the cart item operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectItemLoading));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart item operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemLoad('itemId'))
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectItemLoading));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectItemResolving', () => {
    describe('when the cart item operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectItemResolving));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart item resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemLoad('itemId'))
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectItemResolving));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectItemMutating', () => {
    describe('when the cart item operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectItemMutating));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart item mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartItemDelete('itemId'))
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectItemMutating));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectBillingAddressLoading', () => {
    describe('when the cart billing operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectBillingAddressLoading));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart billing operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartBillingAddressLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectBillingAddressLoading));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectBillingAddressResolving', () => {
    describe('when the cart billing operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectBillingAddressResolving));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart billing resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartBillingAddressLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectBillingAddressResolving));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectBillingAddressMutating', () => {
    describe('when the cart billing operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectBillingAddressMutating));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart billing mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartBillingAddressUpdate({}))
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectBillingAddressMutating));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectShippingAddressLoading', () => {
    describe('when the cart shipping address operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingAddressLoading));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping address operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingAddressLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingAddressLoading));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectShippingAddressResolving', () => {
    describe('when the cart shipping address operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingAddressResolving));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping address resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingAddressLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingAddressResolving));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectShippingAddressMutating', () => {
    describe('when the cart shipping address operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingAddressMutating));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping address mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingAddressUpdate({}))
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingAddressMutating));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectShippingInformationLoading', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingInformationLoading));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingInformationLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingInformationLoading));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectShippingInformationResolving', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingInformationResolving));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingInformationLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingInformationResolving));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectShippingInformationMutating', () => {
    describe('when the cart shipping operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingInformationMutating));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingInformationDelete())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingInformationMutating));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectShippingMethodsLoading', () => {
    describe('when the cart shipping methods operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingMethodsLoading));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping methods operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingMethodsLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingMethodsLoading));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectShippingMethodsResolving', () => {
    describe('when the cart shipping methods operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectShippingMethodsResolving));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart shipping methods resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartShippingMethodsLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectShippingMethodsResolving));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectPaymentLoading', () => {
    describe('when the cart payment operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectPaymentLoading));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentLoad())
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectPaymentLoading));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectPaymentResolving', () => {
    describe('when the cart payment operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectPaymentResolving));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentLoad())
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectPaymentResolving));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectPaymentMutating', () => {
    describe('when the cart payment operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectPaymentMutating));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentRemove())
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectPaymentMutating));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectPaymentMethodsLoading', () => {
    describe('when the cart payment methods operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectPaymentMethodsLoading));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment methods operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentMethodsLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectPaymentMethodsLoading));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectPaymentMethodsResolving', () => {
    describe('when the cart payment methods operations have completed', () => {
      it('should return false state', () => {
        const selector = store.pipe(select(selectPaymentMethodsResolving));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart payment methods resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPaymentMethodsLoad())
      });

      it('should return true state', () => {
        const selector = store.pipe(select(selectPaymentMethodsResolving));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCouponLoading', () => {
    describe('when the cart coupon operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCouponLoading));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart coupon operations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartCouponList())
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCouponLoading));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCouponResolving', () => {
    describe('when the cart coupon operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCouponResolving));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart coupon resolutions have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartCouponList())
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCouponResolving));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCouponMutating', () => {
    describe('when the cart coupon operations have completed', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCouponMutating));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart coupon mutations have not completed', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartCouponRemoveAll())
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCouponMutating));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCartErrorsObject', () => {
    it('returns cart errors object state', () => {
      const selector = store.pipe(select(selectCartErrorsObject));
      const expected = cold('a', {a: errors});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartErrors', () => {
    it('returns cart errors state', () => {
      const selector = store.pipe(select(selectCartErrors));
      const expected = cold('a', {a: errors[DaffCartOperationType.Cart]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectItemErrors', () => {
    it('returns item errors state', () => {
      const selector = store.pipe(select(selectItemErrors));
      const expected = cold('a', {a: errors[DaffCartOperationType.Item]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectBillingAddressErrors', () => {
    it('returns billing address errors state', () => {
      const selector = store.pipe(select(selectBillingAddressErrors));
      const expected = cold('a', {a: errors[DaffCartOperationType.BillingAddress]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectShippingAddressErrors', () => {
    it('returns shipping address errors state', () => {
      const selector = store.pipe(select(selectShippingAddressErrors));
      const expected = cold('a', {a: errors[DaffCartOperationType.ShippingAddress]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectShippingInformationErrors', () => {
    it('returns shipping information errors state', () => {
      const selector = store.pipe(select(selectShippingInformationErrors));
      const expected = cold('a', {a: errors[DaffCartOperationType.ShippingInformation]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectShippingMethodsErrors', () => {
    it('returns shipping methods errors state', () => {
      const selector = store.pipe(select(selectShippingMethodsErrors));
      const expected = cold('a', {a: errors[DaffCartOperationType.ShippingMethods]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPaymentErrors', () => {
    it('returns payment errors state', () => {
      const selector = store.pipe(select(selectPaymentErrors));
      const expected = cold('a', {a: errors[DaffCartOperationType.Payment]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPaymentMethodsErrors', () => {
    it('returns payment methods errors state', () => {
      const selector = store.pipe(select(selectPaymentMethodsErrors));
      const expected = cold('a', {a: errors[DaffCartOperationType.PaymentMethods]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCouponErrors', () => {
    it('returns coupon errors state', () => {
      const selector = store.pipe(select(selectCouponErrors));
      const expected = cold('a', {a: errors[DaffCartOperationType.Coupon]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartId', () => {
    it('returns cart ID', () => {
      const selector = store.pipe(select(selectCartId));
      const expected = cold('a', {a: cart.id});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartSubtotal', () => {
    it('returns cart subtotal', () => {
      const selector = store.pipe(select(selectCartSubtotal));
      const expected = cold('a', {a: cart.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalExcludingTax).value});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartGrandTotal', () => {
    it('returns cart grand total', () => {
      const selector = store.pipe(select(selectCartGrandTotal));
      const expected = cold('a', {a: cart.totals.find(total => total.name === DaffCartTotalTypeEnum.grandTotal).value});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartSubtotalExcludingTax', () => {
    it('returns cart subtotal excluding tax', () => {
      const selector = store.pipe(select(selectCartSubtotalExcludingTax));
      const expected = cold('a', {a: cart.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalExcludingTax).value});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartSubtotalIncludingTax', () => {
    it('returns cart subtotal including tax', () => {
      const selector = store.pipe(select(selectCartSubtotalIncludingTax));
      const expected = cold('a', {a: cart.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalIncludingTax).value});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartSubtotalWithDiscountExcludingTax', () => {
    it('returns cart subtotal with discount excluding tax', () => {
      const selector = store.pipe(select(selectCartSubtotalWithDiscountExcludingTax));
      const expected = cold('a', {a: cart.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax).value});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartSubtotalWithDiscountIncludingTax', () => {
    it('returns cart subtotal with discount including tax', () => {
      const selector = store.pipe(select(selectCartSubtotalWithDiscountIncludingTax));
      const expected = cold('a', {a: cart.totals.find(total => total.name === DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax).value});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartTotalTax', () => {
    it('returns cart total tax', () => {
      const selector = store.pipe(select(selectCartTotalTax));
      const expected = cold('a', {a: cart.totals.find(total => total.name === DaffCartTotalTypeEnum.tax).value});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartTotalDiscount', () => {
    it('returns cart total discount', () => {
      const selector = store.pipe(select(selectCartTotalDiscount));
      const expected = cold('a', {a: cart.totals.find(total => total.name === DaffCartTotalTypeEnum.discount).value});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartShippingTotal', () => {
    it('returns cart shipping total', () => {
      const selector = store.pipe(select(selectCartShippingTotal));
      const expected = cold('a', {a: cart.totals.find(total => total.name === DaffCartTotalTypeEnum.shipping).value});

      expect(selector).toBeObservable(expected);
    });
	});

  describe('selectCartCoupons', () => {
    it('returns cart coupons', () => {
      const selector = store.pipe(select(selectCartCoupons));
      const expected = cold('a', {a: cart.coupons});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartItems', () => {
    it('returns cart items', () => {
      const selector = store.pipe(select(selectCartItems));
      const expected = cold('a', {a: cart.items});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartHasOutOfStockItems', () => {
    it('should return true when at least one cart item is out of stock', () => {
      cart.items[0].in_stock = false;
			store.dispatch(new DaffCartLoadSuccess(cart));
			const selector = store.pipe(select(selectCartHasOutOfStockItems));
      const expected = cold('a', {a: true });

      expect(selector).toBeObservable(expected);
		});

    it('should return false when no items are out of stock', () => {
			const selector = store.pipe(select(selectCartHasOutOfStockItems));
      const expected = cold('a', {a: false });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartBillingAddress', () => {
    it('returns cart billing address', () => {
      const selector = store.pipe(select(selectCartBillingAddress));
      const expected = cold('a', {a: cart.billing_address});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartShippingAddress', () => {
    it('returns cart shipping address', () => {
      const selector = store.pipe(select(selectCartShippingAddress));
      const expected = cold('a', {a: cart.shipping_address});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartPayment', () => {
    it('returns cart payment', () => {
      const selector = store.pipe(select(selectCartPayment));
      const expected = cold('a', {a: cart.payment});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartTotals', () => {
    it('returns cart totals', () => {
      const selector = store.pipe(select(selectCartTotals));
      const expected = cold('a', {a: cart.totals});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartShippingInformation', () => {
    it('returns cart shipping information', () => {
      const selector = store.pipe(select(selectCartShippingInformation));
      const expected = cold('a', {a: cart.shipping_information});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartAvailableShippingMethods', () => {
    it('returns cart available shipping methods', () => {
      const selector = store.pipe(select(selectCartAvailableShippingMethods));
      const expected = cold('a', {a: cart.available_shipping_methods});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartAvailablePaymentMethods', () => {
    it('returns cart available payment methods', () => {
      const selector = store.pipe(select(selectCartAvailablePaymentMethods));
      const expected = cold('a', {a: cart.available_payment_methods});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectIsCartEmpty', () => {
    it('selects whether the cart is empty', () => {
      const selector = store.pipe(select(selectIsCartEmpty));
      const expected = cold('a', {a: cart.items.length === 0});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartItemDiscountedRowTotal', () => {
    it('selects the discounted total of the given cart item id', () => {
      const rowTotal = 118.54;
      const discount = 15.10000034;
      const cartItemId = cart.items[0].item_id;
      cart.items[0].row_total = rowTotal;
      cart.items[0].total_discount = discount;
			const selector = store.pipe(select(selectCartItemDiscountedRowTotal, { id: cartItemId }));
      const expected = cold('a', {a: 103.43999966});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectIsBillingSameAsShipping | selects whether the cart\'s billing and shipping address are the same', () => {
    describe('when the cart has a billing and shipping address', () => {
      describe('and the shipping and billing address are the same', () => {
        beforeEach(() => {
          cart.shipping_address = cart.billing_address;
          store.dispatch(new DaffCartLoadSuccess(cart));
        });

        it('should return true', () => {
          const selector = store.pipe(select(selectIsBillingSameAsShipping));
          const expected = cold('a', {a: true});

          expect(selector).toBeObservable(expected);
        });
      });

      describe('and the shipping and billing address are not the same', () => {
        beforeEach(() => {
          cart.shipping_address.street = `${cart.shipping_address.street} ${cart.billing_address.street}`;
          store.dispatch(new DaffCartLoadSuccess(cart));
        });

        it('should return false', () => {
          const selector = store.pipe(select(selectIsBillingSameAsShipping));
          const expected = cold('a', {a: false});

          expect(selector).toBeObservable(expected);
        });
      });
    });

    describe('when the cart does not have a shipping address', () => {
      beforeEach(() => {
        cart.shipping_address = null;
        store.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectIsBillingSameAsShipping));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart does not have a billing address', () => {
      beforeEach(() => {
        cart.billing_address = null;
        store.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectIsBillingSameAsShipping));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectHasBillingAddress | selects whether the cart has a billing address', () => {
    describe('when the cart has a billing address', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectHasBillingAddress));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart does not have a billing address', () => {
      beforeEach(() => {
        cart.billing_address = null;
        store.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectHasBillingAddress));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectHasShippingAddress | selects whether the cart has a shipping address', () => {
    describe('when the cart has a shipping address', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectHasShippingAddress));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart does not have a shipping address', () => {
      beforeEach(() => {
        cart.shipping_address = null;
        store.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectHasShippingAddress));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectHasShippingMethod | selects whether the cart has a selected shipping method', () => {
    describe('when the cart has a selected shipping method', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectHasShippingMethod));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart does not have a selected shipping method', () => {
      beforeEach(() => {
        cart.shipping_information = null;
        store.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectHasShippingMethod));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectHasPaymentMethod | selects whether the cart has a selected payment method', () => {
    describe('when the cart has a selected payment method', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectHasPaymentMethod));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart has a null selected payment method', () => {
      beforeEach(() => {
        cart.payment = null;
        store.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectHasPaymentMethod));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart has a empty string selected payment method', () => {
      beforeEach(() => {
        cart.payment = {method: ''};
        store.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectHasPaymentMethod));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCanPlaceOrder | selects whether the cart has all the required fields for placing an order', () => {
    describe('when the cart has all the required fields for placing an order', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectCanPlaceOrder));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart does not have all the required fields for placing an order', () => {
      beforeEach(() => {
        cart.billing_address = null;
        store.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectCanPlaceOrder));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });
  });
});
