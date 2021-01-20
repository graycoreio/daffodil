/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @param {?} filter
 * @return {?}
 */
export function buildCustomMetadataAttribute(filter) {
    return {
        attribute_code: filter.attribute_code,
        entity_type: '4'
    };
}
/**
 * @param {?} attributeResponse
 * @param {?} aggregationResponse
 * @return {?}
 */
export function addMetadataTypesToAggregates(attributeResponse, aggregationResponse) {
    return tslib_1.__assign({}, aggregationResponse, { products: tslib_1.__assign({}, aggregationResponse.products, { aggregations: tslib_1.__spread(aggregationResponse.products.aggregations.map((/**
             * @param {?} aggregate
             * @return {?}
             */
            function (aggregate) {
                return tslib_1.__assign({}, aggregate, { type: getMatchedAttributeType(aggregate, attributeResponse) });
            }))) }) });
}
/**
 * @param {?} aggregate
 * @param {?} attributes
 * @return {?}
 */
function getMatchedAttributeType(aggregate, attributes) {
    if (aggregate.attribute_code === 'category_id')
        return 'select';
    return attributes.customAttributeMetadata.items.filter((/**
     * @param {?} item
     * @return {?}
     */
    function (item) { return item.attribute_code === aggregate.attribute_code; }))[0].input_type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLW1ldGFkYXRhLWF0dHJpYnV0ZXMtbWV0aG9kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by90cmFuc2Zvcm1lcnMvY3VzdG9tLW1ldGFkYXRhLWF0dHJpYnV0ZXMtbWV0aG9kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxNQUFNLFVBQVUsNEJBQTRCLENBQUMsTUFBMEI7SUFDdEUsT0FBTztRQUNOLGNBQWMsRUFBRSxNQUFNLENBQUMsY0FBYztRQUNyQyxXQUFXLEVBQUUsR0FBRztLQUNoQixDQUFBO0FBQ0YsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLDRCQUE0QixDQUMzQyxpQkFBeUQsRUFDekQsbUJBQTJEO0lBRzNELDRCQUNJLG1CQUFtQixJQUN0QixRQUFRLHVCQUNKLG1CQUFtQixDQUFDLFFBQVEsSUFDL0IsWUFBWSxtQkFDUixtQkFBbUIsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFDLFNBQVM7Z0JBQzFELDRCQUNJLFNBQVMsSUFDWixJQUFJLEVBQUUsdUJBQXVCLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLElBQzNEO1lBQ0YsQ0FBQyxFQUFDLFFBR0o7QUFDRixDQUFDOzs7Ozs7QUFFRCxTQUFTLHVCQUF1QixDQUFDLFNBQTZCLEVBQUUsVUFBa0Q7SUFDakgsSUFBRyxTQUFTLENBQUMsY0FBYyxLQUFLLGFBQWE7UUFBRSxPQUFPLFFBQVEsQ0FBQztJQUUvRCxPQUFPLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsTUFBTTs7OztJQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLGNBQWMsS0FBSyxTQUFTLENBQUMsY0FBYyxFQUFoRCxDQUFnRCxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0FBQ2hJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYWdlbnRvQWdncmVnYXRpb24gfSBmcm9tICcuLi9tb2RlbHMvYWdncmVnYXRpb24nO1xuaW1wb3J0IHsgTWFnZW50b0N1c3RvbU1ldGFkYXRhQXR0cmlidXRlIH0gZnJvbSAnLi4vbW9kZWxzL3JlcXVlc3RzL2N1c3RvbS1tZXRhZGF0YS1hdHRyaWJ1dGUnO1xuaW1wb3J0IHsgTWFnZW50b0N1c3RvbUF0dHJpYnV0ZU1ldGFkYXRhUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbHMvY3VzdG9tLWF0dHJpYnV0ZS1tZXRhZGF0YS1yZXNwb25zZSc7XG5pbXBvcnQgeyBNYWdlbnRvR2V0Q2F0ZWdvcnlBZ2dyZWdhdGlvbnNSZXNwb25zZSB9IGZyb20gJy4uL21vZGVscy9nZXQtY2F0ZWdvcnktYWdncmVnYXRpb25zLXJlc3BvbnNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ3VzdG9tTWV0YWRhdGFBdHRyaWJ1dGUoZmlsdGVyOiBNYWdlbnRvQWdncmVnYXRpb24pOiBNYWdlbnRvQ3VzdG9tTWV0YWRhdGFBdHRyaWJ1dGUge1xuXHRyZXR1cm4ge1xuXHRcdGF0dHJpYnV0ZV9jb2RlOiBmaWx0ZXIuYXR0cmlidXRlX2NvZGUsXG5cdFx0ZW50aXR5X3R5cGU6ICc0J1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRNZXRhZGF0YVR5cGVzVG9BZ2dyZWdhdGVzKFxuXHRhdHRyaWJ1dGVSZXNwb25zZTogTWFnZW50b0N1c3RvbUF0dHJpYnV0ZU1ldGFkYXRhUmVzcG9uc2UsIFxuXHRhZ2dyZWdhdGlvblJlc3BvbnNlOiBNYWdlbnRvR2V0Q2F0ZWdvcnlBZ2dyZWdhdGlvbnNSZXNwb25zZVxuKTogTWFnZW50b0dldENhdGVnb3J5QWdncmVnYXRpb25zUmVzcG9uc2Uge1xuXG5cdHJldHVybiB7XG5cdFx0Li4uYWdncmVnYXRpb25SZXNwb25zZSxcblx0XHRwcm9kdWN0czoge1xuXHRcdFx0Li4uYWdncmVnYXRpb25SZXNwb25zZS5wcm9kdWN0cyxcblx0XHRcdGFnZ3JlZ2F0aW9uczogW1xuXHRcdFx0XHQuLi5hZ2dyZWdhdGlvblJlc3BvbnNlLnByb2R1Y3RzLmFnZ3JlZ2F0aW9ucy5tYXAoKGFnZ3JlZ2F0ZSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHQuLi5hZ2dyZWdhdGUsXG5cdFx0XHRcdFx0XHR0eXBlOiBnZXRNYXRjaGVkQXR0cmlidXRlVHlwZShhZ2dyZWdhdGUsIGF0dHJpYnV0ZVJlc3BvbnNlKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdF1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0TWF0Y2hlZEF0dHJpYnV0ZVR5cGUoYWdncmVnYXRlOiBNYWdlbnRvQWdncmVnYXRpb24sIGF0dHJpYnV0ZXM6IE1hZ2VudG9DdXN0b21BdHRyaWJ1dGVNZXRhZGF0YVJlc3BvbnNlKTogc3RyaW5nIHtcblx0aWYoYWdncmVnYXRlLmF0dHJpYnV0ZV9jb2RlID09PSAnY2F0ZWdvcnlfaWQnKSByZXR1cm4gJ3NlbGVjdCc7XG5cblx0cmV0dXJuIGF0dHJpYnV0ZXMuY3VzdG9tQXR0cmlidXRlTWV0YWRhdGEuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5hdHRyaWJ1dGVfY29kZSA9PT0gYWdncmVnYXRlLmF0dHJpYnV0ZV9jb2RlKVswXS5pbnB1dF90eXBlO1xufVxuIl19