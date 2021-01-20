/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartFragment } from './fragments/public_api';
/** @type {?} */
export var updateCartItem = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  mutation UpdateCartItem($cartId: String!, $input: CartItemUpdateInput!) {\n    updateCartItems(input: {\n      cart_id: $cartId\n      cart_items: [$input]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation UpdateCartItem($cartId: String!, $input: CartItemUpdateInput!) {\n    updateCartItems(input: {\n      cart_id: $cartId\n      cart_items: [$input]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, tslib_1.__spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, tslib_1.__spread(extraCartFragments)));
});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWNhcnQtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsicXVlcmllcy91cGRhdGUtY2FydC1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFdEQsTUFBTSxLQUFPLGNBQWM7Ozs7QUFBRyxVQUFDLGtCQUF1QztJQUF2QyxtQ0FBQSxFQUFBLHVCQUF1QztJQUFLLE9BQUEsR0FBRywwVUFBQSxvTkFRcEUsRUFBa0QsMkJBSXhELEVBQVksTUFDWixFQUFrRCxJQUNyRCxLQU5TLDJCQUEyQixnQ0FBSSxrQkFBa0IsSUFJdkQsWUFBWSxFQUNaLDJCQUEyQixnQ0FBSSxrQkFBa0I7QUFic0IsQ0FjMUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IGRhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCwgZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbCc7XG5cbmltcG9ydCB7IGNhcnRGcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnRzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FydEl0ZW0gPSAoZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSA9IFtdKSA9PiBncWxgXG4gIG11dGF0aW9uIFVwZGF0ZUNhcnRJdGVtKCRjYXJ0SWQ6IFN0cmluZyEsICRpbnB1dDogQ2FydEl0ZW1VcGRhdGVJbnB1dCEpIHtcbiAgICB1cGRhdGVDYXJ0SXRlbXMoaW5wdXQ6IHtcbiAgICAgIGNhcnRfaWQ6ICRjYXJ0SWRcbiAgICAgIGNhcnRfaXRlbXM6IFskaW5wdXRdXG4gICAgfSkge1xuICAgICAgY2FydCB7XG4gICAgICAgIC4uLmNhcnRcbiAgICAgICAgJHtkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQoLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtjYXJ0RnJhZ21lbnR9XG4gICR7ZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG5gO1xuIl19