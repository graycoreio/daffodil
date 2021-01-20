/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartAddressFragment } from './fragments/public_api';
/** @type {?} */
export var getBillingAddress = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  query GetBillingAddress($cartId: String!) {\n    cart(cart_id: $cartId) {\n      billing_address {\n        ...cartAddress\n      }\n      email\n      ", "\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query GetBillingAddress($cartId: String!) {\n    cart(cart_id: $cartId) {\n      billing_address {\n        ...cartAddress\n      }\n      email\n      ", "\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, tslib_1.__spread(extraCartFragments)), cartAddressFragment, daffBuildFragmentDefinition.apply(void 0, tslib_1.__spread(extraCartFragments)));
});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWJpbGxpbmctYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsicXVlcmllcy9nZXQtYmlsbGluZy1hZGRyZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUU3RCxNQUFNLEtBQU8saUJBQWlCOzs7O0FBQUcsVUFBQyxrQkFBdUM7SUFBdkMsbUNBQUEsRUFBQSx1QkFBdUM7SUFBSyxPQUFBLEdBQUcsMlFBQUEsOEpBT3pFLEVBQWtELGtCQUd0RCxFQUFtQixNQUNuQixFQUFrRCxJQUNyRCxLQUxPLDJCQUEyQixnQ0FBSSxrQkFBa0IsSUFHckQsbUJBQW1CLEVBQ25CLDJCQUEyQixnQ0FBSSxrQkFBa0I7QUFYeUIsQ0FZN0UsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IGRhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCwgZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbCc7XG5cbmltcG9ydCB7IGNhcnRBZGRyZXNzRnJhZ21lbnQgfSBmcm9tICcuL2ZyYWdtZW50cy9wdWJsaWNfYXBpJztcblxuZXhwb3J0IGNvbnN0IGdldEJpbGxpbmdBZGRyZXNzID0gKGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10gPSBbXSkgPT4gZ3FsYFxuICBxdWVyeSBHZXRCaWxsaW5nQWRkcmVzcygkY2FydElkOiBTdHJpbmchKSB7XG4gICAgY2FydChjYXJ0X2lkOiAkY2FydElkKSB7XG4gICAgICBiaWxsaW5nX2FkZHJlc3Mge1xuICAgICAgICAuLi5jYXJ0QWRkcmVzc1xuICAgICAgfVxuICAgICAgZW1haWxcbiAgICAgICR7ZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG4gICAgfVxuICB9XG4gICR7Y2FydEFkZHJlc3NGcmFnbWVudH1cbiAgJHtkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24oLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbmA7XG4iXX0=