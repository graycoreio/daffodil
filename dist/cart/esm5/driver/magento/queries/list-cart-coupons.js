/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartCouponFragment } from './fragments/public_api';
/** @type {?} */
export var listCartCoupons = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  query listCartCoupons($cartId: String!) {\n    cart(cart_id: $cartId) {\n      applied_coupons {\n\t\t\t\t...cartCoupon\n\t\t\t}\n      ", "\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query listCartCoupons($cartId: String!) {\n    cart(cart_id: $cartId) {\n      applied_coupons {\n\t\t\t\t...cartCoupon\n\t\t\t}\n      ", "\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, tslib_1.__spread(extraCartFragments)), cartCouponFragment, daffBuildFragmentDefinition.apply(void 0, tslib_1.__spread(extraCartFragments)));
});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jYXJ0LWNvdXBvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvbGlzdC1jYXJ0LWNvdXBvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7QUFFOUIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTVELE1BQU0sS0FBTyxlQUFlOzs7O0FBQUcsVUFBQyxrQkFBdUM7SUFBdkMsbUNBQUEsRUFBQSx1QkFBdUM7SUFBSyxPQUFBLEdBQUcsMlBBQUEsOElBTXZFLEVBQWtELGtCQUd0RCxFQUFrQixNQUNsQixFQUFrRCxJQUNyRCxLQUxPLDJCQUEyQixnQ0FBSSxrQkFBa0IsSUFHckQsa0JBQWtCLEVBQ2xCLDJCQUEyQixnQ0FBSSxrQkFBa0I7QUFWdUIsQ0FXM0UsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IGRhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCwgZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbCc7XG5cbmltcG9ydCB7IGNhcnRDb3Vwb25GcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnRzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgY29uc3QgbGlzdENhcnRDb3Vwb25zID0gKGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10gPSBbXSkgPT4gZ3FsYFxuICBxdWVyeSBsaXN0Q2FydENvdXBvbnMoJGNhcnRJZDogU3RyaW5nISkge1xuICAgIGNhcnQoY2FydF9pZDogJGNhcnRJZCkge1xuICAgICAgYXBwbGllZF9jb3Vwb25zIHtcblx0XHRcdFx0Li4uY2FydENvdXBvblxuXHRcdFx0fVxuICAgICAgJHtkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQoLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbiAgICB9XG4gIH1cbiAgJHtjYXJ0Q291cG9uRnJhZ21lbnR9XG4gICR7ZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG5gO1xuIl19