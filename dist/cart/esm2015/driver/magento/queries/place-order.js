/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
/** @type {?} */
export const placeOrder = gql `
  mutation PlaceOrder($cartId: String!) {
    placeOrder(
      input: {
        cart_id: $cartId
      }
    ) {
      order {
        order_number
      }
    }
  }
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Utb3JkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvcGxhY2Utb3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQzs7QUFFOUIsTUFBTSxPQUFPLFVBQVUsR0FBRyxHQUFHLENBQUE7Ozs7Ozs7Ozs7OztDQVk1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5leHBvcnQgY29uc3QgcGxhY2VPcmRlciA9IGdxbGBcbiAgbXV0YXRpb24gUGxhY2VPcmRlcigkY2FydElkOiBTdHJpbmchKSB7XG4gICAgcGxhY2VPcmRlcihcbiAgICAgIGlucHV0OiB7XG4gICAgICAgIGNhcnRfaWQ6ICRjYXJ0SWRcbiAgICAgIH1cbiAgICApIHtcbiAgICAgIG9yZGVyIHtcbiAgICAgICAgb3JkZXJfbnVtYmVyXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl19