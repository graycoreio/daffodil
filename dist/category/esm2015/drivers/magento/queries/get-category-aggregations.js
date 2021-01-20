/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
/**
 * This query only exists because products and their associated aggregations/filter cannot
 * be retrieved through a category call.
 * @type {?}
 */
export const MagentoGetCategoryAggregations = gql `
query MagentoGetProducts($filter: ProductAttributeFilterInput!)
{
	products(filter: $filter)
	{
		aggregations {
			label
			count
			attribute_code
			options {
					count
					label
					value
			}
		}
		sort_fields {
			default
			options {
				label
				value
			}
		}
	}
}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNhdGVnb3J5LWFnZ3JlZ2F0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by9xdWVyaWVzL2dldC1jYXRlZ29yeS1hZ2dyZWdhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQzs7Ozs7O0FBTTlCLE1BQU0sT0FBTyw4QkFBOEIsR0FBRyxHQUFHLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdUIvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG4vKipcbiAqIFRoaXMgcXVlcnkgb25seSBleGlzdHMgYmVjYXVzZSBwcm9kdWN0cyBhbmQgdGhlaXIgYXNzb2NpYXRlZCBhZ2dyZWdhdGlvbnMvZmlsdGVyIGNhbm5vdFxuICogYmUgcmV0cmlldmVkIHRocm91Z2ggYSBjYXRlZ29yeSBjYWxsLlxuICovXG5leHBvcnQgY29uc3QgTWFnZW50b0dldENhdGVnb3J5QWdncmVnYXRpb25zID0gZ3FsYFxucXVlcnkgTWFnZW50b0dldFByb2R1Y3RzKCRmaWx0ZXI6IFByb2R1Y3RBdHRyaWJ1dGVGaWx0ZXJJbnB1dCEpXG57XG5cdHByb2R1Y3RzKGZpbHRlcjogJGZpbHRlcilcblx0e1xuXHRcdGFnZ3JlZ2F0aW9ucyB7XG5cdFx0XHRsYWJlbFxuXHRcdFx0Y291bnRcblx0XHRcdGF0dHJpYnV0ZV9jb2RlXG5cdFx0XHRvcHRpb25zIHtcblx0XHRcdFx0XHRjb3VudFxuXHRcdFx0XHRcdGxhYmVsXG5cdFx0XHRcdFx0dmFsdWVcblx0XHRcdH1cblx0XHR9XG5cdFx0c29ydF9maWVsZHMge1xuXHRcdFx0ZGVmYXVsdFxuXHRcdFx0b3B0aW9ucyB7XG5cdFx0XHRcdGxhYmVsXG5cdFx0XHRcdHZhbHVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59YFxuIl19