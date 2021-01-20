/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
/** @type {?} */
export const orderBundleItemSelectedOptionFragment = gql `
  fragment orderBundleItemSelectedOption on ItemSelectedBundleOption {
    __typename
    id
    label
    values {
      __typename
      id
      product_name
    }
  }
`;
/** @type {?} */
export const orderItemFragment = gql `
  fragment orderItem on OrderItemInterface {
    __typename
    id
    quantity_ordered
    quantity_canceled
    quantity_shipped
    quantity_invoiced
    product_url_key
    product_sku
    product_name
    product_type
    product_sale_price {
      value
    }
    discounts {
      amount {
        value
      }
    }
    selected_options {
      label
      value
    }
    ... on BundleOrderItem {
      bundle_options {
        ...orderBundleItemSelectedOption
      }
    }
  }
  ${orderBundleItemSelectedOptionFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvbWFnZW50by8yLjQuMS8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvZnJhZ21lbnRzL29yZGVyLWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQzs7QUFFOUIsTUFBTSxPQUFPLHFDQUFxQyxHQUFHLEdBQUcsQ0FBQTs7Ozs7Ozs7Ozs7Q0FXdkQ7O0FBRUQsTUFBTSxPQUFPLGlCQUFpQixHQUFHLEdBQUcsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBOEJoQyxxQ0FBcUM7Q0FDeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuZXhwb3J0IGNvbnN0IG9yZGVyQnVuZGxlSXRlbVNlbGVjdGVkT3B0aW9uRnJhZ21lbnQgPSBncWxgXG4gIGZyYWdtZW50IG9yZGVyQnVuZGxlSXRlbVNlbGVjdGVkT3B0aW9uIG9uIEl0ZW1TZWxlY3RlZEJ1bmRsZU9wdGlvbiB7XG4gICAgX190eXBlbmFtZVxuICAgIGlkXG4gICAgbGFiZWxcbiAgICB2YWx1ZXMge1xuICAgICAgX190eXBlbmFtZVxuICAgICAgaWRcbiAgICAgIHByb2R1Y3RfbmFtZVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IG9yZGVySXRlbUZyYWdtZW50ID0gZ3FsYFxuICBmcmFnbWVudCBvcmRlckl0ZW0gb24gT3JkZXJJdGVtSW50ZXJmYWNlIHtcbiAgICBfX3R5cGVuYW1lXG4gICAgaWRcbiAgICBxdWFudGl0eV9vcmRlcmVkXG4gICAgcXVhbnRpdHlfY2FuY2VsZWRcbiAgICBxdWFudGl0eV9zaGlwcGVkXG4gICAgcXVhbnRpdHlfaW52b2ljZWRcbiAgICBwcm9kdWN0X3VybF9rZXlcbiAgICBwcm9kdWN0X3NrdVxuICAgIHByb2R1Y3RfbmFtZVxuICAgIHByb2R1Y3RfdHlwZVxuICAgIHByb2R1Y3Rfc2FsZV9wcmljZSB7XG4gICAgICB2YWx1ZVxuICAgIH1cbiAgICBkaXNjb3VudHMge1xuICAgICAgYW1vdW50IHtcbiAgICAgICAgdmFsdWVcbiAgICAgIH1cbiAgICB9XG4gICAgc2VsZWN0ZWRfb3B0aW9ucyB7XG4gICAgICBsYWJlbFxuICAgICAgdmFsdWVcbiAgICB9XG4gICAgLi4uIG9uIEJ1bmRsZU9yZGVySXRlbSB7XG4gICAgICBidW5kbGVfb3B0aW9ucyB7XG4gICAgICAgIC4uLm9yZGVyQnVuZGxlSXRlbVNlbGVjdGVkT3B0aW9uXG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7b3JkZXJCdW5kbGVJdGVtU2VsZWN0ZWRPcHRpb25GcmFnbWVudH1cbmA7XG4iXX0=