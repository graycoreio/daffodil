/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartFragment } from './fragments/public_api';
/** @type {?} */
export var setSelectedPaymentMethod = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  mutation SetSelectedPaymentMethod($cartId: String!, $payment: PaymentMethodInput!) {\n    setPaymentMethodOnCart(input: {\n      cart_id: $cartId\n      payment_method: $payment\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation SetSelectedPaymentMethod($cartId: String!, $payment: PaymentMethodInput!) {\n    setPaymentMethodOnCart(input: {\n      cart_id: $cartId\n      payment_method: $payment\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, tslib_1.__spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, tslib_1.__spread(extraCartFragments)));
});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNlbGVjdGVkLXBheW1lbnQtbWV0aG9kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJxdWVyaWVzL3NldC1zZWxlY3RlZC1wYXltZW50LW1ldGhvZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVsRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRXRELE1BQU0sS0FBTyx3QkFBd0I7Ozs7QUFBRyxVQUFDLGtCQUF1QztJQUF2QyxtQ0FBQSxFQUFBLHVCQUF1QztJQUFLLE9BQUEsR0FBRyxnV0FBQSwwT0FROUUsRUFBa0QsMkJBSXhELEVBQVksTUFDWixFQUFrRCxJQUNyRCxLQU5TLDJCQUEyQixnQ0FBSSxrQkFBa0IsSUFJdkQsWUFBWSxFQUNaLDJCQUEyQixnQ0FBSSxrQkFBa0I7QUFiZ0MsQ0FjcEYsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IGRhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCwgZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbCc7XG5cbmltcG9ydCB7IGNhcnRGcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnRzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgY29uc3Qgc2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kID0gKGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10gPSBbXSkgPT4gZ3FsYFxuICBtdXRhdGlvbiBTZXRTZWxlY3RlZFBheW1lbnRNZXRob2QoJGNhcnRJZDogU3RyaW5nISwgJHBheW1lbnQ6IFBheW1lbnRNZXRob2RJbnB1dCEpIHtcbiAgICBzZXRQYXltZW50TWV0aG9kT25DYXJ0KGlucHV0OiB7XG4gICAgICBjYXJ0X2lkOiAkY2FydElkXG4gICAgICBwYXltZW50X21ldGhvZDogJHBheW1lbnRcbiAgICB9KSB7XG4gICAgICBjYXJ0IHtcbiAgICAgICAgLi4uY2FydFxuICAgICAgICAke2RhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke2NhcnRGcmFnbWVudH1cbiAgJHtkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24oLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbmA7XG4iXX0=