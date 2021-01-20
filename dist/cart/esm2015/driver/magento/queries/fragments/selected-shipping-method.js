/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { moneyFragment } from './money';
/** @type {?} */
export const selectedShippingMethodFragment = gql `
  fragment selectedShippingMethod on SelectedShippingMethod {
    carrier_code
    method_code
    carrier_title
    method_title
    amount {
      ...money
    }
  }
  ${moneyFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtc2hpcHBpbmctbWV0aG9kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJxdWVyaWVzL2ZyYWdtZW50cy9zZWxlY3RlZC1zaGlwcGluZy1tZXRob2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQUV4QyxNQUFNLE9BQU8sOEJBQThCLEdBQUcsR0FBRyxDQUFBOzs7Ozs7Ozs7O0lBVTdDLGFBQWE7Q0FDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgbW9uZXlGcmFnbWVudCB9IGZyb20gJy4vbW9uZXknO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0ZWRTaGlwcGluZ01ldGhvZEZyYWdtZW50ID0gZ3FsYFxuICBmcmFnbWVudCBzZWxlY3RlZFNoaXBwaW5nTWV0aG9kIG9uIFNlbGVjdGVkU2hpcHBpbmdNZXRob2Qge1xuICAgIGNhcnJpZXJfY29kZVxuICAgIG1ldGhvZF9jb2RlXG4gICAgY2Fycmllcl90aXRsZVxuICAgIG1ldGhvZF90aXRsZVxuICAgIGFtb3VudCB7XG4gICAgICAuLi5tb25leVxuICAgIH1cbiAgfVxuICAke21vbmV5RnJhZ21lbnR9XG5gO1xuIl19