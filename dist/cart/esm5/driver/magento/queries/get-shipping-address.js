/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition } from '@daffodil/core/graphql';
import { cartAddressFragment } from './fragments/public_api';
/** @type {?} */
export var getShippingAddress = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  query GetShippingAddress($cartId: String!) {\n    cart(cart_id: $cartId) {\n      shipping_addresses {\n        ...cartAddress\n      }\n      email\n      ", "\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query GetShippingAddress($cartId: String!) {\n    cart(cart_id: $cartId) {\n      shipping_addresses {\n        ...cartAddress\n      }\n      email\n      ", "\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, tslib_1.__spread(extraCartFragments)), cartAddressFragment, daffBuildFragmentDefinition.apply(void 0, tslib_1.__spread(extraCartFragments)));
});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXNoaXBwaW5nLWFkZHJlc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvZ2V0LXNoaXBwaW5nLWFkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7QUFFOUIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTdELE1BQU0sS0FBTyxrQkFBa0I7Ozs7QUFBRyxVQUFDLGtCQUF1QztJQUF2QyxtQ0FBQSxFQUFBLHVCQUF1QztJQUFLLE9BQUEsR0FBRywrUUFBQSxrS0FPMUUsRUFBa0Qsa0JBR3RELEVBQW1CLE1BQ25CLEVBQWtELElBQ3JELEtBTE8sMkJBQTJCLGdDQUFJLGtCQUFrQixJQUdyRCxtQkFBbUIsRUFDbkIsMkJBQTJCLGdDQUFJLGtCQUFrQjtBQVgwQixDQVk5RSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgZGFmZkJ1aWxkRnJhZ21lbnROYW1lU3ByZWFkLCBkYWZmQnVpbGRGcmFnbWVudERlZmluaXRpb24gfSBmcm9tICdAZGFmZm9kaWwvY29yZS9ncmFwaHFsJztcblxuaW1wb3J0IHsgY2FydEFkZHJlc3NGcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnRzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgY29uc3QgZ2V0U2hpcHBpbmdBZGRyZXNzID0gKGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10gPSBbXSkgPT4gZ3FsYFxuICBxdWVyeSBHZXRTaGlwcGluZ0FkZHJlc3MoJGNhcnRJZDogU3RyaW5nISkge1xuICAgIGNhcnQoY2FydF9pZDogJGNhcnRJZCkge1xuICAgICAgc2hpcHBpbmdfYWRkcmVzc2VzIHtcbiAgICAgICAgLi4uY2FydEFkZHJlc3NcbiAgICAgIH1cbiAgICAgIGVtYWlsXG4gICAgICAke2RhZmZCdWlsZEZyYWdtZW50TmFtZVNwcmVhZCguLi5leHRyYUNhcnRGcmFnbWVudHMpfVxuICAgIH1cbiAgfVxuICAke2NhcnRBZGRyZXNzRnJhZ21lbnR9XG4gICR7ZGFmZkJ1aWxkRnJhZ21lbnREZWZpbml0aW9uKC4uLmV4dHJhQ2FydEZyYWdtZW50cyl9XG5gO1xuIl19