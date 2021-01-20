/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { orderItemFragment } from './order-item';
import { orderAddressFragment } from './order-address';
import { orderShipmentFragment } from './order-shipment';
import { orderPaymentFragment } from './order-payment';
import { orderInvoiceFragment } from './order-invoice';
/** @type {?} */
export const orderFragment = gql `
  fragment order on GraycoreOrder {
    id
    order_number
    customer_id
    created_at
    updated_at
    grand_total
    subtotal
    shipping
    discount
    tax
    status
    applied_codes
    items {
      ...orderItem
    }
    billing_address {
      ...orderAddress
    }
    shipping_address {
      ...orderAddress
    }
    shipments {
      ...orderShipment
    }
    payment {
      ...orderPayment
    }
    invoices {
      ...orderInvoice
    }
    credits {
      ...orderInvoice
    }
  }
  ${orderItemFragment}
  ${orderShipmentFragment}
  ${orderPaymentFragment}
  ${orderInvoiceFragment}
  ${orderAddressFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvZHJpdmVyL21hZ2VudG8vMi40LjAvIiwic291cmNlcyI6WyJxdWVyaWVzL2ZyYWdtZW50cy9vcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBQzlCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFdkQsTUFBTSxPQUFPLGFBQWEsR0FBRyxHQUFHLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9DNUIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUN2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgb3JkZXJJdGVtRnJhZ21lbnQgfSBmcm9tICcuL29yZGVyLWl0ZW0nO1xuaW1wb3J0IHsgb3JkZXJBZGRyZXNzRnJhZ21lbnQgfSBmcm9tICcuL29yZGVyLWFkZHJlc3MnO1xuaW1wb3J0IHsgb3JkZXJTaGlwbWVudEZyYWdtZW50IH0gZnJvbSAnLi9vcmRlci1zaGlwbWVudCc7XG5pbXBvcnQgeyBvcmRlclBheW1lbnRGcmFnbWVudCB9IGZyb20gJy4vb3JkZXItcGF5bWVudCc7XG5pbXBvcnQgeyBvcmRlckludm9pY2VGcmFnbWVudCB9IGZyb20gJy4vb3JkZXItaW52b2ljZSc7XG5cbmV4cG9ydCBjb25zdCBvcmRlckZyYWdtZW50ID0gZ3FsYFxuICBmcmFnbWVudCBvcmRlciBvbiBHcmF5Y29yZU9yZGVyIHtcbiAgICBpZFxuICAgIG9yZGVyX251bWJlclxuICAgIGN1c3RvbWVyX2lkXG4gICAgY3JlYXRlZF9hdFxuICAgIHVwZGF0ZWRfYXRcbiAgICBncmFuZF90b3RhbFxuICAgIHN1YnRvdGFsXG4gICAgc2hpcHBpbmdcbiAgICBkaXNjb3VudFxuICAgIHRheFxuICAgIHN0YXR1c1xuICAgIGFwcGxpZWRfY29kZXNcbiAgICBpdGVtcyB7XG4gICAgICAuLi5vcmRlckl0ZW1cbiAgICB9XG4gICAgYmlsbGluZ19hZGRyZXNzIHtcbiAgICAgIC4uLm9yZGVyQWRkcmVzc1xuICAgIH1cbiAgICBzaGlwcGluZ19hZGRyZXNzIHtcbiAgICAgIC4uLm9yZGVyQWRkcmVzc1xuICAgIH1cbiAgICBzaGlwbWVudHMge1xuICAgICAgLi4ub3JkZXJTaGlwbWVudFxuICAgIH1cbiAgICBwYXltZW50IHtcbiAgICAgIC4uLm9yZGVyUGF5bWVudFxuICAgIH1cbiAgICBpbnZvaWNlcyB7XG4gICAgICAuLi5vcmRlckludm9pY2VcbiAgICB9XG4gICAgY3JlZGl0cyB7XG4gICAgICAuLi5vcmRlckludm9pY2VcbiAgICB9XG4gIH1cbiAgJHtvcmRlckl0ZW1GcmFnbWVudH1cbiAgJHtvcmRlclNoaXBtZW50RnJhZ21lbnR9XG4gICR7b3JkZXJQYXltZW50RnJhZ21lbnR9XG4gICR7b3JkZXJJbnZvaWNlRnJhZ21lbnR9XG4gICR7b3JkZXJBZGRyZXNzRnJhZ21lbnR9XG5gO1xuIl19