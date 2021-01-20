/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartItemFragment } from './fragments/public_api';
/** @type {?} */
export var listCartItems = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  query ListCartItems($cartId: String!) {\n    cart(cart_id: $cartId) {\n      items {\n        ...cartItem\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query ListCartItems($cartId: String!) {\n    cart(cart_id: $cartId) {\n      items {\n        ...cartItem\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, tslib_1.__spread(extraCartFragments)), cartItemFragment, daffBuildFragmentDefinition.apply(void 0, tslib_1.__spread(extraCartFragments)));
});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jYXJ0LWl0ZW1zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJxdWVyaWVzL2xpc3QtY2FydC1pdGVtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVsRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFMUQsTUFBTSxLQUFPLGFBQWE7Ozs7QUFBRyxVQUFDLGtCQUF1QztJQUF2QyxtQ0FBQSxFQUFBLHVCQUF1QztJQUFLLE9BQUEsR0FBRyw2T0FBQSxnSUFNckUsRUFBa0Qsa0JBR3RELEVBQWdCLE1BQ2hCLEVBQWtELElBQ3JELEtBTE8sMkJBQTJCLGdDQUFJLGtCQUFrQixJQUdyRCxnQkFBZ0IsRUFDaEIsMkJBQTJCLGdDQUFJLGtCQUFrQjtBQVZxQixDQVd6RSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkLCBkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24gfSBmcm9tICdAZGFmZm9kaWwvY29yZS9ncmFwaHFsJztcblxuaW1wb3J0IHsgY2FydEl0ZW1GcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnRzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgY29uc3QgbGlzdENhcnRJdGVtcyA9IChleHRyYUNhcnRGcmFnbWVudHM6IERvY3VtZW50Tm9kZVtdID0gW10pID0+IGdxbGBcbiAgcXVlcnkgTGlzdENhcnRJdGVtcygkY2FydElkOiBTdHJpbmchKSB7XG4gICAgY2FydChjYXJ0X2lkOiAkY2FydElkKSB7XG4gICAgICBpdGVtcyB7XG4gICAgICAgIC4uLmNhcnRJdGVtXG4gICAgICB9XG4gICAgICAke2RhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuICAgIH1cbiAgfVxuICAke2NhcnRJdGVtRnJhZ21lbnR9XG4gICR7ZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG5gO1xuIl19