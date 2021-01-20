/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { orderCreditItemFragment } from './order-credit-item';
import { orderCreditTotalFragment } from './order-credit-total';
/** @type {?} */
export const orderCreditFragment = gql `
  fragment orderCredit on CreditMemo {
    __typename
    id
    items {
      ...orderCreditItem
    }
    total {
      ...orderCreditTotal
    }
  }
  ${orderCreditItemFragment}
  ${orderCreditTotalFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY3JlZGl0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL2RyaXZlci9tYWdlbnRvLzIuNC4xLyIsInNvdXJjZXMiOlsicXVlcmllcy9mcmFnbWVudHMvb3JkZXItY3JlZGl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7QUFFOUIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRWhFLE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxHQUFHLENBQUE7Ozs7Ozs7Ozs7O0lBV2xDLHVCQUF1QjtJQUN2Qix3QkFBd0I7Q0FDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgb3JkZXJDcmVkaXRJdGVtRnJhZ21lbnQgfSBmcm9tICcuL29yZGVyLWNyZWRpdC1pdGVtJztcbmltcG9ydCB7IG9yZGVyQ3JlZGl0VG90YWxGcmFnbWVudCB9IGZyb20gJy4vb3JkZXItY3JlZGl0LXRvdGFsJztcblxuZXhwb3J0IGNvbnN0IG9yZGVyQ3JlZGl0RnJhZ21lbnQgPSBncWxgXG4gIGZyYWdtZW50IG9yZGVyQ3JlZGl0IG9uIENyZWRpdE1lbW8ge1xuICAgIF9fdHlwZW5hbWVcbiAgICBpZFxuICAgIGl0ZW1zIHtcbiAgICAgIC4uLm9yZGVyQ3JlZGl0SXRlbVxuICAgIH1cbiAgICB0b3RhbCB7XG4gICAgICAuLi5vcmRlckNyZWRpdFRvdGFsXG4gICAgfVxuICB9XG4gICR7b3JkZXJDcmVkaXRJdGVtRnJhZ21lbnR9XG4gICR7b3JkZXJDcmVkaXRUb3RhbEZyYWdtZW50fVxuYDtcbiJdfQ==