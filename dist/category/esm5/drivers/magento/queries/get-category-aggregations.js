/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import gql from 'graphql-tag';
/**
 * This query only exists because products and their associated aggregations/filter cannot
 * be retrieved through a category call.
 * @type {?}
 */
export var MagentoGetCategoryAggregations = gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\nquery MagentoGetProducts($filter: ProductAttributeFilterInput!)\n{\n\tproducts(filter: $filter)\n\t{\n\t\taggregations {\n\t\t\tlabel\n\t\t\tcount\n\t\t\tattribute_code\n\t\t\toptions {\n\t\t\t\t\tcount\n\t\t\t\t\tlabel\n\t\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t\tsort_fields {\n\t\t\tdefault\n\t\t\toptions {\n\t\t\t\tlabel\n\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t}\n}"], ["\nquery MagentoGetProducts($filter: ProductAttributeFilterInput!)\n{\n\tproducts(filter: $filter)\n\t{\n\t\taggregations {\n\t\t\tlabel\n\t\t\tcount\n\t\t\tattribute_code\n\t\t\toptions {\n\t\t\t\t\tcount\n\t\t\t\t\tlabel\n\t\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t\tsort_fields {\n\t\t\tdefault\n\t\t\toptions {\n\t\t\t\tlabel\n\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t}\n}"])));
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNhdGVnb3J5LWFnZ3JlZ2F0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by9xdWVyaWVzL2dldC1jYXRlZ29yeS1hZ2dyZWdhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEdBQUcsTUFBTSxhQUFhLENBQUM7Ozs7OztBQU05QixNQUFNLEtBQU8sOEJBQThCLEdBQUcsR0FBRyxvYkFBQSx5V0F1Qi9DLElBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuLyoqXG4gKiBUaGlzIHF1ZXJ5IG9ubHkgZXhpc3RzIGJlY2F1c2UgcHJvZHVjdHMgYW5kIHRoZWlyIGFzc29jaWF0ZWQgYWdncmVnYXRpb25zL2ZpbHRlciBjYW5ub3RcbiAqIGJlIHJldHJpZXZlZCB0aHJvdWdoIGEgY2F0ZWdvcnkgY2FsbC5cbiAqL1xuZXhwb3J0IGNvbnN0IE1hZ2VudG9HZXRDYXRlZ29yeUFnZ3JlZ2F0aW9ucyA9IGdxbGBcbnF1ZXJ5IE1hZ2VudG9HZXRQcm9kdWN0cygkZmlsdGVyOiBQcm9kdWN0QXR0cmlidXRlRmlsdGVySW5wdXQhKVxue1xuXHRwcm9kdWN0cyhmaWx0ZXI6ICRmaWx0ZXIpXG5cdHtcblx0XHRhZ2dyZWdhdGlvbnMge1xuXHRcdFx0bGFiZWxcblx0XHRcdGNvdW50XG5cdFx0XHRhdHRyaWJ1dGVfY29kZVxuXHRcdFx0b3B0aW9ucyB7XG5cdFx0XHRcdFx0Y291bnRcblx0XHRcdFx0XHRsYWJlbFxuXHRcdFx0XHRcdHZhbHVlXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNvcnRfZmllbGRzIHtcblx0XHRcdGRlZmF1bHRcblx0XHRcdG9wdGlvbnMge1xuXHRcdFx0XHRsYWJlbFxuXHRcdFx0XHR2YWx1ZVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufWBcbiJdfQ==