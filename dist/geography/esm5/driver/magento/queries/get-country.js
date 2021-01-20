var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { countryFragment, regionFragment } from './fragments/public_api';
/** @type {?} */
export var getCountry = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query GetCountry($countryId: String!) {\n    country(id: $countryId) {\n      ...country\n      available_regions {\n        ...region\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query GetCountry($countryId: String!) {\n    country(id: $countryId) {\n      ...country\n      available_regions {\n        ...region\n      }\n    }\n  }\n  ", "\n  ", "\n"])), countryFragment, regionFragment);
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNvdW50cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsicXVlcmllcy9nZXQtY291bnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUV6RSxNQUFNLEtBQU8sVUFBVSxHQUFHLEdBQUcsc1BBQUEscUtBU3pCLEVBQWUsTUFDZixFQUFjLElBQ2pCLEtBRkcsZUFBZSxFQUNmLGNBQWMsQ0FDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgY291bnRyeUZyYWdtZW50LCByZWdpb25GcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnRzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgY29uc3QgZ2V0Q291bnRyeSA9IGdxbGBcbiAgcXVlcnkgR2V0Q291bnRyeSgkY291bnRyeUlkOiBTdHJpbmchKSB7XG4gICAgY291bnRyeShpZDogJGNvdW50cnlJZCkge1xuICAgICAgLi4uY291bnRyeVxuICAgICAgYXZhaWxhYmxlX3JlZ2lvbnMge1xuICAgICAgICAuLi5yZWdpb25cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtjb3VudHJ5RnJhZ21lbnR9XG4gICR7cmVnaW9uRnJhZ21lbnR9XG5gO1xuIl19