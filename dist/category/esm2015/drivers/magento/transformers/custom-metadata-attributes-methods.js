/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    return Object.assign({}, aggregationResponse, { products: Object.assign({}, aggregationResponse.products, { aggregations: [
                ...aggregationResponse.products.aggregations.map((/**
                 * @param {?} aggregate
                 * @return {?}
                 */
                (aggregate) => {
                    return Object.assign({}, aggregate, { type: getMatchedAttributeType(aggregate, attributeResponse) });
                }))
            ] }) });
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
    item => item.attribute_code === aggregate.attribute_code))[0].input_type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLW1ldGFkYXRhLWF0dHJpYnV0ZXMtbWV0aG9kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by90cmFuc2Zvcm1lcnMvY3VzdG9tLW1ldGFkYXRhLWF0dHJpYnV0ZXMtbWV0aG9kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUtBLE1BQU0sVUFBVSw0QkFBNEIsQ0FBQyxNQUEwQjtJQUN0RSxPQUFPO1FBQ04sY0FBYyxFQUFFLE1BQU0sQ0FBQyxjQUFjO1FBQ3JDLFdBQVcsRUFBRSxHQUFHO0tBQ2hCLENBQUE7QUFDRixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsNEJBQTRCLENBQzNDLGlCQUF5RCxFQUN6RCxtQkFBMkQ7SUFHM0QseUJBQ0ksbUJBQW1CLElBQ3RCLFFBQVEsb0JBQ0osbUJBQW1CLENBQUMsUUFBUSxJQUMvQixZQUFZLEVBQUU7Z0JBQ2IsR0FBRyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUc7Ozs7Z0JBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtvQkFDOUQseUJBQ0ksU0FBUyxJQUNaLElBQUksRUFBRSx1QkFBdUIsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsSUFDM0Q7Z0JBQ0YsQ0FBQyxFQUFDO2FBQ0YsT0FFRjtBQUNGLENBQUM7Ozs7OztBQUVELFNBQVMsdUJBQXVCLENBQUMsU0FBNkIsRUFBRSxVQUFrRDtJQUNqSCxJQUFHLFNBQVMsQ0FBQyxjQUFjLEtBQUssYUFBYTtRQUFFLE9BQU8sUUFBUSxDQUFDO0lBRS9ELE9BQU8sVUFBVSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVMsQ0FBQyxjQUFjLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7QUFDaEksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hZ2VudG9BZ2dyZWdhdGlvbiB9IGZyb20gJy4uL21vZGVscy9hZ2dyZWdhdGlvbic7XG5pbXBvcnQgeyBNYWdlbnRvQ3VzdG9tTWV0YWRhdGFBdHRyaWJ1dGUgfSBmcm9tICcuLi9tb2RlbHMvcmVxdWVzdHMvY3VzdG9tLW1ldGFkYXRhLWF0dHJpYnV0ZSc7XG5pbXBvcnQgeyBNYWdlbnRvQ3VzdG9tQXR0cmlidXRlTWV0YWRhdGFSZXNwb25zZSB9IGZyb20gJy4uL21vZGVscy9jdXN0b20tYXR0cmlidXRlLW1ldGFkYXRhLXJlc3BvbnNlJztcbmltcG9ydCB7IE1hZ2VudG9HZXRDYXRlZ29yeUFnZ3JlZ2F0aW9uc1Jlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWxzL2dldC1jYXRlZ29yeS1hZ2dyZWdhdGlvbnMtcmVzcG9uc2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDdXN0b21NZXRhZGF0YUF0dHJpYnV0ZShmaWx0ZXI6IE1hZ2VudG9BZ2dyZWdhdGlvbik6IE1hZ2VudG9DdXN0b21NZXRhZGF0YUF0dHJpYnV0ZSB7XG5cdHJldHVybiB7XG5cdFx0YXR0cmlidXRlX2NvZGU6IGZpbHRlci5hdHRyaWJ1dGVfY29kZSxcblx0XHRlbnRpdHlfdHlwZTogJzQnXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1ldGFkYXRhVHlwZXNUb0FnZ3JlZ2F0ZXMoXG5cdGF0dHJpYnV0ZVJlc3BvbnNlOiBNYWdlbnRvQ3VzdG9tQXR0cmlidXRlTWV0YWRhdGFSZXNwb25zZSwgXG5cdGFnZ3JlZ2F0aW9uUmVzcG9uc2U6IE1hZ2VudG9HZXRDYXRlZ29yeUFnZ3JlZ2F0aW9uc1Jlc3BvbnNlXG4pOiBNYWdlbnRvR2V0Q2F0ZWdvcnlBZ2dyZWdhdGlvbnNSZXNwb25zZSB7XG5cblx0cmV0dXJuIHtcblx0XHQuLi5hZ2dyZWdhdGlvblJlc3BvbnNlLFxuXHRcdHByb2R1Y3RzOiB7XG5cdFx0XHQuLi5hZ2dyZWdhdGlvblJlc3BvbnNlLnByb2R1Y3RzLFxuXHRcdFx0YWdncmVnYXRpb25zOiBbXG5cdFx0XHRcdC4uLmFnZ3JlZ2F0aW9uUmVzcG9uc2UucHJvZHVjdHMuYWdncmVnYXRpb25zLm1hcCgoYWdncmVnYXRlKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdC4uLmFnZ3JlZ2F0ZSxcblx0XHRcdFx0XHRcdHR5cGU6IGdldE1hdGNoZWRBdHRyaWJ1dGVUeXBlKGFnZ3JlZ2F0ZSwgYXR0cmlidXRlUmVzcG9uc2UpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBnZXRNYXRjaGVkQXR0cmlidXRlVHlwZShhZ2dyZWdhdGU6IE1hZ2VudG9BZ2dyZWdhdGlvbiwgYXR0cmlidXRlczogTWFnZW50b0N1c3RvbUF0dHJpYnV0ZU1ldGFkYXRhUmVzcG9uc2UpOiBzdHJpbmcge1xuXHRpZihhZ2dyZWdhdGUuYXR0cmlidXRlX2NvZGUgPT09ICdjYXRlZ29yeV9pZCcpIHJldHVybiAnc2VsZWN0JztcblxuXHRyZXR1cm4gYXR0cmlidXRlcy5jdXN0b21BdHRyaWJ1dGVNZXRhZGF0YS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmF0dHJpYnV0ZV9jb2RlID09PSBhZ2dyZWdhdGUuYXR0cmlidXRlX2NvZGUpWzBdLmlucHV0X3R5cGU7XG59XG4iXX0=