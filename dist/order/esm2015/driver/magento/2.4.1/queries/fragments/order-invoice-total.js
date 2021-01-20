/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
/** @type {?} */
export const orderInvoiceTotalFragment = gql `
  fragment orderInvoiceTotal on InvoiceTotal {
    __typename
    discounts {
      amount {
        value
      }
      label
    }
    grand_total {
      value
    }
    subtotal {
      value
    }
    total_tax {
      value
    }
    total_shipping {
      value
    }
  }
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaW52b2ljZS10b3RhbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvbWFnZW50by8yLjQuMS8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvZnJhZ21lbnRzL29yZGVyLWludm9pY2UtdG90YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQzs7QUFFOUIsTUFBTSxPQUFPLHlCQUF5QixHQUFHLEdBQUcsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXNCM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuZXhwb3J0IGNvbnN0IG9yZGVySW52b2ljZVRvdGFsRnJhZ21lbnQgPSBncWxgXG4gIGZyYWdtZW50IG9yZGVySW52b2ljZVRvdGFsIG9uIEludm9pY2VUb3RhbCB7XG4gICAgX190eXBlbmFtZVxuICAgIGRpc2NvdW50cyB7XG4gICAgICBhbW91bnQge1xuICAgICAgICB2YWx1ZVxuICAgICAgfVxuICAgICAgbGFiZWxcbiAgICB9XG4gICAgZ3JhbmRfdG90YWwge1xuICAgICAgdmFsdWVcbiAgICB9XG4gICAgc3VidG90YWwge1xuICAgICAgdmFsdWVcbiAgICB9XG4gICAgdG90YWxfdGF4IHtcbiAgICAgIHZhbHVlXG4gICAgfVxuICAgIHRvdGFsX3NoaXBwaW5nIHtcbiAgICAgIHZhbHVlXG4gICAgfVxuICB9XG5gO1xuIl19