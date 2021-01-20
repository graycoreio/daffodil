var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { countryFragment } from './fragments/public_api';
/** @type {?} */
export var getCountries = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query GetCountries {\n    countries {\n      ...country\n    }\n  }\n  ", "\n"], ["\n  query GetCountries {\n    countries {\n      ...country\n    }\n  }\n  ", "\n"])), countryFragment);
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNvdW50cmllcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9nZW9ncmFwaHkvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJxdWVyaWVzL2dldC1jb3VudHJpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7QUFFOUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUV6RCxNQUFNLEtBQU8sWUFBWSxHQUFHLEdBQUcsc0pBQUEsNkVBTTNCLEVBQWUsSUFDbEIsS0FERyxlQUFlLENBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IGNvdW50cnlGcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnRzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgY29uc3QgZ2V0Q291bnRyaWVzID0gZ3FsYFxuICBxdWVyeSBHZXRDb3VudHJpZXMge1xuICAgIGNvdW50cmllcyB7XG4gICAgICAuLi5jb3VudHJ5XG4gICAgfVxuICB9XG4gICR7Y291bnRyeUZyYWdtZW50fVxuYDtcbiJdfQ==