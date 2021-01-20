/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { orderInvoiceItemFragment } from './order-invoice-item';
import { orderInvoiceTotalFragment } from './order-invoice-total';
/** @type {?} */
export const orderInvoiceFragment = gql `
  fragment orderInvoice on Invoice {
    __typename
    id
    items {
      ...orderInvoiceItem
    }
    total {
      ...orderInvoiceTotal
    }
  }
  ${orderInvoiceItemFragment}
  ${orderInvoiceTotalFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaW52b2ljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvbWFnZW50by8yLjQuMS8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvZnJhZ21lbnRzL29yZGVyLWludm9pY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFbEUsTUFBTSxPQUFPLG9CQUFvQixHQUFHLEdBQUcsQ0FBQTs7Ozs7Ozs7Ozs7SUFXbkMsd0JBQXdCO0lBQ3hCLHlCQUF5QjtDQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBvcmRlckludm9pY2VJdGVtRnJhZ21lbnQgfSBmcm9tICcuL29yZGVyLWludm9pY2UtaXRlbSc7XG5pbXBvcnQgeyBvcmRlckludm9pY2VUb3RhbEZyYWdtZW50IH0gZnJvbSAnLi9vcmRlci1pbnZvaWNlLXRvdGFsJztcblxuZXhwb3J0IGNvbnN0IG9yZGVySW52b2ljZUZyYWdtZW50ID0gZ3FsYFxuICBmcmFnbWVudCBvcmRlckludm9pY2Ugb24gSW52b2ljZSB7XG4gICAgX190eXBlbmFtZVxuICAgIGlkXG4gICAgaXRlbXMge1xuICAgICAgLi4ub3JkZXJJbnZvaWNlSXRlbVxuICAgIH1cbiAgICB0b3RhbCB7XG4gICAgICAuLi5vcmRlckludm9pY2VUb3RhbFxuICAgIH1cbiAgfVxuICAke29yZGVySW52b2ljZUl0ZW1GcmFnbWVudH1cbiAgJHtvcmRlckludm9pY2VUb3RhbEZyYWdtZW50fVxuYDtcbiJdfQ==