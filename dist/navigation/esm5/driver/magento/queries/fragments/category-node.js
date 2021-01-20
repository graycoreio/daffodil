/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
/**
 * A category tree fragment with no nested children.
 * @type {?}
 */
var categoryNodeFragment = "\n\tid\n\tlevel\n\tname\n\tinclude_in_menu\n\tbreadcrumbs {\n\t\tcategory_id\n\t\tcategory_name\n\t\tcategory_level\n\t\tcategory_url_key\n\t}\n\tproduct_count\n"
/**
 * Generates a category tree fragment with the specified number of nested child category trees.
 * @param depth The maximum depth to which category children should be added to the fragment.
 */
//todo: use nested fragments when this bug is fixed: https://github.com/magento/magento2/issues/31086
;
/**
 * Generates a category tree fragment with the specified number of nested child category trees.
 * @param {?=} depth The maximum depth to which category children should be added to the fragment.
 * @return {?}
 */
//todo: use nested fragments when this bug is fixed: https://github.com/magento/magento2/issues/31086
export function getCategoryNodeFragment(depth) {
    if (depth === void 0) { depth = 3; }
    /** @type {?} */
    var fragmentBody = new Array(depth).fill(null).reduce((/**
     * @param {?} acc
     * @return {?}
     */
    function (acc) { return "\n    " + categoryNodeFragment + "\n    children_count\n    children {\n      " + acc + "\n    }\n  "; }), categoryNodeFragment);
    return gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    fragment recursiveCategoryNode on CategoryTree {\n      ", "\n    }\n  "], ["\n    fragment recursiveCategoryNode on CategoryTree {\n      ", "\n    }\n  "])), fragmentBody);
}
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbm9kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9uYXZpZ2F0aW9uL2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsicXVlcmllcy9mcmFnbWVudHMvY2F0ZWdvcnktbm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQzs7Ozs7SUFLeEIsb0JBQW9CLEdBQUcsbUtBWTVCO0FBRUQ7OztHQUdHO0FBQ0gscUdBQXFHOzs7Ozs7OztBQUNyRyxNQUFNLFVBQVUsdUJBQXVCLENBQUMsS0FBaUI7SUFBakIsc0JBQUEsRUFBQSxTQUFpQjs7UUFDakQsWUFBWSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNOzs7O0lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxXQUMzRCxvQkFBb0Isb0RBR2xCLEdBQUcsZ0JBRVIsRUFOOEQsQ0FNOUQsR0FBRSxvQkFBb0IsQ0FBQztJQUV4QixPQUFPLEdBQUcsMEpBQUEsZ0VBRUosRUFBWSxhQUVqQixLQUZLLFlBQVksRUFFakI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnROb2RlIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuLyoqXG4gKiBBIGNhdGVnb3J5IHRyZWUgZnJhZ21lbnQgd2l0aCBubyBuZXN0ZWQgY2hpbGRyZW4uXG4gKi9cbmNvbnN0IGNhdGVnb3J5Tm9kZUZyYWdtZW50ID0gYFxuXHRpZFxuXHRsZXZlbFxuXHRuYW1lXG5cdGluY2x1ZGVfaW5fbWVudVxuXHRicmVhZGNydW1icyB7XG5cdFx0Y2F0ZWdvcnlfaWRcblx0XHRjYXRlZ29yeV9uYW1lXG5cdFx0Y2F0ZWdvcnlfbGV2ZWxcblx0XHRjYXRlZ29yeV91cmxfa2V5XG5cdH1cblx0cHJvZHVjdF9jb3VudFxuYFxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGNhdGVnb3J5IHRyZWUgZnJhZ21lbnQgd2l0aCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBuZXN0ZWQgY2hpbGQgY2F0ZWdvcnkgdHJlZXMuXG4gKiBAcGFyYW0gZGVwdGggVGhlIG1heGltdW0gZGVwdGggdG8gd2hpY2ggY2F0ZWdvcnkgY2hpbGRyZW4gc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBmcmFnbWVudC5cbiAqL1xuLy90b2RvOiB1c2UgbmVzdGVkIGZyYWdtZW50cyB3aGVuIHRoaXMgYnVnIGlzIGZpeGVkOiBodHRwczovL2dpdGh1Yi5jb20vbWFnZW50by9tYWdlbnRvMi9pc3N1ZXMvMzEwODZcbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXRlZ29yeU5vZGVGcmFnbWVudChkZXB0aDogbnVtYmVyID0gMyk6IERvY3VtZW50Tm9kZSB7XG4gIGNvbnN0IGZyYWdtZW50Qm9keSA9IG5ldyBBcnJheShkZXB0aCkuZmlsbChudWxsKS5yZWR1Y2UoYWNjID0+IGBcbiAgICAke2NhdGVnb3J5Tm9kZUZyYWdtZW50fVxuICAgIGNoaWxkcmVuX2NvdW50XG4gICAgY2hpbGRyZW4ge1xuICAgICAgJHthY2N9XG4gICAgfVxuICBgLCBjYXRlZ29yeU5vZGVGcmFnbWVudClcblxuICByZXR1cm4gZ3FsYFxuICAgIGZyYWdtZW50IHJlY3Vyc2l2ZUNhdGVnb3J5Tm9kZSBvbiBDYXRlZ29yeVRyZWUge1xuICAgICAgJHtmcmFnbWVudEJvZHl9XG4gICAgfVxuICBgXG59XG4iXX0=