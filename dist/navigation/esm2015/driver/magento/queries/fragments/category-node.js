/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
/**
 * A category tree fragment with no nested children.
 * @type {?}
 */
const categoryNodeFragment = `
	id
	level
	name
	include_in_menu
	breadcrumbs {
		category_id
		category_name
		category_level
		category_url_key
	}
	product_count
`
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
export function getCategoryNodeFragment(depth = 3) {
    /** @type {?} */
    const fragmentBody = new Array(depth).fill(null).reduce((/**
     * @param {?} acc
     * @return {?}
     */
    acc => `
    ${categoryNodeFragment}
    children_count
    children {
      ${acc}
    }
  `), categoryNodeFragment);
    return gql `
    fragment recursiveCategoryNode on CategoryTree {
      ${fragmentBody}
    }
  `;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbm9kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9uYXZpZ2F0aW9uL2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsicXVlcmllcy9mcmFnbWVudHMvY2F0ZWdvcnktbm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDOzs7OztNQUt4QixvQkFBb0IsR0FBRzs7Ozs7Ozs7Ozs7O0NBWTVCO0FBRUQ7OztHQUdHO0FBQ0gscUdBQXFHOzs7Ozs7OztBQUNyRyxNQUFNLFVBQVUsdUJBQXVCLENBQUMsUUFBZ0IsQ0FBQzs7VUFDakQsWUFBWSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNOzs7O0lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztNQUMzRCxvQkFBb0I7OztRQUdsQixHQUFHOztHQUVSLEdBQUUsb0JBQW9CLENBQUM7SUFFeEIsT0FBTyxHQUFHLENBQUE7O1FBRUosWUFBWTs7R0FFakIsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG4vKipcbiAqIEEgY2F0ZWdvcnkgdHJlZSBmcmFnbWVudCB3aXRoIG5vIG5lc3RlZCBjaGlsZHJlbi5cbiAqL1xuY29uc3QgY2F0ZWdvcnlOb2RlRnJhZ21lbnQgPSBgXG5cdGlkXG5cdGxldmVsXG5cdG5hbWVcblx0aW5jbHVkZV9pbl9tZW51XG5cdGJyZWFkY3J1bWJzIHtcblx0XHRjYXRlZ29yeV9pZFxuXHRcdGNhdGVnb3J5X25hbWVcblx0XHRjYXRlZ29yeV9sZXZlbFxuXHRcdGNhdGVnb3J5X3VybF9rZXlcblx0fVxuXHRwcm9kdWN0X2NvdW50XG5gXG5cbi8qKlxuICogR2VuZXJhdGVzIGEgY2F0ZWdvcnkgdHJlZSBmcmFnbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG5lc3RlZCBjaGlsZCBjYXRlZ29yeSB0cmVlcy5cbiAqIEBwYXJhbSBkZXB0aCBUaGUgbWF4aW11bSBkZXB0aCB0byB3aGljaCBjYXRlZ29yeSBjaGlsZHJlbiBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIGZyYWdtZW50LlxuICovXG4vL3RvZG86IHVzZSBuZXN0ZWQgZnJhZ21lbnRzIHdoZW4gdGhpcyBidWcgaXMgZml4ZWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYWdlbnRvL21hZ2VudG8yL2lzc3Vlcy8zMTA4NlxuZXhwb3J0IGZ1bmN0aW9uIGdldENhdGVnb3J5Tm9kZUZyYWdtZW50KGRlcHRoOiBudW1iZXIgPSAzKTogRG9jdW1lbnROb2RlIHtcbiAgY29uc3QgZnJhZ21lbnRCb2R5ID0gbmV3IEFycmF5KGRlcHRoKS5maWxsKG51bGwpLnJlZHVjZShhY2MgPT4gYFxuICAgICR7Y2F0ZWdvcnlOb2RlRnJhZ21lbnR9XG4gICAgY2hpbGRyZW5fY291bnRcbiAgICBjaGlsZHJlbiB7XG4gICAgICAke2FjY31cbiAgICB9XG4gIGAsIGNhdGVnb3J5Tm9kZUZyYWdtZW50KVxuXG4gIHJldHVybiBncWxgXG4gICAgZnJhZ21lbnQgcmVjdXJzaXZlQ2F0ZWdvcnlOb2RlIG9uIENhdGVnb3J5VHJlZSB7XG4gICAgICAke2ZyYWdtZW50Qm9keX1cbiAgICB9XG4gIGBcbn1cbiJdfQ==