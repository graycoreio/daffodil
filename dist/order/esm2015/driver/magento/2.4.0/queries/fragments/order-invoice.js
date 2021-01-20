/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { orderShipmentItemFragment } from './order-shipment-item';
import { orderAddressFragment } from './order-address';
import { orderPaymentFragment } from './order-payment';
/** @type {?} */
export const orderInvoiceFragment = gql `
  fragment orderInvoice on GraycoreOrderInvoice {
    items {
      ...orderShipmentItem
    }
    grand_total
    subtotal
    shipping
    discount
    tax
    billing_address {
      ...orderAddress
    }
    shipping_address {
      ...orderAddress
		}
		payment {
			...orderPayment
		}
  }
  ${orderShipmentItemFragment}
  ${orderAddressFragment}
  ${orderPaymentFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaW52b2ljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvbWFnZW50by8yLjQuMC8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvZnJhZ21lbnRzL29yZGVyLWludm9pY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFdkQsTUFBTSxPQUFPLG9CQUFvQixHQUFHLEdBQUcsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQm5DLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsb0JBQW9CO0NBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IG9yZGVyU2hpcG1lbnRJdGVtRnJhZ21lbnQgfSBmcm9tICcuL29yZGVyLXNoaXBtZW50LWl0ZW0nO1xuaW1wb3J0IHsgb3JkZXJBZGRyZXNzRnJhZ21lbnQgfSBmcm9tICcuL29yZGVyLWFkZHJlc3MnO1xuaW1wb3J0IHsgb3JkZXJQYXltZW50RnJhZ21lbnQgfSBmcm9tICcuL29yZGVyLXBheW1lbnQnO1xuXG5leHBvcnQgY29uc3Qgb3JkZXJJbnZvaWNlRnJhZ21lbnQgPSBncWxgXG4gIGZyYWdtZW50IG9yZGVySW52b2ljZSBvbiBHcmF5Y29yZU9yZGVySW52b2ljZSB7XG4gICAgaXRlbXMge1xuICAgICAgLi4ub3JkZXJTaGlwbWVudEl0ZW1cbiAgICB9XG4gICAgZ3JhbmRfdG90YWxcbiAgICBzdWJ0b3RhbFxuICAgIHNoaXBwaW5nXG4gICAgZGlzY291bnRcbiAgICB0YXhcbiAgICBiaWxsaW5nX2FkZHJlc3Mge1xuICAgICAgLi4ub3JkZXJBZGRyZXNzXG4gICAgfVxuICAgIHNoaXBwaW5nX2FkZHJlc3Mge1xuICAgICAgLi4ub3JkZXJBZGRyZXNzXG5cdFx0fVxuXHRcdHBheW1lbnQge1xuXHRcdFx0Li4ub3JkZXJQYXltZW50XG5cdFx0fVxuICB9XG4gICR7b3JkZXJTaGlwbWVudEl0ZW1GcmFnbWVudH1cbiAgJHtvcmRlckFkZHJlc3NGcmFnbWVudH1cbiAgJHtvcmRlclBheW1lbnRGcmFnbWVudH1cbmA7XG4iXX0=