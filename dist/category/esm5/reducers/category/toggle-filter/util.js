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
    function (filter) { return filter.name === name; })).shift();
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
    function (filter) { return filter.name === toggledFilter.name; }));
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
    function (filter) {
        if (filter.name === toggledFilter.name) {
            ((/** @type {?} */ (filter))).value.push(toggledFilter.value);
        }
        return filter;
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbInJlZHVjZXJzL2NhdGVnb3J5L3RvZ2dsZS1maWx0ZXIvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxNQUFNLFVBQVUsc0JBQXNCLENBQUMsSUFBWSxFQUFFLGNBQTJDO0lBQy9GLE9BQU8sY0FBYyxDQUFDLE1BQU07Ozs7SUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFwQixDQUFvQixFQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDdEUsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLHVCQUF1QixDQUFDLGFBQThDLEVBQUUsY0FBMkM7SUFDbEksT0FBTyxjQUFjLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJOzs7O0lBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxJQUFJLEVBQWxDLENBQWtDLEVBQUMsQ0FBQTtBQUM3RixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsYUFBOEMsRUFBRSxjQUEyQztJQUU5SCxPQUFPLGNBQWMsQ0FBQyxHQUFHOzs7O0lBQUMsVUFBQSxNQUFNO1FBQy9CLElBQUcsTUFBTSxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsSUFBSSxFQUFFO1lBQ3RDLENBQUMsbUJBQWdDLE1BQU0sRUFBQSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDeEU7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUMsRUFBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZUb2dnbGVDYXRlZ29yeUZpbHRlclJlcXVlc3QsIERhZmZDYXRlZ29yeUZpbHRlclJlcXVlc3QsIERhZmZDYXRlZ29yeUZpbHRlckVxdWFsUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9yZXF1ZXN0cy9maWx0ZXItcmVxdWVzdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcHBsaWVkRmlsdGVyQnlOYW1lKG5hbWU6IHN0cmluZywgYXBwbGllZEZpbHRlcnM6IERhZmZDYXRlZ29yeUZpbHRlclJlcXVlc3RbXSk6IERhZmZDYXRlZ29yeUZpbHRlclJlcXVlc3Qge1xuXHRyZXR1cm4gYXBwbGllZEZpbHRlcnMuZmlsdGVyKGZpbHRlciA9PiBmaWx0ZXIubmFtZSA9PT0gbmFtZSkuc2hpZnQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZWRGaWx0ZXJOYW1lRXhpc3RzKHRvZ2dsZWRGaWx0ZXI6IERhZmZUb2dnbGVDYXRlZ29yeUZpbHRlclJlcXVlc3QsIGFwcGxpZWRGaWx0ZXJzOiBEYWZmQ2F0ZWdvcnlGaWx0ZXJSZXF1ZXN0W10pOiBib29sZWFuIHtcblx0cmV0dXJuIGFwcGxpZWRGaWx0ZXJzICYmICEhYXBwbGllZEZpbHRlcnMuZmluZChmaWx0ZXIgPT4gZmlsdGVyLm5hbWUgPT09IHRvZ2dsZWRGaWx0ZXIubmFtZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvRXhpc3RpbmdGaWx0ZXIodG9nZ2xlZEZpbHRlcjogRGFmZlRvZ2dsZUNhdGVnb3J5RmlsdGVyUmVxdWVzdCwgYXBwbGllZEZpbHRlcnM6IERhZmZDYXRlZ29yeUZpbHRlclJlcXVlc3RbXSlcbjogRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdFtdIHtcblx0cmV0dXJuIGFwcGxpZWRGaWx0ZXJzLm1hcChmaWx0ZXIgPT4ge1xuXHRcdGlmKGZpbHRlci5uYW1lID09PSB0b2dnbGVkRmlsdGVyLm5hbWUpIHtcblx0XHRcdCg8RGFmZkNhdGVnb3J5RmlsdGVyRXF1YWxSZXF1ZXN0PmZpbHRlcikudmFsdWUucHVzaCh0b2dnbGVkRmlsdGVyLnZhbHVlKVxuXHRcdH1cblxuXHRcdHJldHVybiBmaWx0ZXI7XG5cdH0pO1xufVxuIl19