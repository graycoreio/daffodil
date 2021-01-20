/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { orderItemFragment } from './order-item';
/** @type {?} */
export const orderShipmentItemFragment = gql `
  fragment orderShipmentItem on GraycoreOrderShipmentItem {
    qty
    item {
      ...orderItem
    }
  }
  ${orderItemFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2hpcG1lbnQtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvbWFnZW50by8yLjQuMC8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvZnJhZ21lbnRzL29yZGVyLXNoaXBtZW50LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRWpELE1BQU0sT0FBTyx5QkFBeUIsR0FBRyxHQUFHLENBQUE7Ozs7Ozs7SUFPeEMsaUJBQWlCO0NBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IG9yZGVySXRlbUZyYWdtZW50IH0gZnJvbSAnLi9vcmRlci1pdGVtJztcblxuZXhwb3J0IGNvbnN0IG9yZGVyU2hpcG1lbnRJdGVtRnJhZ21lbnQgPSBncWxgXG4gIGZyYWdtZW50IG9yZGVyU2hpcG1lbnRJdGVtIG9uIEdyYXljb3JlT3JkZXJTaGlwbWVudEl0ZW0ge1xuICAgIHF0eVxuICAgIGl0ZW0ge1xuICAgICAgLi4ub3JkZXJJdGVtXG4gICAgfVxuICB9XG4gICR7b3JkZXJJdGVtRnJhZ21lbnR9XG5gO1xuIl19