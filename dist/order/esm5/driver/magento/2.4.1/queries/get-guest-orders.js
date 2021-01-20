var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { orderFragment } from './fragments/public_api';
/** @type {?} */
export var getGuestOrders = (/**
 * @param {?=} extraOrderFragments
 * @return {?}
 */
function (extraOrderFragments) {
    if (extraOrderFragments === void 0) { extraOrderFragments = []; }
    return gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query GetGuestOrders($cartId: String!) {\n    graycoreGuestOrders(cartId: $cartId) {\n      items {\n        ...order\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query GetGuestOrders($cartId: String!) {\n    graycoreGuestOrders(cartId: $cartId) {\n      items {\n        ...order\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraOrderFragments)), orderFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraOrderFragments)));
});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWd1ZXN0LW9yZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci9kcml2ZXIvbWFnZW50by8yLjQuMS8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvZ2V0LWd1ZXN0LW9yZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFdkQsTUFBTSxLQUFPLGNBQWM7Ozs7QUFBRyxVQUFDLG1CQUF3QztJQUF4QyxvQ0FBQSxFQUFBLHdCQUF3QztJQUFLLE9BQUEsR0FBRyxtUEFBQSxxSUFLckUsRUFBbUQsMkJBSXpELEVBQWEsTUFDYixFQUFtRCxJQUN0RCxLQU5TLDJCQUEyQix3QkFBSSxtQkFBbUIsSUFJeEQsYUFBYSxFQUNiLDJCQUEyQix3QkFBSSxtQkFBbUI7QUFWc0IsQ0FXM0UsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IGRhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCwgZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbCc7XG5cbmltcG9ydCB7IG9yZGVyRnJhZ21lbnQgfSBmcm9tICcuL2ZyYWdtZW50cy9wdWJsaWNfYXBpJztcblxuZXhwb3J0IGNvbnN0IGdldEd1ZXN0T3JkZXJzID0gKGV4dHJhT3JkZXJGcmFnbWVudHM6IERvY3VtZW50Tm9kZVtdID0gW10pID0+IGdxbGBcbiAgcXVlcnkgR2V0R3Vlc3RPcmRlcnMoJGNhcnRJZDogU3RyaW5nISkge1xuICAgIGdyYXljb3JlR3Vlc3RPcmRlcnMoY2FydElkOiAkY2FydElkKSB7XG4gICAgICBpdGVtcyB7XG4gICAgICAgIC4uLm9yZGVyXG4gICAgICAgICR7ZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkKC4uLmV4dHJhT3JkZXJGcmFnbWVudHMpfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke29yZGVyRnJhZ21lbnR9XG4gICR7ZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uKC4uLmV4dHJhT3JkZXJGcmFnbWVudHMpfVxuYDtcbiJdfQ==