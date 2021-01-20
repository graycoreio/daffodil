/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} sort_fields
 * @return {?}
 */
export function coerceDefaultSortOptionFirst(sort_fields) {
    /** @type {?} */
    const index = sort_fields.options.findIndex((/**
     * @param {?} option
     * @return {?}
     */
    option => sort_fields.default === option.value));
    return Object.assign({}, sort_fields, { options: [
            sort_fields.options[index],
            ...sort_fields.options.slice(0, index),
            ...sort_fields.options.slice(index + 1)
        ] });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1kZWZhdWx0LW9wdGlvbi1maXJzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by90cmFuc2Zvcm1lcnMvcHVyZS9zb3J0LWRlZmF1bHQtb3B0aW9uLWZpcnN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTSxVQUFVLDRCQUE0QixDQUFDLFdBQThCOztVQUNuRSxLQUFLLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O0lBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxLQUFLLEVBQUM7SUFFM0YseUJBQ0ssV0FBVyxJQUNkLE9BQU8sRUFBRTtZQUNQLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQzFCLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUN0QyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDeEMsSUFDRjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYWdlbnRvU29ydEZpZWxkcyB9IGZyb20gJy4uLy4uL21vZGVscy9zb3J0LWZpZWxkcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNvZXJjZURlZmF1bHRTb3J0T3B0aW9uRmlyc3Qoc29ydF9maWVsZHM6IE1hZ2VudG9Tb3J0RmllbGRzKTogTWFnZW50b1NvcnRGaWVsZHMge1xuICBjb25zdCBpbmRleCA9IHNvcnRfZmllbGRzLm9wdGlvbnMuZmluZEluZGV4KG9wdGlvbiA9PiBzb3J0X2ZpZWxkcy5kZWZhdWx0ID09PSBvcHRpb24udmFsdWUpXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zb3J0X2ZpZWxkcyxcbiAgICBvcHRpb25zOiBbXG4gICAgICBzb3J0X2ZpZWxkcy5vcHRpb25zW2luZGV4XSxcbiAgICAgIC4uLnNvcnRfZmllbGRzLm9wdGlvbnMuc2xpY2UoMCwgaW5kZXgpLFxuICAgICAgLi4uc29ydF9maWVsZHMub3B0aW9ucy5zbGljZShpbmRleCArIDEpXG4gICAgXVxuICB9XG59XG4iXX0=