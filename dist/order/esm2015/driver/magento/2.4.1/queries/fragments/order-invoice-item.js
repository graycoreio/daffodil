/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { orderItemFragment } from './order-item';
/** @type {?} */
export const orderInvoiceItemFragment = gql `
  fragment orderInvoiceItem on InvoiceItemInterface {
    __typename
    id
    quantity_invoiced
    order_item {
      ...orderItem
    }
  }
  ${orderItemFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaW52b2ljZS1pdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL2RyaXZlci9tYWdlbnRvLzIuNC4xLyIsInNvdXJjZXMiOlsicXVlcmllcy9mcmFnbWVudHMvb3JkZXItaW52b2ljZS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7QUFFOUIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUVqRCxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsR0FBRyxDQUFBOzs7Ozs7Ozs7SUFTdkMsaUJBQWlCO0NBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IG9yZGVySXRlbUZyYWdtZW50IH0gZnJvbSAnLi9vcmRlci1pdGVtJztcblxuZXhwb3J0IGNvbnN0IG9yZGVySW52b2ljZUl0ZW1GcmFnbWVudCA9IGdxbGBcbiAgZnJhZ21lbnQgb3JkZXJJbnZvaWNlSXRlbSBvbiBJbnZvaWNlSXRlbUludGVyZmFjZSB7XG4gICAgX190eXBlbmFtZVxuICAgIGlkXG4gICAgcXVhbnRpdHlfaW52b2ljZWRcbiAgICBvcmRlcl9pdGVtIHtcbiAgICAgIC4uLm9yZGVySXRlbVxuICAgIH1cbiAgfVxuICAke29yZGVySXRlbUZyYWdtZW50fVxuYDtcbiJdfQ==