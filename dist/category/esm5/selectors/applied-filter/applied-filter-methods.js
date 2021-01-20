/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffCategoryFilterType } from '../../models/category-filter-base';
/**
 * @param {?} filter
 * @param {?} request
 * @return {?}
 */
export function buildAppliedFilter(filter, request) {
    return {
        name: request.name,
        type: request.type,
        label: filter.label,
        options: buildAppliedFilterOptions(filter.options, request)
    };
}
/**
 * @param {?} filterOptions
 * @param {?} filterRequest
 * @return {?}
 */
function buildAppliedFilterOptions(filterOptions, filterRequest) {
    switch (filterRequest.type) {
        case (DaffCategoryFilterType.Equal):
            return buildAppliedFilterOptionsFromEqualRequest(filterOptions, filterRequest);
        case (DaffCategoryFilterType.Range):
            return buildAppliedFilterOptionsFromRangeRequest(filterOptions, filterRequest);
        case (DaffCategoryFilterType.Match):
            return buildAppliedFilterOptionsFromMatchRequest(filterOptions, filterRequest);
    }
}
/**
 * @param {?} filterOptions
 * @param {?} filterRequest
 * @return {?}
 */
function buildAppliedFilterOptionsFromEqualRequest(filterOptions, filterRequest) {
    return filterOptions
        .filter((/**
     * @param {?} option
     * @return {?}
     */
    function (option) { return filterRequest.value.indexOf(option.value) > -1; }))
        .map((/**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return {
            value: option.value,
            label: option.label
        };
    }));
}
/**
 * @param {?} filterOptions
 * @param {?} filterRequest
 * @return {?}
 */
function buildAppliedFilterOptionsFromRangeRequest(filterOptions, filterRequest) {
    return filterOptions
        .filter((/**
     * @param {?} option
     * @return {?}
     */
    function (option) { return filterRequest.value.indexOf(option.value) > -1; }))
        .map((/**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return {
            value: option.value,
            label: option.label
        };
    }));
}
/**
 * @param {?} filterOptions
 * @param {?} filterRequest
 * @return {?}
 */
function buildAppliedFilterOptionsFromMatchRequest(filterOptions, filterRequest) {
    return filterOptions
        .filter((/**
     * @param {?} option
     * @return {?}
     */
    function (option) { return filterRequest.value === option.value; }))
        .map((/**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return {
            value: option.value,
            label: option.label
        };
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGllZC1maWx0ZXItbWV0aG9kcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbInNlbGVjdG9ycy9hcHBsaWVkLWZpbHRlci9hcHBsaWVkLWZpbHRlci1tZXRob2RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7O0FBRTNFLE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxNQUEwQixFQUFFLE9BQWtDO0lBQ2hHLE9BQU87UUFDTixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDbEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1FBQ2xCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztRQUNuQixPQUFPLEVBQUUseUJBQXlCLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7S0FDM0QsQ0FBQTtBQUNGLENBQUM7Ozs7OztBQUVELFNBQVMseUJBQXlCLENBQUMsYUFBeUMsRUFBRSxhQUF3QztJQUNySCxRQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUU7UUFDMUIsS0FBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQztZQUNqQyxPQUFPLHlDQUF5QyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNoRixLQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDO1lBQ2pDLE9BQU8seUNBQXlDLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ2hGLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7WUFDakMsT0FBTyx5Q0FBeUMsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7S0FDaEY7QUFDRixDQUFDOzs7Ozs7QUFFRCxTQUFTLHlDQUF5QyxDQUNqRCxhQUF5QyxFQUFFLGFBQTZDO0lBRXhGLE9BQU8sYUFBYTtTQUNsQixNQUFNOzs7O0lBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQTlDLENBQThDLEVBQUM7U0FDaEUsR0FBRzs7OztJQUFDLFVBQUEsTUFBTTtRQUNWLE9BQU87WUFDTixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1NBQ25CLENBQUE7SUFDRixDQUFDLEVBQUMsQ0FBQTtBQUNKLENBQUM7Ozs7OztBQUVELFNBQVMseUNBQXlDLENBQ2pELGFBQXlDLEVBQUUsYUFBNkM7SUFFeEYsT0FBTyxhQUFhO1NBQ25CLE1BQU07Ozs7SUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBOUMsQ0FBOEMsRUFBQztTQUNoRSxHQUFHOzs7O0lBQUMsVUFBQSxNQUFNO1FBQ1YsT0FBTztZQUNOLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7U0FDbkIsQ0FBQTtJQUNGLENBQUMsRUFBQyxDQUFBO0FBQ0gsQ0FBQzs7Ozs7O0FBRUQsU0FBUyx5Q0FBeUMsQ0FDakQsYUFBeUMsRUFBRSxhQUE2QztJQUV4RixPQUFPLGFBQWE7U0FDbkIsTUFBTTs7OztJQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsYUFBYSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsS0FBSyxFQUFwQyxDQUFvQyxFQUFDO1NBQ3RELEdBQUc7Ozs7SUFBQyxVQUFBLE1BQU07UUFDVixPQUFPO1lBQ04sS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztTQUNuQixDQUFBO0lBQ0YsQ0FBQyxFQUFDLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZkNhdGVnb3J5RmlsdGVyT3B0aW9uLCBEYWZmQ2F0ZWdvcnlGaWx0ZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2F0ZWdvcnktZmlsdGVyJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeUFwcGxpZWRGaWx0ZXJPcHRpb24sIERhZmZDYXRlZ29yeUFwcGxpZWRGaWx0ZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2F0ZWdvcnktYXBwbGllZC1maWx0ZXInO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5RmlsdGVyUmFuZ2VSZXF1ZXN0LCBEYWZmQ2F0ZWdvcnlGaWx0ZXJNYXRjaFJlcXVlc3QsIERhZmZDYXRlZ29yeUZpbHRlckVxdWFsUmVxdWVzdCwgRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9yZXF1ZXN0cy9maWx0ZXItcmVxdWVzdCc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlGaWx0ZXJUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NhdGVnb3J5LWZpbHRlci1iYXNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQXBwbGllZEZpbHRlcihmaWx0ZXI6IERhZmZDYXRlZ29yeUZpbHRlciwgcmVxdWVzdDogRGFmZkNhdGVnb3J5RmlsdGVyUmVxdWVzdCk6IERhZmZDYXRlZ29yeUFwcGxpZWRGaWx0ZXIge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6IHJlcXVlc3QubmFtZSxcblx0XHR0eXBlOiByZXF1ZXN0LnR5cGUsXG5cdFx0bGFiZWw6IGZpbHRlci5sYWJlbCxcblx0XHRvcHRpb25zOiBidWlsZEFwcGxpZWRGaWx0ZXJPcHRpb25zKGZpbHRlci5vcHRpb25zLCByZXF1ZXN0KVxuXHR9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQXBwbGllZEZpbHRlck9wdGlvbnMoZmlsdGVyT3B0aW9uczogRGFmZkNhdGVnb3J5RmlsdGVyT3B0aW9uW10sIGZpbHRlclJlcXVlc3Q6IERhZmZDYXRlZ29yeUZpbHRlclJlcXVlc3QpOiBEYWZmQ2F0ZWdvcnlBcHBsaWVkRmlsdGVyT3B0aW9uW10ge1xuXHRzd2l0Y2goZmlsdGVyUmVxdWVzdC50eXBlKSB7XG5cdFx0Y2FzZShEYWZmQ2F0ZWdvcnlGaWx0ZXJUeXBlLkVxdWFsKSA6XG5cdFx0XHRyZXR1cm4gYnVpbGRBcHBsaWVkRmlsdGVyT3B0aW9uc0Zyb21FcXVhbFJlcXVlc3QoZmlsdGVyT3B0aW9ucywgZmlsdGVyUmVxdWVzdCk7XG5cdFx0Y2FzZShEYWZmQ2F0ZWdvcnlGaWx0ZXJUeXBlLlJhbmdlKSA6XG5cdFx0XHRyZXR1cm4gYnVpbGRBcHBsaWVkRmlsdGVyT3B0aW9uc0Zyb21SYW5nZVJlcXVlc3QoZmlsdGVyT3B0aW9ucywgZmlsdGVyUmVxdWVzdCk7XG5cdFx0Y2FzZShEYWZmQ2F0ZWdvcnlGaWx0ZXJUeXBlLk1hdGNoKSA6XG5cdFx0XHRyZXR1cm4gYnVpbGRBcHBsaWVkRmlsdGVyT3B0aW9uc0Zyb21NYXRjaFJlcXVlc3QoZmlsdGVyT3B0aW9ucywgZmlsdGVyUmVxdWVzdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYnVpbGRBcHBsaWVkRmlsdGVyT3B0aW9uc0Zyb21FcXVhbFJlcXVlc3QoXG5cdGZpbHRlck9wdGlvbnM6IERhZmZDYXRlZ29yeUZpbHRlck9wdGlvbltdLCBmaWx0ZXJSZXF1ZXN0OiBEYWZmQ2F0ZWdvcnlGaWx0ZXJFcXVhbFJlcXVlc3Rcbik6IERhZmZDYXRlZ29yeUFwcGxpZWRGaWx0ZXJPcHRpb25bXSB7XG5cdHJldHVybiBmaWx0ZXJPcHRpb25zXG5cdFx0LmZpbHRlcihvcHRpb24gPT4gZmlsdGVyUmVxdWVzdC52YWx1ZS5pbmRleE9mKG9wdGlvbi52YWx1ZSkgPiAtMSlcblx0XHQubWFwKG9wdGlvbiA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2YWx1ZTogb3B0aW9uLnZhbHVlLFxuXHRcdFx0XHRsYWJlbDogb3B0aW9uLmxhYmVsXG5cdFx0XHR9XG5cdFx0fSlcbn1cblxuZnVuY3Rpb24gYnVpbGRBcHBsaWVkRmlsdGVyT3B0aW9uc0Zyb21SYW5nZVJlcXVlc3QoXG5cdGZpbHRlck9wdGlvbnM6IERhZmZDYXRlZ29yeUZpbHRlck9wdGlvbltdLCBmaWx0ZXJSZXF1ZXN0OiBEYWZmQ2F0ZWdvcnlGaWx0ZXJSYW5nZVJlcXVlc3Rcbik6IERhZmZDYXRlZ29yeUFwcGxpZWRGaWx0ZXJPcHRpb25bXSB7XG5cdHJldHVybiBmaWx0ZXJPcHRpb25zXG5cdC5maWx0ZXIob3B0aW9uID0+IGZpbHRlclJlcXVlc3QudmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpID4gLTEpXG5cdC5tYXAob3B0aW9uID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IG9wdGlvbi52YWx1ZSxcblx0XHRcdGxhYmVsOiBvcHRpb24ubGFiZWxcblx0XHR9XG5cdH0pXG59XG5cbmZ1bmN0aW9uIGJ1aWxkQXBwbGllZEZpbHRlck9wdGlvbnNGcm9tTWF0Y2hSZXF1ZXN0KFxuXHRmaWx0ZXJPcHRpb25zOiBEYWZmQ2F0ZWdvcnlGaWx0ZXJPcHRpb25bXSwgZmlsdGVyUmVxdWVzdDogRGFmZkNhdGVnb3J5RmlsdGVyTWF0Y2hSZXF1ZXN0XG4pOiBEYWZmQ2F0ZWdvcnlBcHBsaWVkRmlsdGVyT3B0aW9uW10ge1xuXHRyZXR1cm4gZmlsdGVyT3B0aW9uc1xuXHQuZmlsdGVyKG9wdGlvbiA9PiBmaWx0ZXJSZXF1ZXN0LnZhbHVlID09PSBvcHRpb24udmFsdWUpXG5cdC5tYXAob3B0aW9uID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsdWU6IG9wdGlvbi52YWx1ZSxcblx0XHRcdGxhYmVsOiBvcHRpb24ubGFiZWxcblx0XHR9XG5cdH0pXG59XG4iXX0=