/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
import { magentoProductFragment } from './fragments/product';
/** @type {?} */
export var GetAllProductsQuery = gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\nquery GetAllProducts($pageSize: Int)\n{\n\tproducts(search: \"Shirt\", pageSize: $pageSize)\n\t{\n\t\ttotal_count\n\t\titems {\n\t\t\t...product\n\t\t}\n\t\tpage_info {\n\t\t\tpage_size\n\t\t\tcurrent_page\n\t\t}\n\t}\n}\n", "\n"], ["\nquery GetAllProducts($pageSize: Int)\n{\n\tproducts(search: \"Shirt\", pageSize: $pageSize)\n\t{\n\t\ttotal_count\n\t\titems {\n\t\t\t...product\n\t\t}\n\t\tpage_info {\n\t\t\tpage_size\n\t\t\tcurrent_page\n\t\t}\n\t}\n}\n", "\n"])), magentoProductFragment);
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWFsbC1wcm9kdWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsiZHJpdmVycy9tYWdlbnRvL3F1ZXJpZXMvZ2V0LWFsbC1wcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUM5QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFN0QsTUFBTSxLQUFPLG1CQUFtQixHQUFHLEdBQUcsbVRBQUEsa09BZXBDLEVBQXNCLElBQ3ZCLEtBREMsc0JBQXNCLENBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBtYWdlbnRvUHJvZHVjdEZyYWdtZW50IH0gZnJvbSAnLi9mcmFnbWVudHMvcHJvZHVjdCc7XG5cbmV4cG9ydCBjb25zdCBHZXRBbGxQcm9kdWN0c1F1ZXJ5ID0gZ3FsYFxucXVlcnkgR2V0QWxsUHJvZHVjdHMoJHBhZ2VTaXplOiBJbnQpXG57XG5cdHByb2R1Y3RzKHNlYXJjaDogXCJTaGlydFwiLCBwYWdlU2l6ZTogJHBhZ2VTaXplKVxuXHR7XG5cdFx0dG90YWxfY291bnRcblx0XHRpdGVtcyB7XG5cdFx0XHQuLi5wcm9kdWN0XG5cdFx0fVxuXHRcdHBhZ2VfaW5mbyB7XG5cdFx0XHRwYWdlX3NpemVcblx0XHRcdGN1cnJlbnRfcGFnZVxuXHRcdH1cblx0fVxufVxuJHttYWdlbnRvUHJvZHVjdEZyYWdtZW50fVxuYFxuIl19