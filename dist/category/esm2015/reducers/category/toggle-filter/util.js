/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} name
 * @param {?} appliedFilters
 * @return {?}
 */
export function getAppliedFilterByName(name, appliedFilters) {
    return appliedFilters.filter((/**
     * @param {?} filter
     * @return {?}
     */
    filter => filter.name === name)).shift();
}
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
export function toggledFilterNameExists(toggledFilter, appliedFilters) {
    return appliedFilters && !!appliedFilters.find((/**
     * @param {?} filter
     * @return {?}
     */
    filter => filter.name === toggledFilter.name));
}
/**
 * @param {?} toggledFilter
 * @param {?} appliedFilters
 * @return {?}
 */
export function addToExistingFilter(toggledFilter, appliedFilters) {
    return appliedFilters.map((/**
     * @param {?} filter
     * @return {?}
     */
    filter => {
        if (filter.name === toggledFilter.name) {
            ((/** @type {?} */ (filter))).value.push(toggledFilter.value);
        }
        return filter;
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbInJlZHVjZXJzL2NhdGVnb3J5L3RvZ2dsZS1maWx0ZXIvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxNQUFNLFVBQVUsc0JBQXNCLENBQUMsSUFBWSxFQUFFLGNBQTJDO0lBQy9GLE9BQU8sY0FBYyxDQUFDLE1BQU07Ozs7SUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDdEUsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLHVCQUF1QixDQUFDLGFBQThDLEVBQUUsY0FBMkM7SUFDbEksT0FBTyxjQUFjLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJOzs7O0lBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxJQUFJLEVBQUMsQ0FBQTtBQUM3RixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsYUFBOEMsRUFBRSxjQUEyQztJQUU5SCxPQUFPLGNBQWMsQ0FBQyxHQUFHOzs7O0lBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsSUFBRyxNQUFNLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxJQUFJLEVBQUU7WUFDdEMsQ0FBQyxtQkFBZ0MsTUFBTSxFQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUN4RTtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQyxFQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZlRvZ2dsZUNhdGVnb3J5RmlsdGVyUmVxdWVzdCwgRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdCwgRGFmZkNhdGVnb3J5RmlsdGVyRXF1YWxSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3JlcXVlc3RzL2ZpbHRlci1yZXF1ZXN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcGxpZWRGaWx0ZXJCeU5hbWUobmFtZTogc3RyaW5nLCBhcHBsaWVkRmlsdGVyczogRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdFtdKTogRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdCB7XG5cdHJldHVybiBhcHBsaWVkRmlsdGVycy5maWx0ZXIoZmlsdGVyID0+IGZpbHRlci5uYW1lID09PSBuYW1lKS5zaGlmdCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlZEZpbHRlck5hbWVFeGlzdHModG9nZ2xlZEZpbHRlcjogRGFmZlRvZ2dsZUNhdGVnb3J5RmlsdGVyUmVxdWVzdCwgYXBwbGllZEZpbHRlcnM6IERhZmZDYXRlZ29yeUZpbHRlclJlcXVlc3RbXSk6IGJvb2xlYW4ge1xuXHRyZXR1cm4gYXBwbGllZEZpbHRlcnMgJiYgISFhcHBsaWVkRmlsdGVycy5maW5kKGZpbHRlciA9PiBmaWx0ZXIubmFtZSA9PT0gdG9nZ2xlZEZpbHRlci5uYW1lKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9FeGlzdGluZ0ZpbHRlcih0b2dnbGVkRmlsdGVyOiBEYWZmVG9nZ2xlQ2F0ZWdvcnlGaWx0ZXJSZXF1ZXN0LCBhcHBsaWVkRmlsdGVyczogRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdFtdKVxuOiBEYWZmQ2F0ZWdvcnlGaWx0ZXJSZXF1ZXN0W10ge1xuXHRyZXR1cm4gYXBwbGllZEZpbHRlcnMubWFwKGZpbHRlciA9PiB7XG5cdFx0aWYoZmlsdGVyLm5hbWUgPT09IHRvZ2dsZWRGaWx0ZXIubmFtZSkge1xuXHRcdFx0KDxEYWZmQ2F0ZWdvcnlGaWx0ZXJFcXVhbFJlcXVlc3Q+ZmlsdGVyKS52YWx1ZS5wdXNoKHRvZ2dsZWRGaWx0ZXIudmFsdWUpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpbHRlcjtcblx0fSk7XG59XG4iXX0=