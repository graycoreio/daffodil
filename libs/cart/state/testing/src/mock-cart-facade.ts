import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import {
  DaffCart,
  DaffCartItem,
  DaffCartOrderResult,
  DaffConfigurableCartItemAttribute,
  DaffCompositeCartItemOption,
} from '@daffodil/cart';
import {
  DaffCartFacadeInterface,
  DaffCartErrors,
  DaffCartOperationType,
  DaffCartLoading,
  DaffCartResolveState,
} from '@daffodil/cart/state';
import {
  DaffOperationEntity,
  DaffStateError,
} from '@daffodil/core/state';

@Injectable({ providedIn: 'root' })
export class MockDaffCartFacade implements DaffCartFacadeInterface {
  cart$: BehaviorSubject<DaffCart> = new BehaviorSubject(null);

  resolved$: BehaviorSubject<DaffCartResolveState> = new BehaviorSubject(DaffCartResolveState.Default);

  loadingObject$: BehaviorSubject<DaffCartLoading> = new BehaviorSubject(null);
  featureLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  featureResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  featureMutating$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  resolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  mutating$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  billingAddressLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  billingAddressResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  billingAddressMutating$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  shippingAddressLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  shippingAddressResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  shippingAddressMutating$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  shippingInformationLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  shippingInformationResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  shippingInformationMutating$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  shippingMethodsLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  shippingMethodsResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  paymentLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  paymentResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  paymentMutating$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  paymentMethodsLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  paymentMethodsResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  couponLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  couponResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  couponMutating$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  itemLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  itemAdding$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  itemResolving$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  itemMutating$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  errors$: BehaviorSubject<DaffCartErrors> = new BehaviorSubject(null);
  cartErrors$: BehaviorSubject<DaffCartErrors[DaffCartOperationType.Cart]> = new BehaviorSubject([]);
  itemErrors$: BehaviorSubject<DaffCartErrors[DaffCartOperationType.Item]> = new BehaviorSubject([]);
  billingAddressErrors$: BehaviorSubject<DaffCartErrors[DaffCartOperationType.BillingAddress]> = new BehaviorSubject([]);
  shippingAddressErrors$: BehaviorSubject<DaffCartErrors[DaffCartOperationType.ShippingAddress]> = new BehaviorSubject([]);
  shippingInformationErrors$: BehaviorSubject<DaffCartErrors[DaffCartOperationType.ShippingInformation]> = new BehaviorSubject([]);
  shippingMethodsErrors$: BehaviorSubject<DaffCartErrors[DaffCartOperationType.ShippingMethods]> = new BehaviorSubject([]);
  paymentErrors$: BehaviorSubject<DaffCartErrors[DaffCartOperationType.Payment]> = new BehaviorSubject([]);
  paymentMethodsErrors$: BehaviorSubject<DaffCartErrors[DaffCartOperationType.PaymentMethods]> = new BehaviorSubject([]);
  couponErrors$: BehaviorSubject<DaffCartErrors[DaffCartOperationType.Coupon]> = new BehaviorSubject([]);

  itemEntities$: BehaviorSubject<DaffOperationEntity<DaffCartItem>[]> = new BehaviorSubject([]);
  totalItems$: BehaviorSubject<number> = new BehaviorSubject(null);
  hasOutOfStockItems$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  outOfStockItems$: BehaviorSubject<DaffOperationEntity<DaffCartItem>[]> = new BehaviorSubject([]);
  inStockItems$: BehaviorSubject<DaffOperationEntity<DaffCartItem>[]> = new BehaviorSubject([]);
  itemDictionary$: BehaviorSubject<Dictionary<DaffOperationEntity<DaffCartItem>>> = new BehaviorSubject({});
  paymentId$: BehaviorSubject<any> = new BehaviorSubject(null);

  isCartEmpty$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  isBillingSameAsShipping$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  hasBillingAddress$ = new BehaviorSubject(false);
  hasShippingAddress$ = new BehaviorSubject(false);
  hasShippingMethod$ = new BehaviorSubject(false);
  hasPaymentMethod$ = new BehaviorSubject(false);
  canPlaceOrder$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  orderResultLoading$ = new BehaviorSubject<boolean>(false);
  orderResultErrors$ = new BehaviorSubject<DaffStateError[]>([]);
  orderResult$ = new BehaviorSubject<DaffCartOrderResult>({
    orderId: null,
    cartId: null,
  });
  orderResultId$ = new BehaviorSubject<DaffCartOrderResult['orderId']>(null);
  orderResultCartId$ = new BehaviorSubject<DaffCartOrderResult['cartId']>(null);
  hasOrderResult$ = new BehaviorSubject<boolean>(false);

  getConfiguredCartItemAttributes(itemId: DaffCartItem['id']): BehaviorSubject<DaffConfigurableCartItemAttribute[]> {
    return new BehaviorSubject([]);
  }

  getCompositeCartItemOptions(itemId: DaffCartItem['id']): BehaviorSubject<DaffCompositeCartItemOption[]> {
    return new BehaviorSubject([]);
  }

  isCartItemOutOfStock(itemId: DaffCartItem['id']): BehaviorSubject<boolean> {
    return new BehaviorSubject(false);
  }

  dispatch(action: Action) {};
}
