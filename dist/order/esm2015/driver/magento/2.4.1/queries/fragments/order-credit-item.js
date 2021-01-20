/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { orderItemFragment } from './order-item';
/** @type {?} */
export const orderCreditItemFragment = gql `
  fragment orderCreditItem on CreditMemoItemInterface {
    __typename
    id
    quantity_refunded
    order_item {
      ...orderItem
    }
  }
  ${orderItemFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY3JlZGl0LWl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvZHJpdmVyL21hZ2VudG8vMi40LjEvIiwic291cmNlcyI6WyJxdWVyaWVzL2ZyYWdtZW50cy9vcmRlci1jcmVkaXQtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFFakQsTUFBTSxPQUFPLHVCQUF1QixHQUFHLEdBQUcsQ0FBQTs7Ozs7Ozs7O0lBU3RDLGlCQUFpQjtDQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBvcmRlckl0ZW1GcmFnbWVudCB9IGZyb20gJy4vb3JkZXItaXRlbSc7XG5cbmV4cG9ydCBjb25zdCBvcmRlckNyZWRpdEl0ZW1GcmFnbWVudCA9IGdxbGBcbiAgZnJhZ21lbnQgb3JkZXJDcmVkaXRJdGVtIG9uIENyZWRpdE1lbW9JdGVtSW50ZXJmYWNlIHtcbiAgICBfX3R5cGVuYW1lXG4gICAgaWRcbiAgICBxdWFudGl0eV9yZWZ1bmRlZFxuICAgIG9yZGVyX2l0ZW0ge1xuICAgICAgLi4ub3JkZXJJdGVtXG4gICAgfVxuICB9XG4gICR7b3JkZXJJdGVtRnJhZ21lbnR9XG5gO1xuIl19