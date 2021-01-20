/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} item
 * @return {?}
 */
export function transformCompositeCartItem(item) {
    return {
        input: transformSimpleCartItem(item),
        options: item.options ? item.options.map(transformCompositeCartItemOption) : []
    };
}
/**
 * @param {?} item
 * @return {?}
 */
export function transformSimpleCartItem(item) {
    return {
        quantity: item.qty,
        sku: item.productId
    };
}
/**
 * @param {?} item
 * @return {?}
 */
export function transformConfigurableCartItem(item) {
    return {
        parentSku: item.productId,
        data: {
            quantity: item.qty,
            sku: String(item.variantId)
        },
    };
}
/**
 * @param {?} option
 * @return {?}
 */
function transformCompositeCartItemOption(option) {
    return {
        id: Number(option.code),
        quantity: option.quantity,
        value: [option.value]
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWlucHV0LXRyYW5zZm9ybWVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsidHJhbnNmb3Jtcy9pbnB1dHMvY2FydC1pdGVtLWlucHV0LXRyYW5zZm9ybWVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxJQUFnQztJQUMxRSxPQUFPO1FBQ04sS0FBSyxFQUFFLHVCQUF1QixDQUFDLElBQUksQ0FBQztRQUNwQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtLQUMvRSxDQUFBO0FBQ0YsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsSUFBdUI7SUFDOUQsT0FBTztRQUNOLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRztRQUNsQixHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVM7S0FDbkIsQ0FBQTtBQUNGLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLDZCQUE2QixDQUFDLElBQW1DO0lBQ2hGLE9BQU87UUFDTixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7UUFDekIsSUFBSSxFQUFFO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2xCLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUMzQjtLQUNELENBQUE7QUFDRixDQUFDOzs7OztBQUVELFNBQVMsZ0NBQWdDLENBQUMsTUFBd0M7SUFDakYsT0FBTztRQUNOLEVBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7UUFDekIsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNyQixDQUFBO0FBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZDYXJ0SXRlbUlucHV0LCBEYWZmQ29tcG9zaXRlQ2FydEl0ZW1JbnB1dCwgRGFmZkNvbXBvc2l0ZUNhcnRJdGVtSW5wdXRPcHRpb24sIERhZmZDb25maWd1cmFibGVDYXJ0SXRlbUlucHV0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuXG5pbXBvcnQgeyBNYWdlbnRvQ2FydEl0ZW1JbnB1dCwgTWFnZW50b0J1bmRsZWRDYXJ0SXRlbUlucHV0LCBNYWdlbnRvQnVuZGxlZENhcnRJdGVtT3B0aW9uLCBNYWdlbnRvQ29uZmlndXJhYmxlQ2FydEl0ZW1JbnB1dCB9IGZyb20gJy4uLy4uL21vZGVscy9yZXF1ZXN0cy9jYXJ0LWl0ZW0nO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtQ29tcG9zaXRlQ2FydEl0ZW0oaXRlbTogRGFmZkNvbXBvc2l0ZUNhcnRJdGVtSW5wdXQpOiBNYWdlbnRvQnVuZGxlZENhcnRJdGVtSW5wdXQge1xuXHRyZXR1cm4ge1xuXHRcdGlucHV0OiB0cmFuc2Zvcm1TaW1wbGVDYXJ0SXRlbShpdGVtKSxcblx0XHRvcHRpb25zOiBpdGVtLm9wdGlvbnMgPyBpdGVtLm9wdGlvbnMubWFwKHRyYW5zZm9ybUNvbXBvc2l0ZUNhcnRJdGVtT3B0aW9uKSA6IFtdXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVNpbXBsZUNhcnRJdGVtKGl0ZW06IERhZmZDYXJ0SXRlbUlucHV0KTogTWFnZW50b0NhcnRJdGVtSW5wdXQge1xuXHRyZXR1cm4ge1xuXHRcdHF1YW50aXR5OiBpdGVtLnF0eSxcblx0XHRza3U6IGl0ZW0ucHJvZHVjdElkXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUNvbmZpZ3VyYWJsZUNhcnRJdGVtKGl0ZW06IERhZmZDb25maWd1cmFibGVDYXJ0SXRlbUlucHV0KTogTWFnZW50b0NvbmZpZ3VyYWJsZUNhcnRJdGVtSW5wdXQge1xuXHRyZXR1cm4ge1xuXHRcdHBhcmVudFNrdTogaXRlbS5wcm9kdWN0SWQsXG5cdFx0ZGF0YToge1xuXHRcdFx0cXVhbnRpdHk6IGl0ZW0ucXR5LFxuXHRcdFx0c2t1OiBTdHJpbmcoaXRlbS52YXJpYW50SWQpXG5cdFx0fSxcblx0fVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Db21wb3NpdGVDYXJ0SXRlbU9wdGlvbihvcHRpb246IERhZmZDb21wb3NpdGVDYXJ0SXRlbUlucHV0T3B0aW9uKTogTWFnZW50b0J1bmRsZWRDYXJ0SXRlbU9wdGlvbiB7XG5cdHJldHVybiB7XG5cdFx0aWQ6IE51bWJlcihvcHRpb24uY29kZSksXG5cdFx0cXVhbnRpdHk6IG9wdGlvbi5xdWFudGl0eSxcblx0XHR2YWx1ZTogW29wdGlvbi52YWx1ZV1cblx0fVxufVxuIl19