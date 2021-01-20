/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
import { getCategoryNodeFragment } from './fragments/category-node';
/**
 * Generates a category tree query with the specified number of nested child category tree fragments.
 * @param {?=} depth The maximum depth to which category children should be added to the fragment.
 * @return {?}
 */
export function daffMagentoGetCategoryTree(depth) {
    if (depth === void 0) { depth = 3; }
    return gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    query GetCategoryTree($filters: CategoryFilterInput!){\n      categoryList(filters: $filters) {\n        ...recursiveCategoryNode\n      }\n    }\n    ", "\n  "], ["\n    query GetCategoryTree($filters: CategoryFilterInput!){\n      categoryList(filters: $filters) {\n        ...recursiveCategoryNode\n      }\n    }\n    ", "\n  "])), getCategoryNodeFragment(depth));
}
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNhdGVnb3J5LXRyZWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvbmF2aWdhdGlvbi9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvZ2V0LWNhdGVnb3J5LXRyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7QUFFOUIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7OztBQU1wRSxNQUFNLFVBQVUsMEJBQTBCLENBQUMsS0FBaUI7SUFBakIsc0JBQUEsRUFBQSxTQUFpQjtJQUMxRCxPQUFPLEdBQUcsa1BBQUEsK0pBTU4sRUFBOEIsTUFDakMsS0FERyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsRUFDaEM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IGdldENhdGVnb3J5Tm9kZUZyYWdtZW50IH0gZnJvbSAnLi9mcmFnbWVudHMvY2F0ZWdvcnktbm9kZSc7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgY2F0ZWdvcnkgdHJlZSBxdWVyeSB3aXRoIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG5lc3RlZCBjaGlsZCBjYXRlZ29yeSB0cmVlIGZyYWdtZW50cy5cbiAqIEBwYXJhbSBkZXB0aCBUaGUgbWF4aW11bSBkZXB0aCB0byB3aGljaCBjYXRlZ29yeSBjaGlsZHJlbiBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIGZyYWdtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGFmZk1hZ2VudG9HZXRDYXRlZ29yeVRyZWUoZGVwdGg6IG51bWJlciA9IDMpIHtcbiAgcmV0dXJuIGdxbGBcbiAgICBxdWVyeSBHZXRDYXRlZ29yeVRyZWUoJGZpbHRlcnM6IENhdGVnb3J5RmlsdGVySW5wdXQhKXtcbiAgICAgIGNhdGVnb3J5TGlzdChmaWx0ZXJzOiAkZmlsdGVycykge1xuICAgICAgICAuLi5yZWN1cnNpdmVDYXRlZ29yeU5vZGVcbiAgICAgIH1cbiAgICB9XG4gICAgJHtnZXRDYXRlZ29yeU5vZGVGcmFnbWVudChkZXB0aCl9XG4gIGA7XG59XG4iXX0=