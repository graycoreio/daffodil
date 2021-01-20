/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { getCategoryNodeFragment } from './fragments/category-node';
/**
 * Generates a category tree query with the specified number of nested child category tree fragments.
 * @param {?=} depth The maximum depth to which category children should be added to the fragment.
 * @return {?}
 */
export function daffMagentoGetCategoryTree(depth = 3) {
    return gql `
    query GetCategoryTree($filters: CategoryFilterInput!){
      categoryList(filters: $filters) {
        ...recursiveCategoryNode
      }
    }
    ${getCategoryNodeFragment(depth)}
  `;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNhdGVnb3J5LXRyZWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvbmF2aWdhdGlvbi9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInF1ZXJpZXMvZ2V0LWNhdGVnb3J5LXRyZWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7O0FBTXBFLE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxRQUFnQixDQUFDO0lBQzFELE9BQU8sR0FBRyxDQUFBOzs7Ozs7TUFNTix1QkFBdUIsQ0FBQyxLQUFLLENBQUM7R0FDakMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgZ2V0Q2F0ZWdvcnlOb2RlRnJhZ21lbnQgfSBmcm9tICcuL2ZyYWdtZW50cy9jYXRlZ29yeS1ub2RlJztcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBjYXRlZ29yeSB0cmVlIHF1ZXJ5IHdpdGggdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbmVzdGVkIGNoaWxkIGNhdGVnb3J5IHRyZWUgZnJhZ21lbnRzLlxuICogQHBhcmFtIGRlcHRoIFRoZSBtYXhpbXVtIGRlcHRoIHRvIHdoaWNoIGNhdGVnb3J5IGNoaWxkcmVuIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgZnJhZ21lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkYWZmTWFnZW50b0dldENhdGVnb3J5VHJlZShkZXB0aDogbnVtYmVyID0gMykge1xuICByZXR1cm4gZ3FsYFxuICAgIHF1ZXJ5IEdldENhdGVnb3J5VHJlZSgkZmlsdGVyczogQ2F0ZWdvcnlGaWx0ZXJJbnB1dCEpe1xuICAgICAgY2F0ZWdvcnlMaXN0KGZpbHRlcnM6ICRmaWx0ZXJzKSB7XG4gICAgICAgIC4uLnJlY3Vyc2l2ZUNhdGVnb3J5Tm9kZVxuICAgICAgfVxuICAgIH1cbiAgICAke2dldENhdGVnb3J5Tm9kZUZyYWdtZW50KGRlcHRoKX1cbiAgYDtcbn1cbiJdfQ==