/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
/** @type {?} */
export const MagentoGetCategoryQuery = gql `
query MagentoGetCategoryQuery($filters: CategoryFilterInput){
	categoryList(filters: $filters) {
		id
		name
		level
		description
		breadcrumbs {
			category_id
			category_name
			category_level
			category_url_key
		}
		products {
			items {
				sku
			}
		}
		children_count
	}
}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNhdGVnb3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhdGVnb3J5LyIsInNvdXJjZXMiOlsiZHJpdmVycy9tYWdlbnRvL3F1ZXJpZXMvZ2V0LWNhdGVnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7O0FBRTlCLE1BQU0sT0FBTyx1QkFBdUIsR0FBRyxHQUFHLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0J4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5leHBvcnQgY29uc3QgTWFnZW50b0dldENhdGVnb3J5UXVlcnkgPSBncWxgXG5xdWVyeSBNYWdlbnRvR2V0Q2F0ZWdvcnlRdWVyeSgkZmlsdGVyczogQ2F0ZWdvcnlGaWx0ZXJJbnB1dCl7XG5cdGNhdGVnb3J5TGlzdChmaWx0ZXJzOiAkZmlsdGVycykge1xuXHRcdGlkXG5cdFx0bmFtZVxuXHRcdGxldmVsXG5cdFx0ZGVzY3JpcHRpb25cblx0XHRicmVhZGNydW1icyB7XG5cdFx0XHRjYXRlZ29yeV9pZFxuXHRcdFx0Y2F0ZWdvcnlfbmFtZVxuXHRcdFx0Y2F0ZWdvcnlfbGV2ZWxcblx0XHRcdGNhdGVnb3J5X3VybF9rZXlcblx0XHR9XG5cdFx0cHJvZHVjdHMge1xuXHRcdFx0aXRlbXMge1xuXHRcdFx0XHRza3Vcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2hpbGRyZW5fY291bnRcblx0fVxufWBcbiJdfQ==