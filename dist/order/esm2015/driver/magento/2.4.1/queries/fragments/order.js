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
import { orderCreditFragment } from './order-credit';
import { orderTotalFragment } from './order-total';
/** @type {?} */
export const orderFragment = gql `
  fragment order on GraycoreGuestOrder {
    __typename
    id
    order_date
    status
    carrier
    number
    shipping_method
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
    payment_methods {
      ...orderPayment
    }
    invoices {
      ...orderInvoice
    }
    credit_memos {
      ...orderCredit
    }
    total {
      ...orderTotal
    }
  }
  ${orderItemFragment}
  ${orderShipmentFragment}
  ${orderPaymentFragment}
  ${orderInvoiceFragment}
  ${orderCreditFragment}
  ${orderAddressFragment}
  ${orderTotalFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvZHJpdmVyL21hZ2VudG8vMi40LjEvIiwic291cmNlcyI6WyJxdWVyaWVzL2ZyYWdtZW50cy9vcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRW5ELE1BQU0sT0FBTyxhQUFhLEdBQUcsR0FBRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBa0M1QixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7Q0FDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgb3JkZXJJdGVtRnJhZ21lbnQgfSBmcm9tICcuL29yZGVyLWl0ZW0nO1xuaW1wb3J0IHsgb3JkZXJBZGRyZXNzRnJhZ21lbnQgfSBmcm9tICcuL29yZGVyLWFkZHJlc3MnO1xuaW1wb3J0IHsgb3JkZXJTaGlwbWVudEZyYWdtZW50IH0gZnJvbSAnLi9vcmRlci1zaGlwbWVudCc7XG5pbXBvcnQgeyBvcmRlclBheW1lbnRGcmFnbWVudCB9IGZyb20gJy4vb3JkZXItcGF5bWVudCc7XG5pbXBvcnQgeyBvcmRlckludm9pY2VGcmFnbWVudCB9IGZyb20gJy4vb3JkZXItaW52b2ljZSc7XG5pbXBvcnQgeyBvcmRlckNyZWRpdEZyYWdtZW50IH0gZnJvbSAnLi9vcmRlci1jcmVkaXQnO1xuaW1wb3J0IHsgb3JkZXJUb3RhbEZyYWdtZW50IH0gZnJvbSAnLi9vcmRlci10b3RhbCc7XG5cbmV4cG9ydCBjb25zdCBvcmRlckZyYWdtZW50ID0gZ3FsYFxuICBmcmFnbWVudCBvcmRlciBvbiBHcmF5Y29yZUd1ZXN0T3JkZXIge1xuICAgIF9fdHlwZW5hbWVcbiAgICBpZFxuICAgIG9yZGVyX2RhdGVcbiAgICBzdGF0dXNcbiAgICBjYXJyaWVyXG4gICAgbnVtYmVyXG4gICAgc2hpcHBpbmdfbWV0aG9kXG4gICAgaXRlbXMge1xuICAgICAgLi4ub3JkZXJJdGVtXG4gICAgfVxuICAgIGJpbGxpbmdfYWRkcmVzcyB7XG4gICAgICAuLi5vcmRlckFkZHJlc3NcbiAgICB9XG4gICAgc2hpcHBpbmdfYWRkcmVzcyB7XG4gICAgICAuLi5vcmRlckFkZHJlc3NcbiAgICB9XG4gICAgc2hpcG1lbnRzIHtcbiAgICAgIC4uLm9yZGVyU2hpcG1lbnRcbiAgICB9XG4gICAgcGF5bWVudF9tZXRob2RzIHtcbiAgICAgIC4uLm9yZGVyUGF5bWVudFxuICAgIH1cbiAgICBpbnZvaWNlcyB7XG4gICAgICAuLi5vcmRlckludm9pY2VcbiAgICB9XG4gICAgY3JlZGl0X21lbW9zIHtcbiAgICAgIC4uLm9yZGVyQ3JlZGl0XG4gICAgfVxuICAgIHRvdGFsIHtcbiAgICAgIC4uLm9yZGVyVG90YWxcbiAgICB9XG4gIH1cbiAgJHtvcmRlckl0ZW1GcmFnbWVudH1cbiAgJHtvcmRlclNoaXBtZW50RnJhZ21lbnR9XG4gICR7b3JkZXJQYXltZW50RnJhZ21lbnR9XG4gICR7b3JkZXJJbnZvaWNlRnJhZ21lbnR9XG4gICR7b3JkZXJDcmVkaXRGcmFnbWVudH1cbiAgJHtvcmRlckFkZHJlc3NGcmFnbWVudH1cbiAgJHtvcmRlclRvdGFsRnJhZ21lbnR9XG5gO1xuIl19