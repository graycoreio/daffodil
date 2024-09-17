import {
  Inject,
  Injectable,
} from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DaffCart,
  DaffCartOrderResult,
  DaffCartTotal,
  DaffCartPaymentMethodIdMap,
  DaffConfigurableCartItemAttribute,
  DaffCompositeCartItemOption,
  DaffCartItemDiscount,
} from '@daffodil/cart';
import {
  DaffOperationEntity,
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';

import { DaffCartFacadeInterface } from './cart-facade.interface';
import { DaffCartOperationType } from '../../reducers/cart-operation-type.enum';
import { DaffCartErrors } from '../../reducers/errors/cart-errors.type';
import { DaffCartLoading } from '../../reducers/loading/cart-loading.type';
import {
  DaffCartStateRootSlice,
  DaffCartResolveState,
} from '../../reducers/public_api';
import {
  getDaffCartSelectors,
  DaffCartMemoizedSelectors,
} from '../../selectors/public_api';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCartFacade<
  T extends DaffCart = DaffCart,
  V extends DaffCartOrderResult = DaffCartOrderResult,
> implements DaffCartFacadeInterface<T, V> {
  cart$: Observable<T>;

  resolved$: Observable<DaffCartResolveState>;

  loadingObject$: Observable<DaffCartLoading>;
  featureLoading$: Observable<boolean>;
  featureResolving$: Observable<boolean>;
  featureMutating$: Observable<boolean>;
  loading$: Observable<boolean>;
  resolving$: Observable<boolean>;
  mutating$: Observable<boolean>;
  billingAddressLoading$: Observable<boolean>;
  billingAddressResolving$: Observable<boolean>;
  billingAddressMutating$: Observable<boolean>;
  shippingAddressLoading$: Observable<boolean>;
  shippingAddressResolving$: Observable<boolean>;
  shippingAddressMutating$: Observable<boolean>;
  shippingInformationLoading$: Observable<boolean>;
  shippingInformationResolving$: Observable<boolean>;
  shippingInformationMutating$: Observable<boolean>;
  shippingMethodsLoading$: Observable<boolean>;
  shippingMethodsResolving$: Observable<boolean>;
  paymentLoading$: Observable<boolean>;
  paymentResolving$: Observable<boolean>;
  paymentMutating$: Observable<boolean>;
  paymentMethodsLoading$: Observable<boolean>;
  paymentMethodsResolving$: Observable<boolean>;
  couponLoading$: Observable<boolean>;
  couponResolving$: Observable<boolean>;
  couponMutating$: Observable<boolean>;
  itemLoading$: Observable<boolean>;
  itemAdding$: Observable<boolean>;
  itemResolving$: Observable<boolean>;
  itemMutating$: Observable<boolean>;

  errors$: Observable<DaffCartErrors>;
  cartErrors$: Observable<DaffCartErrors[DaffCartOperationType.Cart]>;
  itemErrors$: Observable<DaffCartErrors[DaffCartOperationType.Item]>;
  billingAddressErrors$: Observable<DaffCartErrors[DaffCartOperationType.BillingAddress]>;
  shippingAddressErrors$: Observable<DaffCartErrors[DaffCartOperationType.ShippingAddress]>;
  shippingInformationErrors$: Observable<DaffCartErrors[DaffCartOperationType.ShippingInformation]>;
  shippingMethodsErrors$: Observable<DaffCartErrors[DaffCartOperationType.ShippingMethods]>;
  paymentErrors$: Observable<DaffCartErrors[DaffCartOperationType.Payment]>;
  paymentMethodsErrors$: Observable<DaffCartErrors[DaffCartOperationType.PaymentMethods]>;
  couponErrors$: Observable<DaffCartErrors[DaffCartOperationType.Coupon]>;

  itemEntities$: Observable<DaffOperationEntity<T['items'][number]>[]>;
  totalItems$: Observable<number>;
  hasOutOfStockItems$: Observable<boolean>;
  outOfStockItems$: Observable<DaffOperationEntity<T['items'][number]>[]>;
  inStockItems$: Observable<DaffOperationEntity<T['items'][number]>[]>;
  itemDictionary$: Observable<Dictionary<DaffOperationEntity<T['items'][number]>>>;
  paymentId$: Observable<any>;

  isCartEmpty$: Observable<boolean>;
  isBillingSameAsShipping$: Observable<boolean>;

  hasBillingAddress$: Observable<boolean>;
  hasShippingAddress$: Observable<boolean>;
  hasShippingMethod$: Observable<boolean>;
  hasPaymentMethod$: Observable<boolean>;
  canPlaceOrder$: Observable<boolean>;

  orderResultLoading$: Observable<boolean>;
  orderResultErrors$: Observable<DaffStateError[]>;
  orderResult$: Observable<V>;
  orderResultId$: Observable<V['orderId']>;
  orderResultCartId$: Observable<V['cartId']>;
  hasOrderResult$: Observable<boolean>;

  private _selectCartItemConfiguredAttributes: DaffCartMemoizedSelectors<T, V>['selectCartItemConfiguredAttributes'];
  private _selectCartItemCompositeOptions: DaffCartMemoizedSelectors<T, V>['selectCartItemCompositeOptions'];
  private _selectIsCartItemOutOfStock: DaffCartMemoizedSelectors<T, V>['selectIsCartItemOutOfStock'];

  constructor(
    private store: Store<DaffCartStateRootSlice<T, V>>,
    // typing this as `Record<string, any>` or `object` fails the build
    // because Angular explicitly types this as `Object`
    // eslint-disable-next-line @typescript-eslint/no-restricted-types
    @Inject(DaffCartPaymentMethodIdMap) private paymentMethodMap: object,
  ) {
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
      selectCartItemMutating,

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

      selectAllCartItems,
      selectCartHasOutOfStockItems,
      selectOutOfStockCartItems,
      selectInStockCartItems,
      selectCartItemEntities,
      selectTotalNumberOfCartItems,
      selectCartItemConfiguredAttributes,
      selectCartItemCompositeOptions,

      selectIsCartEmpty,
      selectIsBillingSameAsShipping,

      selectCartOrderLoading,
      selectCartOrderErrors,
      selectCartOrderValue,
      selectCartOrderId,
      selectCartOrderCartId,
      selectHasOrderResult,
      selectIsCartItemOutOfStock,

      selectHasBillingAddress,
      selectHasShippingAddress,
      selectHasShippingMethod,
      selectHasPaymentMethod,
      selectCanPlaceOrder,
    } = getDaffCartSelectors<T, V>();
    this._selectCartItemConfiguredAttributes = selectCartItemConfiguredAttributes;
    this._selectCartItemCompositeOptions = selectCartItemCompositeOptions;
    this._selectIsCartItemOutOfStock = selectIsCartItemOutOfStock;

    this.cart$ = this.store.pipe(select(selectCartValue));

    this.resolved$ = this.store.pipe(select(selectCartResolved));

    this.loadingObject$ = this.store.pipe(select(selectCartLoadingObject));
    this.featureLoading$ = this.store.pipe(select(selectCartFeatureLoading));
    this.featureResolving$ = this.store.pipe(select(selectCartFeatureResolving));
    this.featureMutating$ = this.store.pipe(select(selectCartFeatureMutating));
    this.loading$ = this.store.pipe(select(selectCartLoading));
    this.resolving$ = this.store.pipe(select(selectCartResolving));
    this.mutating$ = this.store.pipe(select(selectCartMutating));
    this.billingAddressLoading$ = this.store.pipe(select(selectBillingAddressLoading));
    this.billingAddressResolving$ = this.store.pipe(select(selectBillingAddressResolving));
    this.billingAddressMutating$ = this.store.pipe(select(selectBillingAddressMutating));
    this.shippingAddressLoading$ = this.store.pipe(select(selectShippingAddressLoading));
    this.shippingAddressResolving$ = this.store.pipe(select(selectShippingAddressResolving));
    this.shippingAddressMutating$ = this.store.pipe(select(selectShippingAddressMutating));
    this.shippingInformationLoading$ = this.store.pipe(select(selectShippingInformationLoading));
    this.shippingInformationResolving$ = this.store.pipe(select(selectShippingInformationResolving));
    this.shippingInformationMutating$ = this.store.pipe(select(selectShippingInformationMutating));
    this.shippingMethodsLoading$ = this.store.pipe(select(selectShippingMethodsLoading));
    this.shippingMethodsResolving$ = this.store.pipe(select(selectShippingMethodsResolving));
    this.paymentLoading$ = this.store.pipe(select(selectPaymentLoading));
    this.paymentResolving$ = this.store.pipe(select(selectPaymentResolving));
    this.paymentMutating$ = this.store.pipe(select(selectPaymentMutating));
    this.paymentMethodsLoading$ = this.store.pipe(select(selectPaymentMethodsLoading));
    this.paymentMethodsResolving$ = this.store.pipe(select(selectPaymentMethodsResolving));
    this.couponLoading$ = this.store.pipe(select(selectCouponLoading));
    this.couponResolving$ = this.store.pipe(select(selectCouponResolving));
    this.couponMutating$ = this.store.pipe(select(selectCouponMutating));
    this.itemLoading$ = this.store.pipe(select(selectItemLoading));
    this.itemAdding$ = this.store.pipe(select(selectItemAdding));
    this.itemResolving$ = this.store.pipe(select(selectItemResolving));
    this.itemMutating$ = this.store.pipe(select(selectCartItemMutating));

    this.errors$ = this.store.pipe(select(selectCartErrorsObject));
    this.cartErrors$ = this.store.pipe(select(selectCartErrors));
    this.itemErrors$ = this.store.pipe(select(selectItemErrors));
    this.billingAddressErrors$ = this.store.pipe(select(selectBillingAddressErrors));
    this.shippingAddressErrors$ = this.store.pipe(select(selectShippingAddressErrors));
    this.shippingInformationErrors$ = this.store.pipe(select(selectShippingInformationErrors));
    this.shippingMethodsErrors$ = this.store.pipe(select(selectShippingMethodsErrors));
    this.paymentErrors$ = this.store.pipe(select(selectPaymentErrors));
    this.paymentMethodsErrors$ = this.store.pipe(select(selectPaymentMethodsErrors));
    this.couponErrors$ = this.store.pipe(select(selectCouponErrors));

    this.itemEntities$ = this.store.pipe(select(selectAllCartItems));
    this.totalItems$ = this.store.pipe(select(selectTotalNumberOfCartItems));
    this.hasOutOfStockItems$ = this.store.pipe(select(selectCartHasOutOfStockItems));
    this.outOfStockItems$ = this.store.pipe(select(selectOutOfStockCartItems));
    this.inStockItems$ = this.store.pipe(select(selectInStockCartItems));
    this.itemDictionary$ = this.store.pipe(select(selectCartItemEntities));
    this.paymentId$ = this.cart$.pipe(
      map((cart) => cart?.payment),
      map(payment =>
        payment && payment.method
          ? this.paymentMethodMap[payment.method]
          : null,
      ),
    );

    this.isCartEmpty$ = this.store.pipe(select(selectIsCartEmpty));
    this.isBillingSameAsShipping$ = this.store.pipe(select(selectIsBillingSameAsShipping));

    this.hasBillingAddress$ = this.store.pipe(select(selectHasBillingAddress));
    this.hasShippingAddress$ = this.store.pipe(select(selectHasShippingAddress));
    this.hasShippingMethod$ = this.store.pipe(select(selectHasShippingMethod));
    this.hasPaymentMethod$ = this.store.pipe(select(selectHasPaymentMethod));
    this.canPlaceOrder$ = this.store.pipe(select(selectCanPlaceOrder));

    this.orderResultLoading$ = this.store.pipe(select(selectCartOrderLoading));
    this.orderResultErrors$ = this.store.pipe(select(selectCartOrderErrors));
    this.orderResult$ = this.store.pipe(select(selectCartOrderValue));
    this.orderResultId$ = this.store.pipe(select(selectCartOrderId));
    this.orderResultCartId$ = this.store.pipe(select(selectCartOrderCartId));
    this.hasOrderResult$ = this.store.pipe(select(selectHasOrderResult));
  }

  getConfiguredCartItemAttributes(itemId: T['items'][number]['id']): Observable<DaffConfigurableCartItemAttribute[]> {
    return this.store.pipe(select(this._selectCartItemConfiguredAttributes(itemId)));
  };

  getCompositeCartItemOptions(itemId: T['items'][number]['id']): Observable<DaffCompositeCartItemOption[]> {
    return this.store.pipe(select(this._selectCartItemCompositeOptions(itemId)));
  };

  isCartItemOutOfStock(itemId: T['items'][number]['id']): Observable<boolean> {
    return this.store.pipe(select(this._selectIsCartItemOutOfStock(itemId)));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
