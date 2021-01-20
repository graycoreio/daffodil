/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @param {?} sort_fields
 * @return {?}
 */
export function coerceDefaultSortOptionFirst(sort_fields) {
    /** @type {?} */
    var index = sort_fields.options.findIndex((/**
     * @param {?} option
     * @return {?}
     */
    function (option) { return sort_fields.default === option.value; }));
    return tslib_1.__assign({}, sort_fields, { options: tslib_1.__spread([
            sort_fields.options[index]
        ], sort_fields.options.slice(0, index), sort_fields.options.slice(index + 1)) });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1kZWZhdWx0LW9wdGlvbi1maXJzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImRyaXZlcnMvbWFnZW50by90cmFuc2Zvcm1lcnMvcHVyZS9zb3J0LWRlZmF1bHQtb3B0aW9uLWZpcnN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLE1BQU0sVUFBVSw0QkFBNEIsQ0FBQyxXQUE4Qjs7UUFDbkUsS0FBSyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztJQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsV0FBVyxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUMsS0FBSyxFQUFwQyxDQUFvQyxFQUFDO0lBRTNGLDRCQUNLLFdBQVcsSUFDZCxPQUFPO1lBQ0wsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7V0FDdkIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUNuQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBRTFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hZ2VudG9Tb3J0RmllbGRzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3NvcnQtZmllbGRzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY29lcmNlRGVmYXVsdFNvcnRPcHRpb25GaXJzdChzb3J0X2ZpZWxkczogTWFnZW50b1NvcnRGaWVsZHMpOiBNYWdlbnRvU29ydEZpZWxkcyB7XG4gIGNvbnN0IGluZGV4ID0gc29ydF9maWVsZHMub3B0aW9ucy5maW5kSW5kZXgob3B0aW9uID0+IHNvcnRfZmllbGRzLmRlZmF1bHQgPT09IG9wdGlvbi52YWx1ZSlcblxuICByZXR1cm4ge1xuICAgIC4uLnNvcnRfZmllbGRzLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgIHNvcnRfZmllbGRzLm9wdGlvbnNbaW5kZXhdLFxuICAgICAgLi4uc29ydF9maWVsZHMub3B0aW9ucy5zbGljZSgwLCBpbmRleCksXG4gICAgICAuLi5zb3J0X2ZpZWxkcy5vcHRpb25zLnNsaWNlKGluZGV4ICsgMSlcbiAgICBdXG4gIH1cbn1cbiJdfQ==