/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartFragment } from './fragments/public_api';
/** @type {?} */
export var updateBillingAddress = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  mutation UpdateBillingAddress(\n    $cartId: String!,\n    $address: BillingAddressInput!\n  ) {\n    setBillingAddressOnCart(input: {\n      cart_id: $cartId\n      billing_address: $address\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation UpdateBillingAddress(\n    $cartId: String!,\n    $address: BillingAddressInput!\n  ) {\n    setBillingAddressOnCart(input: {\n      cart_id: $cartId\n      billing_address: $address\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, tslib_1.__spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, tslib_1.__spread(extraCartFragments)));
});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWJpbGxpbmctYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsicXVlcmllcy91cGRhdGUtYmlsbGluZy1hZGRyZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFdEQsTUFBTSxLQUFPLG9CQUFvQjs7OztBQUFHLFVBQUMsa0JBQXVDO0lBQXZDLG1DQUFBLEVBQUEsdUJBQXVDO0lBQUssT0FBQSxHQUFHLDhXQUFBLHdQQVcxRSxFQUFrRCwyQkFJeEQsRUFBWSxNQUNaLEVBQWtELElBQ3JELEtBTlMsMkJBQTJCLGdDQUFJLGtCQUFrQixJQUl2RCxZQUFZLEVBQ1osMkJBQTJCLGdDQUFJLGtCQUFrQjtBQWhCNEIsQ0FpQmhGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBkYWZmQnVpbGRGcmFnbWVudE5hbWVTcHJlYWQsIGRhZmZCdWlsZEZyYWdtZW50RGVmaW5pdGlvbiB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL2dyYXBocWwnO1xuXG5pbXBvcnQgeyBjYXJ0RnJhZ21lbnQgfSBmcm9tICcuL2ZyYWdtZW50cy9wdWJsaWNfYXBpJztcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUJpbGxpbmdBZGRyZXNzID0gKGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10gPSBbXSkgPT4gZ3FsYFxuICBtdXRhdGlvbiBVcGRhdGVCaWxsaW5nQWRkcmVzcyhcbiAgICAkY2FydElkOiBTdHJpbmchLFxuICAgICRhZGRyZXNzOiBCaWxsaW5nQWRkcmVzc0lucHV0IVxuICApIHtcbiAgICBzZXRCaWxsaW5nQWRkcmVzc09uQ2FydChpbnB1dDoge1xuICAgICAgY2FydF9pZDogJGNhcnRJZFxuICAgICAgYmlsbGluZ19hZGRyZXNzOiAkYWRkcmVzc1xuICAgIH0pIHtcbiAgICAgIGNhcnQge1xuICAgICAgICAuLi5jYXJ0XG4gICAgICAgICR7ZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICR7Y2FydEZyYWdtZW50fVxuICAke2RhZmZCdWlsZEZyYWdtZW50RGVmaW5pdGlvbiguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuYDtcbiJdfQ==