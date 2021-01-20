/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { orderItemFragment } from './order-item';
/** @type {?} */
export const orderShipmentItemFragment = gql `
  fragment orderShipmentItem on ShipmentItemInterface {
    __typename
    id
    quantity_shipped
    order_item {
      ...orderItem
    }
  }
  ${orderItemFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2hpcG1lbnQtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvbWFnZW50by8yLjQuMS8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvZnJhZ21lbnRzL29yZGVyLXNoaXBtZW50LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRWpELE1BQU0sT0FBTyx5QkFBeUIsR0FBRyxHQUFHLENBQUE7Ozs7Ozs7OztJQVN4QyxpQkFBaUI7Q0FDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgb3JkZXJJdGVtRnJhZ21lbnQgfSBmcm9tICcuL29yZGVyLWl0ZW0nO1xuXG5leHBvcnQgY29uc3Qgb3JkZXJTaGlwbWVudEl0ZW1GcmFnbWVudCA9IGdxbGBcbiAgZnJhZ21lbnQgb3JkZXJTaGlwbWVudEl0ZW0gb24gU2hpcG1lbnRJdGVtSW50ZXJmYWNlIHtcbiAgICBfX3R5cGVuYW1lXG4gICAgaWRcbiAgICBxdWFudGl0eV9zaGlwcGVkXG4gICAgb3JkZXJfaXRlbSB7XG4gICAgICAuLi5vcmRlckl0ZW1cbiAgICB9XG4gIH1cbiAgJHtvcmRlckl0ZW1GcmFnbWVudH1cbmA7XG4iXX0=