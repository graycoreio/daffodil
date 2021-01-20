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
    var filterMatchingName = (/** @type {?} */ (getAppliedFilterByName(toggledFilter.name, appliedFilters)));
    if (filterMatchingName) {
        return !!filterMatchingName.value.filter((/**
         * @param {?} filterValue
         * @return {?}
         */
        function (filterValue) { return filterValue === toggledFilter.value; })).length;
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
    function (appliedFilter) {
        if (appliedFilter.name === toggledFilter.name) {
            appliedFilter.value = ((/** @type {?} */ (appliedFilter))).value.filter((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return value !== toggledFilter.value; }));
        }
        return appliedFilter;
    })).filter((/**
     * @param {?} filter
     * @return {?}
     */
    function (filter) { return filter.type === DaffCategoryFilterType.Match || filter.value.length !== 0; }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2F0ZWdvcnkvIiwic291cmNlcyI6WyJyZWR1Y2Vycy9jYXRlZ29yeS90b2dnbGUtZmlsdGVyL2VxdWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7OztBQUU5RSxNQUFNLFVBQVUsb0JBQW9CLENBQUMsYUFBbUQsRUFBRSxjQUEyQzs7UUFDOUgsa0JBQWtCLEdBQUcsbUJBQWdDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLEVBQUE7SUFDckgsSUFBRyxrQkFBa0IsRUFBRTtRQUN0QixPQUFPLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsV0FBVyxLQUFLLGFBQWEsQ0FBQyxLQUFLLEVBQW5DLENBQW1DLEVBQUMsQ0FBQyxNQUFNLENBQUM7S0FDcEc7O1FBQU0sT0FBTyxLQUFLLENBQUM7QUFDckIsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLGFBQW1ELEVBQUUsY0FBMkM7SUFDakksT0FBTyxjQUFjLENBQUMsR0FBRzs7OztJQUFDLFVBQUEsYUFBYTtRQUN0QyxJQUFHLGFBQWEsQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLElBQUksRUFBRTtZQUM3QyxhQUFhLENBQUMsS0FBSyxHQUFHLENBQUMsbUJBQWdDLGFBQWEsRUFBQSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7WUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssS0FBSyxhQUFhLENBQUMsS0FBSyxFQUE3QixDQUE2QixFQUFDLENBQUM7U0FDM0g7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN0QixDQUFDLEVBQUMsQ0FBQyxNQUFNOzs7O0lBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxLQUFLLHNCQUFzQixDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQXpFLENBQXlFLEVBQUMsQ0FBQTtBQUMvRixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLGFBQW1ELEVBQUUsY0FBMkM7SUFFOUgsT0FBTyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUM5RCxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNwRCxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDbkQsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLGFBQW1ELEVBQUUsY0FBMkM7SUFFakksT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0IsSUFBSSxFQUFFLGFBQWEsQ0FBQyxJQUFJO1lBQ3hCLEtBQUssRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDNUIsSUFBSSxFQUFFLHNCQUFzQixDQUFDLEtBQUs7U0FDbEMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZlRvZ2dsZUNhdGVnb3J5RmlsdGVyRXF1YWxSZXF1ZXN0LCBEYWZmQ2F0ZWdvcnlGaWx0ZXJSZXF1ZXN0LCBEYWZmQ2F0ZWdvcnlGaWx0ZXJFcXVhbFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcmVxdWVzdHMvZmlsdGVyLXJlcXVlc3QnO1xuaW1wb3J0IHsgZ2V0QXBwbGllZEZpbHRlckJ5TmFtZSwgdG9nZ2xlZEZpbHRlck5hbWVFeGlzdHMsIGFkZFRvRXhpc3RpbmdGaWx0ZXIgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5RmlsdGVyVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9jYXRlZ29yeS1maWx0ZXItYmFzZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VxdWFsRmlsdGVyQXBwbGllZCh0b2dnbGVkRmlsdGVyOiBEYWZmVG9nZ2xlQ2F0ZWdvcnlGaWx0ZXJFcXVhbFJlcXVlc3QsIGFwcGxpZWRGaWx0ZXJzOiBEYWZmQ2F0ZWdvcnlGaWx0ZXJSZXF1ZXN0W10pOiBib29sZWFuIHtcblx0Y29uc3QgZmlsdGVyTWF0Y2hpbmdOYW1lID0gPERhZmZDYXRlZ29yeUZpbHRlckVxdWFsUmVxdWVzdD5nZXRBcHBsaWVkRmlsdGVyQnlOYW1lKHRvZ2dsZWRGaWx0ZXIubmFtZSwgYXBwbGllZEZpbHRlcnMpO1xuXHRpZihmaWx0ZXJNYXRjaGluZ05hbWUpIHtcblx0XHRyZXR1cm4gISFmaWx0ZXJNYXRjaGluZ05hbWUudmFsdWUuZmlsdGVyKGZpbHRlclZhbHVlID0+IGZpbHRlclZhbHVlID09PSB0b2dnbGVkRmlsdGVyLnZhbHVlKS5sZW5ndGg7XG5cdH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFcXVhbEZpbHRlcih0b2dnbGVkRmlsdGVyOiBEYWZmVG9nZ2xlQ2F0ZWdvcnlGaWx0ZXJFcXVhbFJlcXVlc3QsIGFwcGxpZWRGaWx0ZXJzOiBEYWZmQ2F0ZWdvcnlGaWx0ZXJSZXF1ZXN0W10pOiBEYWZmQ2F0ZWdvcnlGaWx0ZXJSZXF1ZXN0W10ge1xuXHRyZXR1cm4gYXBwbGllZEZpbHRlcnMubWFwKGFwcGxpZWRGaWx0ZXIgPT4ge1xuXHRcdGlmKGFwcGxpZWRGaWx0ZXIubmFtZSA9PT0gdG9nZ2xlZEZpbHRlci5uYW1lKSB7XG5cdFx0XHRhcHBsaWVkRmlsdGVyLnZhbHVlID0gKDxEYWZmQ2F0ZWdvcnlGaWx0ZXJFcXVhbFJlcXVlc3Q+YXBwbGllZEZpbHRlcikudmFsdWUuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSB0b2dnbGVkRmlsdGVyLnZhbHVlKTtcblx0XHR9XG5cdFx0cmV0dXJuIGFwcGxpZWRGaWx0ZXI7XG5cdH0pLmZpbHRlcihmaWx0ZXIgPT4gZmlsdGVyLnR5cGUgPT09IERhZmZDYXRlZ29yeUZpbHRlclR5cGUuTWF0Y2ggfHwgZmlsdGVyLnZhbHVlLmxlbmd0aCAhPT0gMClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEVxdWFsRmlsdGVyKHRvZ2dsZWRGaWx0ZXI6IERhZmZUb2dnbGVDYXRlZ29yeUZpbHRlckVxdWFsUmVxdWVzdCwgYXBwbGllZEZpbHRlcnM6IERhZmZDYXRlZ29yeUZpbHRlclJlcXVlc3RbXSlcbjogRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdFtdIHtcblx0cmV0dXJuIHRvZ2dsZWRGaWx0ZXJOYW1lRXhpc3RzKHRvZ2dsZWRGaWx0ZXIsIGFwcGxpZWRGaWx0ZXJzKSA/XG5cdFx0YWRkVG9FeGlzdGluZ0ZpbHRlcih0b2dnbGVkRmlsdGVyLCBhcHBsaWVkRmlsdGVycykgOlxuXHRcdGFkZE5ld0VxdWFsRmlsdGVyKHRvZ2dsZWRGaWx0ZXIsIGFwcGxpZWRGaWx0ZXJzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld0VxdWFsRmlsdGVyKHRvZ2dsZWRGaWx0ZXI6IERhZmZUb2dnbGVDYXRlZ29yeUZpbHRlckVxdWFsUmVxdWVzdCwgYXBwbGllZEZpbHRlcnM6IERhZmZDYXRlZ29yeUZpbHRlclJlcXVlc3RbXSlcbjogRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdFtdIHtcblx0cmV0dXJuIGFwcGxpZWRGaWx0ZXJzLmNvbmNhdChbe1xuXHRcdG5hbWU6IHRvZ2dsZWRGaWx0ZXIubmFtZSxcblx0XHR2YWx1ZTogW3RvZ2dsZWRGaWx0ZXIudmFsdWVdLFxuXHRcdHR5cGU6IERhZmZDYXRlZ29yeUZpbHRlclR5cGUuRXF1YWxcblx0fV0pO1xufVxuIl19