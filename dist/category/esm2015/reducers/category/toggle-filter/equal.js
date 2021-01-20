/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getAppliedFilterByName, toggledFilterNameExists, addToExistingFilter } from './util';
import { DaffCategoryFilterType } from '../../../models/category-filter-base';
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
export function isEqualFilterApplied(toggledFilter, appliedFilters) {
    /** @type {?} */
    const filterMatchingName = (/** @type {?} */ (getAppliedFilterByName(toggledFilter.name, appliedFilters)));
    if (filterMatchingName) {
        return !!filterMatchingName.value.filter((/**
         * @param {?} filterValue
         * @return {?}
         */
        filterValue => filterValue === toggledFilter.value)).length;
    }
    else
        return false;
}
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
export function removeEqualFilter(toggledFilter, appliedFilters) {
    return appliedFilters.map((/**
     * @param {?} appliedFilter
     * @return {?}
     */
    appliedFilter => {
        if (appliedFilter.name === toggledFilter.name) {
            appliedFilter.value = ((/** @type {?} */ (appliedFilter))).value.filter((/**
             * @param {?} value
             * @return {?}
             */
            value => value !== toggledFilter.value));
        }
        return appliedFilter;
    })).filter((/**
     * @param {?} filter
     * @return {?}
     */
    filter => filter.type === DaffCategoryFilterType.Match || filter.value.length !== 0));
}
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
export function addEqualFilter(toggledFilter, appliedFilters) {
    return toggledFilterNameExists(toggledFilter, appliedFilters) ?
        addToExistingFilter(toggledFilter, appliedFilters) :
        addNewEqualFilter(toggledFilter, appliedFilters);
}
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
export function addNewEqualFilter(toggledFilter, appliedFilters) {
    return appliedFilters.concat([{
            name: toggledFilter.name,
            value: [toggledFilter.value],
            type: DaffCategoryFilterType.Equal
        }]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2F0ZWdvcnkvIiwic291cmNlcyI6WyJyZWR1Y2Vycy9jYXRlZ29yeS90b2dnbGUtZmlsdGVyL2VxdWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7OztBQUU5RSxNQUFNLFVBQVUsb0JBQW9CLENBQUMsYUFBbUQsRUFBRSxjQUEyQzs7VUFDOUgsa0JBQWtCLEdBQUcsbUJBQWdDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLEVBQUE7SUFDckgsSUFBRyxrQkFBa0IsRUFBRTtRQUN0QixPQUFPLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsTUFBTTs7OztRQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxLQUFLLGFBQWEsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxNQUFNLENBQUM7S0FDcEc7O1FBQU0sT0FBTyxLQUFLLENBQUM7QUFDckIsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLGFBQW1ELEVBQUUsY0FBMkM7SUFDakksT0FBTyxjQUFjLENBQUMsR0FBRzs7OztJQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQ3pDLElBQUcsYUFBYSxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsSUFBSSxFQUFFO1lBQzdDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxtQkFBZ0MsYUFBYSxFQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLGFBQWEsQ0FBQyxLQUFLLEVBQUMsQ0FBQztTQUMzSDtRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3RCLENBQUMsRUFBQyxDQUFDLE1BQU07Ozs7SUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssc0JBQXNCLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBQyxDQUFBO0FBQy9GLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsYUFBbUQsRUFBRSxjQUEyQztJQUU5SCxPQUFPLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQzlELG1CQUFtQixDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3BELGlCQUFpQixDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUNuRCxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsYUFBbUQsRUFBRSxjQUEyQztJQUVqSSxPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixJQUFJLEVBQUUsYUFBYSxDQUFDLElBQUk7WUFDeEIsS0FBSyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUM1QixJQUFJLEVBQUUsc0JBQXNCLENBQUMsS0FBSztTQUNsQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmVG9nZ2xlQ2F0ZWdvcnlGaWx0ZXJFcXVhbFJlcXVlc3QsIERhZmZDYXRlZ29yeUZpbHRlclJlcXVlc3QsIERhZmZDYXRlZ29yeUZpbHRlckVxdWFsUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9yZXF1ZXN0cy9maWx0ZXItcmVxdWVzdCc7XG5pbXBvcnQgeyBnZXRBcHBsaWVkRmlsdGVyQnlOYW1lLCB0b2dnbGVkRmlsdGVyTmFtZUV4aXN0cywgYWRkVG9FeGlzdGluZ0ZpbHRlciB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlGaWx0ZXJUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NhdGVnb3J5LWZpbHRlci1iYXNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXF1YWxGaWx0ZXJBcHBsaWVkKHRvZ2dsZWRGaWx0ZXI6IERhZmZUb2dnbGVDYXRlZ29yeUZpbHRlckVxdWFsUmVxdWVzdCwgYXBwbGllZEZpbHRlcnM6IERhZmZDYXRlZ29yeUZpbHRlclJlcXVlc3RbXSk6IGJvb2xlYW4ge1xuXHRjb25zdCBmaWx0ZXJNYXRjaGluZ05hbWUgPSA8RGFmZkNhdGVnb3J5RmlsdGVyRXF1YWxSZXF1ZXN0PmdldEFwcGxpZWRGaWx0ZXJCeU5hbWUodG9nZ2xlZEZpbHRlci5uYW1lLCBhcHBsaWVkRmlsdGVycyk7XG5cdGlmKGZpbHRlck1hdGNoaW5nTmFtZSkge1xuXHRcdHJldHVybiAhIWZpbHRlck1hdGNoaW5nTmFtZS52YWx1ZS5maWx0ZXIoZmlsdGVyVmFsdWUgPT4gZmlsdGVyVmFsdWUgPT09IHRvZ2dsZWRGaWx0ZXIudmFsdWUpLmxlbmd0aDtcblx0fSBlbHNlIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVxdWFsRmlsdGVyKHRvZ2dsZWRGaWx0ZXI6IERhZmZUb2dnbGVDYXRlZ29yeUZpbHRlckVxdWFsUmVxdWVzdCwgYXBwbGllZEZpbHRlcnM6IERhZmZDYXRlZ29yeUZpbHRlclJlcXVlc3RbXSk6IERhZmZDYXRlZ29yeUZpbHRlclJlcXVlc3RbXSB7XG5cdHJldHVybiBhcHBsaWVkRmlsdGVycy5tYXAoYXBwbGllZEZpbHRlciA9PiB7XG5cdFx0aWYoYXBwbGllZEZpbHRlci5uYW1lID09PSB0b2dnbGVkRmlsdGVyLm5hbWUpIHtcblx0XHRcdGFwcGxpZWRGaWx0ZXIudmFsdWUgPSAoPERhZmZDYXRlZ29yeUZpbHRlckVxdWFsUmVxdWVzdD5hcHBsaWVkRmlsdGVyKS52YWx1ZS5maWx0ZXIodmFsdWUgPT4gdmFsdWUgIT09IHRvZ2dsZWRGaWx0ZXIudmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gYXBwbGllZEZpbHRlcjtcblx0fSkuZmlsdGVyKGZpbHRlciA9PiBmaWx0ZXIudHlwZSA9PT0gRGFmZkNhdGVnb3J5RmlsdGVyVHlwZS5NYXRjaCB8fCBmaWx0ZXIudmFsdWUubGVuZ3RoICE9PSAwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXF1YWxGaWx0ZXIodG9nZ2xlZEZpbHRlcjogRGFmZlRvZ2dsZUNhdGVnb3J5RmlsdGVyRXF1YWxSZXF1ZXN0LCBhcHBsaWVkRmlsdGVyczogRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdFtdKVxuOiBEYWZmQ2F0ZWdvcnlGaWx0ZXJSZXF1ZXN0W10ge1xuXHRyZXR1cm4gdG9nZ2xlZEZpbHRlck5hbWVFeGlzdHModG9nZ2xlZEZpbHRlciwgYXBwbGllZEZpbHRlcnMpID9cblx0XHRhZGRUb0V4aXN0aW5nRmlsdGVyKHRvZ2dsZWRGaWx0ZXIsIGFwcGxpZWRGaWx0ZXJzKSA6XG5cdFx0YWRkTmV3RXF1YWxGaWx0ZXIodG9nZ2xlZEZpbHRlciwgYXBwbGllZEZpbHRlcnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3RXF1YWxGaWx0ZXIodG9nZ2xlZEZpbHRlcjogRGFmZlRvZ2dsZUNhdGVnb3J5RmlsdGVyRXF1YWxSZXF1ZXN0LCBhcHBsaWVkRmlsdGVyczogRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdFtdKVxuOiBEYWZmQ2F0ZWdvcnlGaWx0ZXJSZXF1ZXN0W10ge1xuXHRyZXR1cm4gYXBwbGllZEZpbHRlcnMuY29uY2F0KFt7XG5cdFx0bmFtZTogdG9nZ2xlZEZpbHRlci5uYW1lLFxuXHRcdHZhbHVlOiBbdG9nZ2xlZEZpbHRlci52YWx1ZV0sXG5cdFx0dHlwZTogRGFmZkNhdGVnb3J5RmlsdGVyVHlwZS5FcXVhbFxuXHR9XSk7XG59XG4iXX0=