/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { magentoProductFragment } from './fragments/product';
/** @type {?} */
export const GetAllProductsQuery = gql `
query GetAllProducts($pageSize: Int)
{
	products(search: "Shirt", pageSize: $pageSize)
	{
		total_count
		items {
			...product
		}
		page_info {
			page_size
			current_page
		}
	}
}
${magentoProductFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWFsbC1wcm9kdWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsiZHJpdmVycy9tYWdlbnRvL3F1ZXJpZXMvZ2V0LWFsbC1wcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBQzlCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUU3RCxNQUFNLE9BQU8sbUJBQW1CLEdBQUcsR0FBRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7RUFlcEMsc0JBQXNCO0NBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBtYWdlbnRvUHJvZHVjdEZyYWdtZW50IH0gZnJvbSAnLi9mcmFnbWVudHMvcHJvZHVjdCc7XG5cbmV4cG9ydCBjb25zdCBHZXRBbGxQcm9kdWN0c1F1ZXJ5ID0gZ3FsYFxucXVlcnkgR2V0QWxsUHJvZHVjdHMoJHBhZ2VTaXplOiBJbnQpXG57XG5cdHByb2R1Y3RzKHNlYXJjaDogXCJTaGlydFwiLCBwYWdlU2l6ZTogJHBhZ2VTaXplKVxuXHR7XG5cdFx0dG90YWxfY291bnRcblx0XHRpdGVtcyB7XG5cdFx0XHQuLi5wcm9kdWN0XG5cdFx0fVxuXHRcdHBhZ2VfaW5mbyB7XG5cdFx0XHRwYWdlX3NpemVcblx0XHRcdGN1cnJlbnRfcGFnZVxuXHRcdH1cblx0fVxufVxuJHttYWdlbnRvUHJvZHVjdEZyYWdtZW50fVxuYFxuIl19