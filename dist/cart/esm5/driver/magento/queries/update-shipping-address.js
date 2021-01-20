/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartFragment } from './fragments/public_api';
/** @type {?} */
export var updateShippingAddress = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  mutation UpdateShippingAddress(\n    $cartId: String!,\n    $address: ShippingAddressInput!\n  ) {\n    setShippingAddressesOnCart(input: {\n      cart_id: $cartId\n      shipping_addresses: [$address]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation UpdateShippingAddress(\n    $cartId: String!,\n    $address: ShippingAddressInput!\n  ) {\n    setShippingAddressesOnCart(input: {\n      cart_id: $cartId\n      shipping_addresses: [$address]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, tslib_1.__spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, tslib_1.__spread(extraCartFragments)));
});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXNoaXBwaW5nLWFkZHJlc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvdXBkYXRlLXNoaXBwaW5nLWFkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7QUFFOUIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUV0RCxNQUFNLEtBQU8scUJBQXFCOzs7O0FBQUcsVUFBQyxrQkFBdUM7SUFBdkMsbUNBQUEsRUFBQSx1QkFBdUM7SUFBSyxPQUFBLEdBQUcsd1hBQUEsa1FBVzNFLEVBQWtELDJCQUl4RCxFQUFZLE1BQ1osRUFBa0QsSUFDckQsS0FOUywyQkFBMkIsZ0NBQUksa0JBQWtCLElBSXZELFlBQVksRUFDWiwyQkFBMkIsZ0NBQUksa0JBQWtCO0FBaEI2QixDQWlCakYsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IGRhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCwgZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbCc7XG5cbmltcG9ydCB7IGNhcnRGcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnRzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU2hpcHBpbmdBZGRyZXNzID0gKGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10gPSBbXSkgPT4gZ3FsYFxuICBtdXRhdGlvbiBVcGRhdGVTaGlwcGluZ0FkZHJlc3MoXG4gICAgJGNhcnRJZDogU3RyaW5nISxcbiAgICAkYWRkcmVzczogU2hpcHBpbmdBZGRyZXNzSW5wdXQhXG4gICkge1xuICAgIHNldFNoaXBwaW5nQWRkcmVzc2VzT25DYXJ0KGlucHV0OiB7XG4gICAgICBjYXJ0X2lkOiAkY2FydElkXG4gICAgICBzaGlwcGluZ19hZGRyZXNzZXM6IFskYWRkcmVzc11cbiAgICB9KSB7XG4gICAgICBjYXJ0IHtcbiAgICAgICAgLi4uY2FydFxuICAgICAgICAke2RhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAke2NhcnRGcmFnbWVudH1cbiAgJHtkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24oLi4uZXh0cmFDYXJ0RnJhZ21lbnRzKX1cbmA7XG4iXX0=