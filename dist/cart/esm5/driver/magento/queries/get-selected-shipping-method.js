/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { selectedShippingMethodFragment } from './fragments/public_api';
/** @type {?} */
export var getSelectedShippingMethod = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  query GetSelectedShippingMethod($cartId: String!) {\n    cart(cart_id: $cartId) {\n      shipping_addresses {\n        selected_shipping_method {\n          ...selectedShippingMethod\n        }\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query GetSelectedShippingMethod($cartId: String!) {\n    cart(cart_id: $cartId) {\n      shipping_addresses {\n        selected_shipping_method {\n          ...selectedShippingMethod\n        }\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, tslib_1.__spread(extraCartFragments)), selectedShippingMethodFragment, daffBuildFragmentDefinition.apply(void 0, tslib_1.__spread(extraCartFragments)));
});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXNlbGVjdGVkLXNoaXBwaW5nLW1ldGhvZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsicXVlcmllcy9nZXQtc2VsZWN0ZWQtc2hpcHBpbmctbWV0aG9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUV4RSxNQUFNLEtBQU8seUJBQXlCOzs7O0FBQUcsVUFBQyxrQkFBdUM7SUFBdkMsbUNBQUEsRUFBQSx1QkFBdUM7SUFBSyxPQUFBLEdBQUcscVVBQUEsd05BUWpGLEVBQWtELGtCQUd0RCxFQUE4QixNQUM5QixFQUFrRCxJQUNyRCxLQUxPLDJCQUEyQixnQ0FBSSxrQkFBa0IsSUFHckQsOEJBQThCLEVBQzlCLDJCQUEyQixnQ0FBSSxrQkFBa0I7QUFaaUMsQ0FhckYsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IGRhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCwgZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbCc7XG5cbmltcG9ydCB7IHNlbGVjdGVkU2hpcHBpbmdNZXRob2RGcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnRzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VsZWN0ZWRTaGlwcGluZ01ldGhvZCA9IChleHRyYUNhcnRGcmFnbWVudHM6IERvY3VtZW50Tm9kZVtdID0gW10pID0+IGdxbGBcbiAgcXVlcnkgR2V0U2VsZWN0ZWRTaGlwcGluZ01ldGhvZCgkY2FydElkOiBTdHJpbmchKSB7XG4gICAgY2FydChjYXJ0X2lkOiAkY2FydElkKSB7XG4gICAgICBzaGlwcGluZ19hZGRyZXNzZXMge1xuICAgICAgICBzZWxlY3RlZF9zaGlwcGluZ19tZXRob2Qge1xuICAgICAgICAgIC4uLnNlbGVjdGVkU2hpcHBpbmdNZXRob2RcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHtkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQoLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbiAgICB9XG4gIH1cbiAgJHtzZWxlY3RlZFNoaXBwaW5nTWV0aG9kRnJhZ21lbnR9XG4gICR7ZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG5gO1xuIl19