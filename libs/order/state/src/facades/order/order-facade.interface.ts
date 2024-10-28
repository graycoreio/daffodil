import { Dictionary } from '@ngrx/entity';
import { Observable } from 'rxjs';

import {
  DaffStateError,
  DaffOperationStateFacadeInterface,
} from '@daffodil/core/state';
import {
  DaffOrder,
  DaffOrderTotal,
} from '@daffodil/order';

import { DaffOrderReducerState } from '../../reducers/public_api';

export interface DaffOrderFacadeInterface<T extends DaffOrder = DaffOrder> extends DaffOperationStateFacadeInterface<DaffOrderReducerState> {
  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;
  orders$: Observable<T[]>;
  orderIds$: Observable<T['id'][]>;
  orderCount$: Observable<number>;
  orderEntities$: Observable<Dictionary<T>>;

  /**
   * @deprecated in favor of {@link DaffCheckoutPlacedOrderFacadeInterface#placedOrder$} Deprecated in version 0.78.0. Will be removed in version 0.81.0.
   */
  placedOrder$: Observable<T>;
  /**
   * @deprecated in favor of {@link DaffCheckoutPlacedOrderFacadeInterface#hasPlacedOrder$} Deprecated in version 0.78.0. Will be removed in version 0.81.0.
   */
  hasPlacedOrder$: Observable<boolean>;

  getOrder$(orderId: T['id']): Observable<T>;
  getTotals$(orderId: T['id']): Observable<T['totals']>;
  getAppliedCodes$(orderId: T['id']): Observable<T['applied_codes']>;
  getItems$(orderId: T['id']): Observable<T['items']>;
  getBillingAddresses$(orderId: T['id']): Observable<T['billing_addresses']>;
  getShippingAddresses$(orderId: T['id']): Observable<T['shipping_addresses']>;
  getShipments$(orderId: T['id']): Observable<T['shipments']>;
  getPayment$(orderId: T['id']): Observable<T['payment']>;
  getInvoices$(orderId: T['id']): Observable<T['invoices']>;
  getCredits$(orderId: T['id']): Observable<T['credits']>;

  /**
   * The specified order's grand total.
   */
  getGrandTotal$(orderId: T['id']): Observable<DaffOrderTotal>;
  /**
   * The specified order's subtotal.
   */
  getSubtotal$(orderId: T['id']): Observable<DaffOrderTotal>;
  /**
   * The specified order's shipping total.
   */
  getShippingTotal$(orderId: T['id']): Observable<DaffOrderTotal>;
  /**
   * The specified order's discount total.
   */
  getDiscountTotal$(orderId: T['id']): Observable<DaffOrderTotal>;
  /**
   * Whether the specified order has a discount.
   */
  hasDiscount$(orderId: T['id']): Observable<boolean>;
  /**
   * The specified order's tax total.
   */
  getTaxTotal$(orderId: T['id']): Observable<DaffOrderTotal>;
}
