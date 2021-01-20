/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartFragment } from './fragments/public_api';
/** @type {?} */
export var removeCartItem = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  mutation RemoveCartItem($cartId: String!, $itemId: Int!) {\n    removeItemFromCart(input: {\n      cart_id: $cartId,\n      cart_item_id: $itemId\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation RemoveCartItem($cartId: String!, $itemId: Int!) {\n    removeItemFromCart(input: {\n      cart_id: $cartId,\n      cart_item_id: $itemId\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, tslib_1.__spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, tslib_1.__spread(extraCartFragments)));
});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWNhcnQtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsicXVlcmllcy9yZW1vdmUtY2FydC1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFdEQsTUFBTSxLQUFPLGNBQWM7Ozs7QUFBRyxVQUFDLGtCQUF1QztJQUF2QyxtQ0FBQSxFQUFBLHVCQUF1QztJQUFLLE9BQUEsR0FBRyxnVUFBQSwwTUFRcEUsRUFBa0QsMkJBSXhELEVBQVksTUFDWixFQUFrRCxJQUNyRCxLQU5TLDJCQUEyQixnQ0FBSSxrQkFBa0IsSUFJdkQsWUFBWSxFQUNaLDJCQUEyQixnQ0FBSSxrQkFBa0I7QUFic0IsQ0FjMUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IGRhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCwgZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbCc7XG5cbmltcG9ydCB7IGNhcnRGcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnRzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2FydEl0ZW0gPSAoZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSA9IFtdKSA9PiBncWxgXG4gIG11dGF0aW9uIFJlbW92ZUNhcnRJdGVtKCRjYXJ0SWQ6IFN0cmluZyEsICRpdGVtSWQ6IEludCEpIHtcbiAgICByZW1vdmVJdGVtRnJvbUNhcnQoaW5wdXQ6IHtcbiAgICAgIGNhcnRfaWQ6ICRjYXJ0SWQsXG4gICAgICBjYXJ0X2l0ZW1faWQ6ICRpdGVtSWRcbiAgICB9KSB7XG4gICAgICBjYXJ0IHtcbiAgICAgICAgLi4uY2FydFxuICAgICAgICAke2RhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke2NhcnRGcmFnbWVudH1cbiAgJHtkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24oLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbmA7XG4iXX0=